interface HeaderProps {
    message?: string;
}

export const Header = ({message="Quote Search"}: HeaderProps) => {
    return (
        <h1>{message}</h1>
    )
}