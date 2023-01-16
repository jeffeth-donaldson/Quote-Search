import { ChangeEventHandler, FormEventHandler } from "react";

interface SearchBarProps {
    className: string;
    submitAction: FormEventHandler;
    onChange: ChangeEventHandler;
    value: string;
}

export const SearchBar = ({className, submitAction, onChange, value}: SearchBarProps) => {
    return (
        <div className={className}>
            <form onSubmit={submitAction}>
                <div className="flex-input">
                    <input onChange={onChange} value={value} type="text"></input>
                </div>
            </form>
        </div>
    )
}