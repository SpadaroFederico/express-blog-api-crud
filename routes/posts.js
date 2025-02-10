const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');

router.get("/", postsController.getAllPosts);      // Index
router.get("/:id", postsController.getPostById);   // Show
router.post("/", postsController.createPost);      // Create
router.put("/:id", postsController.updatePost);    // Update
router.delete("/:id", postsController.deletePost); // Destroy

module.exports = router;
