import React from "react";
import ColorCard from "./ColorCard";
import Data from "../../Data.jsx"

const ColorCardCont = () => {
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

    const ColorData = Data({name: "color"});
    const {colors} = ColorData;
    return(<>
        <div style={divstyle}>
        {colors.map((color, index) => (
                <ColorCard key={index} color = {color}></ColorCard>
            ))}
            
        </div>
    </>);
};

export default ColorCardCont;