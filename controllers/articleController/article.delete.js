import Article from "../../models/article.model.js";

const deleteOneArticleById = async (req, res) => {
  try {
    // get the id
    const { id } = req.params;

    const article = await Article.findById(id);

    if (!article) {
      return res.status(404).json({
        success: false,
        message: "Article not found",
      });
    }
    // delete the article by id
    await Article.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message: "Article deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error during deleting article",
      error: error.message,
    });
  }
};

// export deleteOneArticleById function
export default deleteOneArticleById;
