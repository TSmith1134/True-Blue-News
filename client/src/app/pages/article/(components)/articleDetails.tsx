import Link from 'next/link'
import '../../../../styles/articleDetails.css'
import Image from 'next/image'

export default function ArticleDetails() {
    return (
        <div className="articleDetails">
            <div className='publishingDetails'>
                <div className='publishingDate'>
                    <p>Date Published:</p>
                    <p>    01/01/2025 - 12:00pm</p>
                </div>
                <div className='editiedDate'>
                    <p>Last Edited:</p>
                    <p>    01/01/2025 - 12:00pm</p>
                </div>
                <div className='publishingFactChecked'>
                <p>Fact Checked:</p>
                <p>    YES</p>
                </div>
                Categories:
                <ul className='publishingCategories'>
                    <li>
                        <Link href='/1'>BREAKING</Link>
                    </li>
                    <li>
                        <Link href='/3'>WORLD</Link>
                    </li>
                </ul>
            </div>
            <div className='authorDetails'>
                <p>Author:</p>
                <Link href='/' className='author'>
                    <Image src='/portrait.bmp' alt='' width={0} height={0}/>
                    <p>Author Name</p>
                </Link>
                <div className='factCheckers'>
                    Fact checkers:
                    <div className='author'>
                        <Image src='/portrait.bmp' alt='' width={0} height={0}/>
                        <Link href='/'>Fact Checker1</Link>
                    </div>
                    <div className='author'>
                        <Image src='/portrait.bmp' alt='' width={0} height={0}/>
                        <Link href='/'>Fact Checker2</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}