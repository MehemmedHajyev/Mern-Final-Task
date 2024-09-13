
const FAQService = require('../Services/FAQService');

const createFAQ = async (req, res) => {
    const { question, answer } = req.body;

    const result = await FAQService.createFAQ(question, answer);
    if (!result) return res.sendStatus(500);

    return res.sendStatus(201);
};

const updateFAQ = async (req, res) => {
    const { id } = req.params;
    const { question, answer } = req.body;

    const result = await FAQService.updateFAQ(id, question, answer);
    if (!result) return res.sendStatus(500);

    return res.sendStatus(202);
};

const deleteFAQ = async (req, res) => {
    const { id } = req.params;

    const result = await FAQService.deleteFAQ(id);
    if (!result) return res.sendStatus(500);

    return res.sendStatus(204);
};

const getFAQByID = async (req, res) => {
    const id = req.params.id;

    const result = await FAQService.getFAQByID(id);
    if (!result) return res.sendStatus(500);

    return res.status(200).json(result);
};

const getFAQAll = async (req, res) => {
    const result = await FAQService.getFAQAll();
    if (!result) return res.sendStatus(500);

    return res.status(200).json(result);
};


module.exports = {
    createFAQ,
    updateFAQ,
    deleteFAQ,
    getFAQByID,
    getFAQAll,
};