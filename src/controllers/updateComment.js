const { Comments } = require('../db');

const updateComment = async (id, formData) => {
  const {
    text, like, dislike, likedBy, dislikedBy
  } = formData

  if (!text) {
    throw {
      status: false,
      message: 'Missing required information.'
    }
  }

  try {
    const commentToUpdate = await Comments.findByPk(id)
    if (!commentToUpdate) {
      throw {
        status: false,
        message: `Comment with ID ${id} not found`
      }
    } else {
      await commentToUpdate.update({
        text, like, dislike, likedBy, dislikedBy
      });

      return {
        message: 'Comment modified succesfully!'
      };
    }
  } catch (error) {
    throw {
      status: false,
      message: error
    };
  }
};

module.exports = updateComment;