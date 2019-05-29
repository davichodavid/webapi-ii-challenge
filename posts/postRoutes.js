const express = require('express');
const router = express.Router();

const database = require('../data/db');

/*************** Get all posts *************/
router.get('/', (req, res) => {
  database.find()
    .then(posts => {
      res.status(200).json(posts)
    })
    .catch(err => {
      res.status(500).json({
        error: "The posts information could not be retrieved.",
      })
    })
});

/*************** Get posts by ID *************/
router.get('/:id', (req, res) => {
  const { id } = req.params;
  database.findById(id)
    .then(post => {
      res.status(200).json(post);
    })
    .catch(err => {
      res.status(500).json({
        error: "The post information could not be retrieved."
      })
    })
});

/*************** Inserts a post *************/
router.post('/', (req, res) => {
  const postInfo = req.body;

  database.insert(postInfo)
    .then(post => {
      if (!postInfo.title || !postInfo.contents) {
        res.status(400).json({
          errorMessage: "Please provide title and contents for the post"
        });
      } else {
        res.status(200).json(post)
      };
    })
    .catch(err => {
      res.status(500).json({
        error: "There was an error while saving the post to the database"
      });
    });
});





module.exports = router;