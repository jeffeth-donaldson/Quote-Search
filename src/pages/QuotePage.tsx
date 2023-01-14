import { SearchBar } from "../components/SearchBar";
import { Header } from "../components/Header";
import { useState } from 'react';
import { Quote } from "../components/Quote";
import { QuoteAPI } from "../components/Quote";
import { QuoteList } from "../components/QuoteList";

export const QuotePage = () => {
    const [hasSearched, setHasSearched] = useState(false);
    const [mainQuote, setMainQuote] = useState({
        _id: "",
        content: "Loading Quote...",
        author: "",
        tags: [],
        authorSlug: "",
        dateAdded: "",
        dateModified: "",
        length: "",
    });

    // fetch("https://api.quotable.io/random")
    //     .then(res => res.json())
    //     .then((json:QuoteAPI) => setMainQuote(json))


    if (hasSearched) {
        return (
            <main>
                <SearchBar className="Search" submitAction={() => alert("gamer time")} />
                <Header/>
            </main>
        )
    } else {
        return (
            <main>
                <Header/>
                <SearchBar className="Search" submitAction={() => alert("gamer time")} />
                <Quote is_main={true} quote_author={mainQuote.author} quote_body={mainQuote.content} />
            </main>
        )
    }
}