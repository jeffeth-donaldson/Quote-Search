import { ChangeEventHandler, FormEventHandler } from "react";
import { SearchButton } from "./SearchButton";

interface SearchBarProps {
    className: string;
    submitAction: FormEventHandler;
    onChange: ChangeEventHandler;
    value: string;
}

export const SearchBar = ({className, submitAction, onChange, value}: SearchBarProps) => {
    return (
        <div className={className}>
            <table className={className}>
                <tr>
                    <td>
                        <form onSubmit={submitAction}>
                            <div className="flex-input">
                                <input className="searchBar" onChange={onChange} value={value} type="text"></input>
                            </div>
                        </form>
                    </td>
                    <td>
                        <SearchButton submitAction={submitAction} />
                    </td>
                </tr>
            </table>

        </div>
    )
}