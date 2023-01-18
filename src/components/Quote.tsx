interface QuoteProps {
    is_main?: boolean;
    quote_body: string;
    quote_author: string;
}

export interface QuoteAPI {
    _id: string;
    content: string;
    author: string;
    tags: Array<string>;
    authorSlug: string;
    dateAdded: string;
    dateModified: string;
    length: number;
}

export const Quote = ({is_main=false, quote_body, quote_author}: QuoteProps) => {
    return (
        <div className={is_main ? "mainQuote" : "quote"}>
            <p className="quote_body">"{quote_body}"</p>
            <p className="quote_author">-{quote_author}</p>
        </div>
    )
}