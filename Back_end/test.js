const m = require('./config/config');



const testFunc = async () => {
    result = await m.query("select * from users");
    console.log(result.rows);

}

testFunc()


