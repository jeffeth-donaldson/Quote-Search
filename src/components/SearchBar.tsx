import { FormEventHandler } from "react";

interface SearchBarProps {
    className: string;
    submitAction: FormEventHandler;
}

export const SearchBar = ({className, submitAction}: SearchBarProps) => {
    return (
        <div className={className}>
            <form onSubmit={submitAction}>
                <div className="flex-input">
                    <input type="text"></input>
                </div>
            </form>
        </div>
    )
}