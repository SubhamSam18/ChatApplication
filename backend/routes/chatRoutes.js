const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();
const { accessChat } = require("../controller/chatController");

router.route("/").post(protect, accessChat);
// router.route("/").get(protect, fetchChat);
// router.route('/group').post(protect,createGroupChat);
// router.route("/rename").put(protect, renameGroup);
// router.route("/groupRevome").put(protect, removeFromGroup);
// router.route("/groupAdd").put(protect, addToGroup);

module.exports = router;
