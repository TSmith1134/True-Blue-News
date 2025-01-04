import Account from "./account";
import Logo from "./logo";
import SearchBar from "./searchbar";
import "../../styles/header.css"

export default function Header(){
    return(
        <header>
            <Logo/>
            <SearchBar/>
            <Account/>
        </header>
    )
}