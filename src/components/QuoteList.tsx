import { Quote } from "./Quote";
import { QuoteAPI } from "./Quote";

interface QuoteListProps {
    quotes: QuoteList; //TODO: need to get a specific type for this
}

interface QuoteList {
    count: number;
    lastItemIndex: number;
    page: number;
    results: Array<QuoteAPI>;
}

export const QuoteList = ({quotes}: QuoteListProps) => {
    const list = quotes.results.map( (quote:QuoteAPI) => {
        <Quote quote_body={quote.content} quote_author={quote.author}/>
    }
    );
    return (
        <div className="quotesDiv">list</div>
    );
}