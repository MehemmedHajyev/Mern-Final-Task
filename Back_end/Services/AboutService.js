const pool = require("../config/config");
const AboutModel = require('../models/about/AboutModel');

const createAbout = async (aboutData) => {
    const query = `
        INSERT INTO About (
            description,
            section_top_title,
            section_top_description,
            section_top_description1,
            section_top_description2,
            section_middle_title,
            section_middle_sub_title1,
            section_middle_sub_description1,
            section_middle_sub_image1,
            section_middle_sub_title2,
            section_middle_sub_description2,
            section_middle_sub_image2,
            section_footer_title,
            section_footer_description
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
        RETURNING *;
    `;

    const values = [
        aboutData.description,
        aboutData.section_top_title,
        aboutData.section_top_description,
        aboutData.section_top_description1,
        aboutData.section_top_description2,
        aboutData.section_middle_title,
        aboutData.section_middle_sub_title1,
        aboutData.section_middle_sub_description1,
        aboutData.section_middle_sub_image1,
        aboutData.section_middle_sub_title2,
        aboutData.section_middle_sub_description2,
        aboutData.section_middle_sub_image2,
        aboutData.section_footer_title,
        aboutData.section_footer_description
    ];

    try {
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (err) {
        console.error('Error executing query', err.stack);
        throw err;
    }
};



const getAllAbouts = async () => {
    try {
        const result = await pool.query('SELECT * FROM About');
        return result.rows;
    } catch (err) {
        console.error('Error fetching Abouts:', err);
        throw err;
    }
};


module.exports = {
    createAbout,
    getAllAbouts
}