import { FormEventHandler } from "react";

interface SearchButtonProps {
    submitAction: FormEventHandler;
}

export const SearchButton = ({submitAction}: SearchButtonProps) => {
    return (
        <button className="searchButton" onClick={submitAction}>Search</button>
    )
}