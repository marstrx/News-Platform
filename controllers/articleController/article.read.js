import Article from "../../models/article.model.js";

const featchAllArticles = async (req, res) => {
  try {
    const articles = await Article.find();

    if (articles.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No articles found",
      });
    }

    return res.status(200).json({
      success: true,
      articles,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error during fetching",
    });
  }
};

export default featchAllArticles;
