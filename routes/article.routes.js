import express from "express";
import featchAllArticles from "../controllers/articleController/article.read.js";
import addArticle from "../controllers/articleController/article.add.js";
import deleteOneArticleById from "../controllers/articleController/article.delete.js";

// create route 
const articleRouter = express.Router();

articleRouter.get("/read" ,featchAllArticles);
// Add new article
articleRouter.post("/add" ,addArticle);
// Delete Article by id
articleRouter.delete("/delete/:id", deleteOneArticleById);

export default articleRouter;