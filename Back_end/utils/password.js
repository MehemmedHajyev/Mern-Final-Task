require('dotenv').config();
const bcrypt = require('bcrypt');

const generateHash = (password) => {
    const hash = bcrypt.hashSync(password, process.env.SALT);
    return hash;
};

const compareHash = (password, hash) => {
    return bcrypt.compareSync(password, hash);
};

module.exports = {
    generateHash,
    compareHash,
};