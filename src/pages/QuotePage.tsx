import { SearchBar } from "../components/SearchBar";
import { Header } from "../components/Header";
import { ChangeEvent, FormEvent, SyntheticEvent, useEffect, useState } from 'react';
import { Quote } from "../components/Quote";
import { QuoteAPI } from "../components/Quote";
import { QuoteList } from "../components/QuoteList";
import { SearchButton } from "../components/SearchButton";

export const QuotePage = () => {
    const [hasSearched, setHasSearched] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);
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
    const [searchTerm, setSearchTerm] = useState("");
    const [searchedTerm, setSearchedTerm] = useState("");
    const [searchResults, setSearchResults] = useState({results:[]});
    useEffect( () => {
            fetch("https://api.quotable.io/random")
                .then(res => res.json())
                .then((json) => setMainQuote(json));
        }, []
        );
    const updateSearchTerm = (e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value);
    const search = (event:SyntheticEvent<HTMLInputElement>) => {
        setHasSearched(true);
        setSearchedTerm(searchTerm);
        event.preventDefault();
        console.log(searchTerm);
        fetch(`https://usu-quotes-mimic.vercel.app/search/quotes?query=${searchTerm.replaceAll(' ','&')}=author`)
            .then(res => res.json())
            .then((json) => setSearchResults(json));
    }

    if (hasSearched) {
        return (
            <main>
                <SearchBar className="Search" value={searchTerm} onChange={updateSearchTerm} submitAction={search} />
                <Header message={`Results of: "${searchedTerm}"`}/>
                <QuoteList quotes={searchResults} />
            </main>
        )
    } else {
        return (
            <main>
                <Header/>
                <SearchBar className="Search" value={searchTerm} onChange={updateSearchTerm} submitAction={search} />
                <Quote is_main={true} quote_author={mainQuote.author} quote_body={mainQuote.content} />
            </main>
        )
    }
}