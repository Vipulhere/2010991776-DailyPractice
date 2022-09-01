import './Header.css';
const Header = (props) =>{
    return (
        <header>
        <h1>Hello, {props.title}</h1>
        </header>
        );
}
export default Header;