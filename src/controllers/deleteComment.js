const { Comments } = require('../db');

const deleteComment = async (id) => {
  const commentToDelete = await Comments.findOne({
    where: { id },
  });

  if (!commentToDelete) {
    throw { message: "Not Found!" }
  } else {
      await Comments.destroy({
        where : {id : id}
      })
    }
  
  return {
    status: 'done',
    message: 'Comment deleted successfully!',
  }
};

module.exports = deleteComment;