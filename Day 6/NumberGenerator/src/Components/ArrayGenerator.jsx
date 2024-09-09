
const ArrayGenerator = ({numbersArray}) => {
    const squarestyle = {
        width: "150px",
        height: "145px",
        display: "inline-block",
        margin: "10px",
        textAlign: "center",
        lineHeight: "50px",
        color: "white",
        fontSize: "15px",
        fontWeight: "bold",
        paddingTop: "40px"
    };
    const divStyle = {
        textAlign: "left",
        marginLeft: "10%", 
        marginTop: "30px"

    };
    return(
        <div style={divStyle}>
            {numbersArray.map((item,index) => (
                <div key = {index} style={{...squarestyle, backgroundColor: item.color}}>
                    <h1>{item.number}</h1>
                </div>
            ))}
        </div>
    );
};

export default ArrayGenerator;
