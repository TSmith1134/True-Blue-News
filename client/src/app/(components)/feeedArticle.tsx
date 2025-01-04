import Image from 'next/image'

interface Props {
    id: string,
    heading: string,
    brief: string
}

const FeedArticle: React.FC<Props> = ({id, heading, brief}) => {
    return(
        <article tabIndex={0} className="feedArticle" id={id}>
            <Image
                className='feedArticleThubnail'
                src='/globe.svg'
                alt='Article thumbnail'
                width={0}
                height={0}
            />
            <div className='feedArticleContent'>
                <h2 className='feedArticleTitle'>{heading}</h2>
                <p className='feedArticleBrief'>{brief}</p>
                <div className='feedArticleTags'>
                    <a>LOCAL</a>
                    <a>POLITICS</a>
                    <a>LAW</a>
                </div>
            </div>
        </article>
    )
}

export default FeedArticle