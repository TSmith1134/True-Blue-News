import '../../../styles/article.css'
import ArticleContent from './(components)/articleContent'
import ArticleDetails from './(components)/articleDetails'

export default function Article() {
    return(
        <div className="article">
            <ArticleDetails/>
            <ArticleContent/>
        </div>
    )
}