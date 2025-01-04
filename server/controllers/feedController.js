const articles = require("../models/articles.json")


const getFeed = async (req, res) => {
    const filter = parseInt(req.params.filter)
    const articlesList = {...articles}
    const filteredArticles = []

    if(!Number.isNaN(filter)){
        articlesList.articles.forEach(article => {
            if(article.tags.includes(filter)){
                filteredArticles.push(article)
            }
            articlesList.articles = filteredArticles
        })
        res.send(articlesList)
    }else {
        res.send(articlesList)
    }
    
}

module.exports =  getFeed