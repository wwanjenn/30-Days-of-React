import React from "react";
import Data from "../../Data.jsx"

const FrontEndTechCard = () => {
    const divstyle = {
        background: "black",
        margin: "auto",
        marginTop: "30px",
        width: "95%",
        height: "50vh",
        border: "10px solid black",
        borderRadius: "10px",
        textAlign: "center"
        
    };

    const h1style = {
        color: "white",
        marginBottom: "20px",
        marginTop: "10px",
        fontWeight: "500",
        fontSize: "20px"
    };

    const imgstyle = {
        marginLeft: "50px",
        width: "250px"
    };
    const jsimgstyle = {
        marginLeft: "50px",
        width: "250px",
        height: "225px"
    };

    const frontEndData = Data({ name: 'FrontEnd' });
    const {title,imgs} = frontEndData;

    return (
        <>
            <div className="Card" style={divstyle}>
                <h1 style={h1style}>{title}</h1>
                <div className="Imagediv" >
                    <img style={imgstyle} src={imgs.htmlImg} alt="img" />
                    <img style={imgstyle} src={imgs.cssImg} alt="img" />
                    <img style={jsimgstyle} src={imgs.jsImg} alt="img" />
                    <img style={imgstyle} src={imgs.reactImg} alt="img" />
                </div>
            </div>
        </>
    );
}

export default FrontEndTechCard;
