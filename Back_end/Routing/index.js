const { Router } = require('express');

const FAQRouter = require('./FAQRouter');
const USerRouter = require('./UserRouter');


const router = Router();

router.use('/faq', FAQRouter);
router.use('/users', USerRouter)

module.exports = router;