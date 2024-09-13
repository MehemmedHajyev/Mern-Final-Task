const { Router } = require('express');

const UserController = require('../Contoller/UserController');

const router = Router();
router.get("/:id", UserController.getUsersId);
router.get("/", UserController.getAllUsers);
router.post("/", UserController.createUser);





module.exports = router


