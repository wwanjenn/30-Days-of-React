import React from "react";
import ColorCard from "./ColorCard";

const ColorCardCont = () => {
    const colors = [
        "#518cef",
        "#3b10c4",
        "#9aede6",
        "#8ee763",
        "#a30dd0"
    ];
    const divstyle = {
        background: "black",
        margin: "auto",
        marginTop: "30px",
        width: "95%",
        height: "fit-content",
        border: "10px solid black",
        borderRadius: "10px",
        textAlign: "center",
        paddingBottom: "10px",
        marginBottom: "30px"
    };
    return(<>
        <div style={divstyle}>
        {colors.map((color, index) => (
                <ColorCard key={index} color = {color}></ColorCard>
            ))}
            
        </div>
    </>);
};

export default ColorCardCont;