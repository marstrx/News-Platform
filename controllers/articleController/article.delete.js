import Article from "../../models/article.model.js";


const DeleteOneArticleById= async(req,res)=>{
    try {
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error during Deleting this Article",
        })
    }
}

// export the DeleteOneArticleById function

export default DeleteOneArticleById;