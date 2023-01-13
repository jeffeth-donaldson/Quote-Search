import { SearchBar } from "../components/SearchBar";
import { Header } from "../components/Header";

export const QuotePage = () => {
    return (
        <main>
            <Header/>
            <SearchBar className="Search" submitAction={() => alert("gamer time")} />
        </main>
    )
}