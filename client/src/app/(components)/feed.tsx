"use client"

import FeedArticle from "./feeedArticle";
import '../../styles/feed.css'
import React, { Suspense, useEffect, useState } from "react";

type Article = {
    id: string,
    header: string,
    brief: string
}

type Props ={
    filter?: number
}

async function getFeed(filter: Props) {
    const response = await fetch(
        'http://localhost:3000/feed/' + filter
    )
    return response.json()
    
}

const Feed: React.FC<Props> = ({filter}: Props) => {
    const [articles, setArticles] = useState<Article[]>([])
    useEffect(()=>{
        async function setData() {
            const data = await getFeed(filter as Props)
            setArticles(data.articles)
        }
        setData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <Suspense fallback={<div>Loading...</div>}>
            <div className="feed">
                {
                    articles.map((article) => {
                        return <FeedArticle id={article.id} key={article.id} heading={article.header} brief={article.brief}/>
                    })
                }
            </div> 
        </Suspense>
        
    )
}

export default Feed