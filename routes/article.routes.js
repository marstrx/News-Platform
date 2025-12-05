import express from "express";
import featchAllArticles from "../controllers/articleController/article.read.js";
import addArticle from "../controllers/articleController/article.add.js";

// create route 
const articleRouter = express.Router();

articleRouter.get("/read" ,featchAllArticles);
// Add new article
articleRouter.post("/add" ,addArticle);

export default articleRouter;