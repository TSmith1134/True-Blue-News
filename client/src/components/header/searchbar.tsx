import  Form  from 'next/form'

export default function SearchBar(){
    return(
        <div className='searchBar'>
            <Form action="/search">
                <input name='searchQuery' placeholder='Search...'/>
                <button type="submit">Search</button>
            </Form>
        </div>
    )
}