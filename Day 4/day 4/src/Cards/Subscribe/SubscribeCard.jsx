import React from "react";
import UserForm from "./UserForm.jsx";

const SubscribeCard = () =>{
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
        fontWeight: "250",
        fontSize: "40px"
    };
    const pstyle = {
        color: "white",
        marginBottom: "20px",
        marginTop: "50px",
        fontWeight: "200",
        fontSize: "20px"
    };

    const subscribeData = Data({name: 'Subscribe'});
    const {title,p} = subscribeData;
    
    return(
        <>
            <div style={divstyle}>
                <h1 style={h1style}>{title}</h1>
                <p style={pstyle}>{p}</p>
                <UserForm></UserForm>
            </div>
        </>
    );
}

export default SubscribeCard;