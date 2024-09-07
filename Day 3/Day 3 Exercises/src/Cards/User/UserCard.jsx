import React from "react";

const UserCard = () =>{
    const divstyle = {
        background: "black",
        margin: "auto",
        marginTop: "30px",
        width: "95%",
        height: "50vh",
        border: "10px solid black",
        borderRadius: "10px",
        textAlign: "left"
        
    };
    return(
        <>
            <div style={divstyle}>
                <img style={imgstyle} src="https://placehold.co/400x400" alt="" />
                <h3>WANJIN MAGLANGIT</h3>
                <p>Junior Developer, Philippines</p>
                <h3>SKILLS</h3>
                <p>Joined Sept 7, 2024</p>
            </div>
        </>
    );
}

export default UserCard;