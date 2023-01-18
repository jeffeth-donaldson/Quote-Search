interface HeaderProps {
    message?: string;
}

export const Header = ({message="Quote Search"}: HeaderProps) => {
    if (message == "Quote Search") {
        return (<h1>{message}</h1>)
    } else {
        return (<h2>{message}</h2>)
    }
}