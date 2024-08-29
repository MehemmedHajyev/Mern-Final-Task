const productService = require('../Services/ProductService')


const productService = async (req, res) => {
    const result = await productService.getAllProduct();
    res.json(result);
};


module.exports = {
    productService,
}