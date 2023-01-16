import { Quote } from "./Quote";
import { QuoteAPI } from "./Quote";

interface QuoteListProps {
    quotes: QuoteList; 
}

interface QuoteList {
    count?: number;
    lastItemIndex?: number;
    page?: number;
    results: Array<QuoteAPI>;
}

export const QuoteList = ({quotes}: QuoteListProps) => {
    const list = quotes.results.map( (quote:QuoteAPI) => {
        return <Quote key={quote._id} quote_body={quote.content} quote_author={quote.author}/>
    }
    );
    return (
        <div className="quotesDiv">{list}</div>
    );
}