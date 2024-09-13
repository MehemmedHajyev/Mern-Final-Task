const pool = require("../config/config");

const UserModel = require('../models/user/user')




const getAllUser = async () => {
    try {
        const result = await pool.query('select * from users ');
        const data = UserModel.mapAll(result.rows);
        return data;
    } catch {
        return false;
    }
};


const createUser = async (username, password, email) => {
    try {
        const result = await pool.query('insert into users (username, password, email)  values ($1, $2 ,$3)', [username, password, email]);
        console.log('user  ok');
        return true
    }
    catch (e) {
        console.log(e);
        return false;
    }
}



const getUserByID = async (id) => {
    try {
        const parsedID = parseInt(id);
        const result = await pool.query('select * from users where id = $1', [parsedID]);
        const data = UserModel.mapOne(result.rows[0]);
        return data;
    } catch (e) {
        console.log(e);
        return false;
    }
};






const getByEmail = async (email) => {
    try {
        const result = await pool.query('select * from users where email = $1', [email]);
        console.log('user  ok');
        const userData = UserModel.mapOne(result.rows[0])
        return userData
    }
    catch (e) {
        console.log(e);
        return false;
    }
}



module.exports = {
    getAllUser,
    createUser,
    getByEmail,
    getUserByID,
 
};