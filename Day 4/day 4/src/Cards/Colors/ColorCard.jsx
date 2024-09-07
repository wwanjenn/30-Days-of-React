import React from "react";

const ColorCard = (props) => {
    const CardColor = props.color;
    const divstyle = {
        color: "white",
        background: {CardColor},
        width: "90%",
        margin: "auto",
        marginTop: "10px"
    };
    return(<>
        <div style={divstyle}>
            <p>{CardColor}</p>
        </div>    
    </>);
};

export default ColorCard;