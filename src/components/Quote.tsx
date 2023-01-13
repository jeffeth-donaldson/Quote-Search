interface QuoteProps {
    is_main?: boolean;
    quote_body: string;
    quote_author: string;
}

export const Quote = ({is_main=false, quote_body, quote_author}: QuoteProps) => {
    return (
        <div className={is_main ? "quote" : "mainQuote"}>
            <p className="quote_body">quote_body</p>
            <p className="quote_author">quote_author</p>
        </div>
    )
}