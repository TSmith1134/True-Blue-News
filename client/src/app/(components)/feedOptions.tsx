import Link from "next/link"
import "../../styles/feedOptions.css"

export default function FeedOptions(){
    return(
        <div className="feedOptions">
            <nav className="feedNav">
                <Link href='/'>HOME</Link>
                <Link href="/1">BREAKING</Link>
                <Link href="/2">LOCAL</Link>
                <Link href="/3">WORLD</Link>
                <Link href="/4">POLITICS</Link>
                <Link href="/5">BUSINESS</Link>
                <Link href="/6">SPORT</Link>
                <Link href="/7">LAW</Link>
                <Link href="/8">TECHNOLOGY</Link>
                <Link href="/9">ENTERTAINMENT</Link>
            </nav>
        </div>
    )
}