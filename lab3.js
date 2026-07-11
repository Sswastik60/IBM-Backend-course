async function Fx() {
    let success = false;
    if (success) {
        return 'the operation was successful';
    }
    else{
        throw new Error('the operation failed');
    }
}

async function main() {
    try {
        let result = await Fx();
        console.log(result);
    } catch (error) {
        console.error(error.message);
    }
}

main();