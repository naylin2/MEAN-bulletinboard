const express = require("express");
const { createUser, getAllUser, getUser, deleteUser, updateUser } = require("../controllers/UserController");

const router = express.Router();

router.post("/", createUser);
router.get("/", getAllUser);
router.get("/:id", getUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

module.exports = router;
