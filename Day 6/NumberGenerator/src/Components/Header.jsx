
const Header = ({onGenerateClick}) => {
    const headStyle = {
        textAlign: "center"
    };
    const style1 = {
        marginTop: "25px",
        marginBottom: "5px"
    }
    const style2 = {
        marginBottom: "15px"
    }
    return(
        <>
            <header style={headStyle}>
                <h1 style={style1}>30 Days of React</h1>
                <h4 style={style2}>Number Generator</h4>
                <button onClick={onGenerateClick}>Generate Number</button>
            </header>
        </>
    );
};
export default Header;