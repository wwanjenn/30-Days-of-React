import React from "react";
import ColorCard from "./ColorCard";

const ColorCardCont = () => {
    const colors = [
        "#518cef",
        "#3b10c4",
        "#9aede6",
        "#8ee763",
        "#a30dd0"
    ]
    return(<>
        <div style={divstyle}>
        {colors.map((color, index) => (
                <ColorCard key={index} color = {color}></ColorCard>
            ))}
            
        </div>
    </>);
};

export default ColorCardCont;