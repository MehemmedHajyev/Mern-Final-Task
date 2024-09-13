const pool = require('../Database/connection'); // PostgreSQL bağlantısı faylına yol

// ORM istifadə edirsinizsə, Sequelize modelini daxil edin
const { Product } = require('../models/products/products');



const getAllProduct = async (product) => {
    const result = await pool.query("select * from products", [
        result
    ]);
    if (!result) {
        return new ErrorResult("Product not found");
    } else {

        return new SuccessResult("Product found successfully", product);
    }

};











const productService = {
    async deleteProduct(productId) {
        try {
            const result = await pool.query('DELETE FROM products WHERE id = $1 RETURNING *', [productId]);
            if (result.rows.length === 0) {
                console.log('Product not found');
                return null;
            }
            console.log('Product deleted:', result.rows[0]);
            return result.rows[0];
        } catch (err) {
            console.error('Error deleting product:', err);
            throw err;
        }

        // Sequelize istifadesi:

        try {
            const result = await Product.destroy({
                where: { id: productId }
            });
            if (result === 0) {
                console.log('Product not found');
                return null;
            }
            console.log('Product deleted');
            return result;
        } catch (err) {
            console.error('Error deleting product:', err);
            throw err;
        }

    }
};






module.exports = {
    productService,
    getAllProduct,



}

