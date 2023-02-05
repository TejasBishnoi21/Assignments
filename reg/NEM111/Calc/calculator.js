const arg = process.argv.slice(2);

arg[1] = Number(arg[1]);
arg[2] = Number(arg[2]);

switch(arg[0]){
    case 'add':
        console.log(`${arg[1]+arg[2]}`);
        break;
    case 'subs':
        console.log(`${arg[1]-arg[2]}`);
        break;
    case 'mult':
        console.log(`${arg[1]*arg[2]}`);
        break;
    case 'divide':
        console.log(`${arg[1]/arg[2]}`);
        break;
    case 'sin':
        let res = Math.asin(arg[1])
        console.log(res)
        break;
    case 'cos':
        let res2 = Math.acos(arg[1])
        console.log(res2)
        break;
    case 'random':
        const crypto = require("crypto");
        console.log(crypto.randomInt(arg[1]));
        break;
    default:
        console.log(`Enter Correct Input`)
}