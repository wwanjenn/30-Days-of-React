import React from "react";
import SkillCardCont from "./SkillCardCont";
const UserCard = () =>{
    const divstyle = {
        background: "black",
        margin: "auto",
        marginTop: "30px",
        marginBottom: "30px",
        width: "95%",
        height: "65vh",
        border: "10px solid black",
        borderRadius: "10px",
        textAlign: "left"
        
    };

    const imgstyle = {
        height: "200px",
        borderRadius: "50%",
        marginTop: "20px",
        marginLeft: "20px"
    };

    const h3style = {
        color: "white",
        marginLeft: "20px",
        marginTop: "15px",
    };

    const pstyle = {
        color: "white",
        marginLeft: "20px",
        marginTop: "15px",
    }
    return(
        <>
            <div style={divstyle}>
                <img style={imgstyle} src="https://placehold.co/400x400" alt="" />
                <h3 style={h3style}>WANJIN MAGLANGIT</h3>
                <p style={pstyle}>Junior Developer, Philippines</p>
                <h3 style={h3style}>SKILLS</h3>
                <SkillCardCont></SkillCardCont><br/><br/>
                <p style={pstyle}>Joined Sept 7, 2024</p>
            </div>
        </>
    );
}

export default UserCard;