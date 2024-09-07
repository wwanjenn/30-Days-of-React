import React from "react";

const ColorCard = (props) => {
    const CardColor = props.color;
    const divstyle = {
        color: "whitesmoke",
        background: CardColor,
        width: "var(90% - 10px)",
        height: "50px",
        margin: "10px 10px 0 10px",   
        border: "0px solid white",
        borderRadius: "10px",
        paddingTop: "10px"
    };
    return(<>
        <div style={divstyle}>
            <p>{CardColor}</p>
        </div>    
    </>);
};

export default ColorCard;