const express = require('express');
const jwt = require('jsonwebtoken');
const session = require('express-session');
const routes = require('./router/friends.js');
const app = new express();

let users = [];

//USER REGISTRATION
app.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if (username && password) {
        if(doesExist(username)) {
            return res.status(404).json({message: "User already exists!"});
        }else {
            users.push({"username": username, "password": password});
            return res.status(200).json({message: "User successfully registered. Now you can login"});
        }
    }
    return res.status(404).json({message: "Unable to register user."});
});

//the doesExist function checks if the username already exists in the users array
const doesExist = (username) => {
    let userswithsamename = users.filter((user) => {
        return user.username === username
    });
    if (userswithsamename.length > 0) {
        return true;
    } else {
        return false;
    }
}

//Now the authenticatedUser function checks if the username and password match any user in the users array
const authenticatedUser = (username, password) => {
    let validusers = users.filter((user) => {
        return (user.username === username && user.password === password)
    });
    if (validusers.length > 0) {
        return true;
    } else {
        return false;
    }
}

app.use(session({secret:"fingerpint"},resave=true,saveUninitialized=true));   
app.use(express.json());  
/*You will provide an endpoint for the registered users to login. This endpoint will do the following:
Return an error if the username or password is not provided.

Creates an access token that is valid for 1 hour (60 X 60 seconds) and logs the user in, if the credentials are correct.

Throws an error, if the credentials are incorrect. */

//LOGIN
app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if (!username || !password) {
        return res.status(404).json({message: "Error logging in"});
    }
    //this will create a token which will expire in 1 hour ie 60*60 seconds
    if (authenticatedUser(username,password)) {
        let accessToken = jwt.sign({
            data: password
        }, 'access', { expiresIn: 60 * 60 });
        req.session.authorization = {
            accessToken,username
        }
        return res.status(200).send("User successfully logged in");
    } else {
        return res.status(208).json({message: "Invalid Login. Check username and password"});
    }
});
/*We will now ensure that all operations restricted to authenticated users are intercepted by the middleware. The following code ensures that all the endpoints starting with /friends go through the middleware. It retrieves the authorization details from the session and verifies it. If the token is validated, the user is authenticated and the control is passed on to the next endpoint handler. If the token is invalid, the user is not authenticated and an error message is returned. */

app.use("/friends", function auth(req, res, next) {
    if(req.session.authorization) {
        let token = req.session.authorization['accessToken'];

        //verify the JWT token
        jwt.verify(token, "access", (err, user) => {
            if(!err) {
                req.user = user;    
                next();
            } else {
                return res.status(403).json({message: "User not authenticated"});
            }
        });
    } else {
        return res.status(403).json({message: "User not logged in"});
    }
});

const PORT =5000;
app.use("/friends", routes);
app.listen(PORT,()=>console.log("Server is running"));