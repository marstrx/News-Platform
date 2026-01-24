import express from "express";
import featchAllArticles from "../controllers/articleController/article.read.js";
import addArticle from "../controllers/articleController/article.add.js";
import deleteOneArticleById from "../controllers/articleController/article.delete.js";
import updateArticleById from "../controllers/articleController/article.update.js";

// create route
const articleRouter = express.Router();

articleRouter.get("/read", featchAllArticles);
// Add new article
articleRouter.post("/add", addArticle);
// Delete Article by id
articleRouter.delete("/delete/:id", deleteOneArticleById);
//  Update Article by Id
articleRouter.put("/update/:id", updateArticleById);

export default articleRouter;
