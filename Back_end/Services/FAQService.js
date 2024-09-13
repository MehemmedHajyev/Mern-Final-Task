const pool = require("../config/config");
const FAQ = require("../models/faq/faq");

const createFAQ = async (question, answer) => {
    try {
        const result = await pool.query('insert into faqs (question, asnwer) values ($1, $2)', [question, answer]);
        return true;
    } catch {
        return false;
    }
};

const updateFAQ = async (id, question, answer) => {
    try {
        const result = await pool.query('update faqs set question = $1, answer = $2 where id = $3', [question, answer, id]);
        return true;
    } catch {
        return false;
    }
};

const deleteFAQ = async (id) => {
    try {
        const result = await pool.query('delete from faqs where id = $1', [id]);
        return true;
    } catch {
        return false;
    }
};

const getFAQByID = async (id) => {
    try {
        const parsedID = parseInt(id);
        const result = await pool.query('select * from faqs where id = $1', [parsedID]);
        const data = FAQ.mapOne(result.rows[0]);
        return data;
    } catch (e) {
        console.log(e);
        return false;
    }
};

const getFAQAll = async (id) => {
    try {
        const result = await pool.query('select * from faqs');
        const data = FAQ.mapAll(result.rows);
        return data;
    } catch {
        return false;
    }
};

module.exports = {
    createFAQ,
    updateFAQ,
    deleteFAQ,
    getFAQByID,
    getFAQAll,
};