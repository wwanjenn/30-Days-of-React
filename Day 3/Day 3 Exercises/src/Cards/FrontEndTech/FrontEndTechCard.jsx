import React from "react";
import cssImg from '../../assets/css.svg';
import htmlImg from '../../assets/html.svg';
import reactImg from '../../assets/react.svg';
import jsImg from '../../assets/js.svg';
const FrontEndTechCard = () => {
    const divstyle = {
        background: "black",
        margin: "auto",
        marginTop: "30px",
        marginBottom: "30px",
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

    return (
        <>
            <div className="Card" style={divstyle}>
                <h1 style={h1style}>Front End Technologies</h1>
                <div className="Imagediv" >
                    <img style={imgstyle} src={htmlImg} alt="img" />
                    <img style={imgstyle} src={cssImg} alt="img" />
                    <img style={jsimgstyle} src={jsImg} alt="img" />
                    <img style={imgstyle} src={reactImg} alt="img" />
                </div>
            </div>
        </>
    );
}

export default FrontEndTechCard;
