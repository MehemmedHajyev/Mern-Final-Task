const UserService = require('../Services/UserService');
const { generateHash } = require('../utils/password');



const createUser = async (req, res) => {
    const { username, password, email } = req.body;
    const hash = generateHash(password);
    const result = await UserService.createUser(username, hash, email);
    if (!result) return res.sendStatus(500);
    return res.sendStatus(201);
};


const getAllUsers = async (req, res) => {
    const result = await UserService.getAllUser();
    if (!result) return res.sendStatus(500);
    return res.status(200).json(result);
};


const getUsersId = async (req, res) => {

    const id = req.params.id;

    const result = await UserService.getUserByID(id);
    if (!result) return res.sendStatus(404);
    return res.status(200).json(result);
}



module.exports = {
    createUser,
    getAllUsers,
    getUsersId,
};
