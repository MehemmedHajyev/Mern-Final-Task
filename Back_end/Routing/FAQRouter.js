const { Router } = require('express');
const FAQController = require('../Contoller/FAQController');

const router = Router();

router.get('/:id', FAQController.getFAQByID);
router.get('/', FAQController.getFAQAll);
router.post('/', FAQController.createFAQ);
router.put('/:id', FAQController.updateFAQ);
router.delete('/:id', FAQController.updateFAQ);

module.exports = router;