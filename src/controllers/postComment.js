const { Comments } = require('../db');

const postComment = async (formData) => {
  const {
    text, publicationId, userID, image, username, like, dislike, createdInDB
  } = formData

  if (!text) {
    throw {
      status: false,
      message: 'Missing required information.'
    }
  }

  const newComment = await Comments.create({
    text, publicationId, userID, image, username, like, dislike, createdInDB
  })

  return {
    status: 'done',
    message: "New comment added successfully!",
    comment: newComment
  }
};

module.exports = postComment;