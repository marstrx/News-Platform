import Article from "../../models/article.model.js";

const addArticle = async (req, res) => {
  try {
    const { title, content, image, category, author } = req.body;

    if (!title || !content || !category) {
      return res.status(400).json({
        success: false,
        message: "Title, content and category are required",
      });
    }

    const article = await Article.create({
      title,
      content,
      image,
      category,
      author,
    });

    res.status(201).json({
      success: true,
      message: "Article added successfully",
      article,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error during adding new article",
      error: error.message,
    });
  }
};

export default addArticle;