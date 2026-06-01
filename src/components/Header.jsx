import Logo from './Logo.jsx';
/**
 * style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }} remplazo
 */
const Header = (props) => {
    let { titulo } = props.element;
    return (
        <header className="d-flex align-items-center justify-content-center gap-2" >
            <Logo />
            <h1>{titulo}</h1>
        </header>
    )
}

export default Header
