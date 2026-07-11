

let json = {
  "users": [
    {
      "id": 1,
      "name": "Ava Thompson",
      "email": "ava.thompson@example.com",
      "age": 29,
      "isActive": true,
      "role": "admin",
      "address": {
        "street": "123 Maple St",
        "city": "Springfield",
        "zip": "62704",
        "country": "USA"
      },
      "tags": ["premium", "early-adopter"]
    },
    {
      "id": 2,
      "name": "Rahul Mehta",
      "email": "rahul.mehta@example.com",
      "age": 34,
      "isActive": false,
      "role": "editor",
      "address": {
        "street": "45 Oak Avenue",
        "city": "Bhubaneswar",
        "zip": "751001",
        "country": "India"
      },
      "tags": ["beta-tester"]
    },
    {
      "id": 3,
      "name": "Lena Fischer",
      "email": "lena.fischer@example.com",
      "age": 41,
      "isActive": true,
      "role": "viewer",
      "address": {
        "street": "9 Birchwood Lane",
        "city": "Berlin",
        "zip": "10115",
        "country": "Germany"
      },
      "tags": []
    }
  ],
  "products": [
    {
      "id": "p001",
      "name": "Wireless Mouse",
      "price": 24.99,
      "inStock": true,
      "category": "Electronics",
      "rating": 4.3
    },
    {
      "id": "p002",
      "name": "Standing Desk",
      "price": 349.00,
      "inStock": false,
      "category": "Furniture",
      "rating": 4.7
    }
  ],
  "meta": {
    "generatedAt": "2026-07-11T10:00:00Z",
    "totalUsers": 3,
    "totalProducts": 2
  }
};
obj=JSON.stringify(json);
obj=JSON.parse(obj);
console.log(obj.users[0].name); // Ava Thompson
console.log(obj.users[1].address.city); // Bhubaneswar