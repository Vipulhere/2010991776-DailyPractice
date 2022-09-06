import './Header.css';
const Header = ({title}) =>{
    return (
        <header>
        <h1 style={{color: "red"}} >{title}</h1>
        <h1 className='h2Head'>Your way of Doing</h1>
        <h1 style={headingStyle}>Let's Learn{title.name}</h1>
        <button className="btn">Add</button>
        </header>
        );
}

const headingStyle={
    color :'darkcyan',
    backgroundColor:'white',
    textAlign:'center'
}

Header.defaultProps = {
    title: 'Task Tracker',
}
export default Header;