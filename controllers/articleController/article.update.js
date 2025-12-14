import Article from "../../models/article.model.js";

const updateArticleById = async (req, res) => {
  try {
    // new data
    const { title, content, image, category } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: "Title and content are required",
      });
    }

    // get the article id
    const { id } = req.params;
    // find the article
    const article = await Article.findById(id);

    if (!article) {
      return res.status(404).json({
        success: false,
        message: "Article not found",
      });
    }

    //  update the article fieldes
    article.title = title;
    article.content = content;
    if (image) article.image = image;
    if (category) article.category = category;

    // save the updated article
    await article.save();
  } catch (error) {}
};

export default updateArticleById;
