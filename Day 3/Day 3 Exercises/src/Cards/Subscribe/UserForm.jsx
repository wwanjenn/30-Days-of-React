import React from "react";

const UserForm = () => {
    const divstyle1 = {
        marginTop: "75px",
        textAlign: "center"
        
    };

    const divstyle2 = {
        textAlign: "center",
    };

    const txtstyle = {
        width: "300px",
        height: "50px",
        marginLeft: "5px",
        marginRight: "5px",
        border: "0px",
        borderRadius: "5px",
        textIndent: "10px"
    };
    const butstyle = {
        width: "200px",
        height: "50px",
        marginTop: "20px",
        border: "0px",
        borderRadius: "5px",
    };

    return(
        <>
            <form>
                <div style={divstyle1}>
                    <div style={divstyle2}>
                        <input type="text" style = {txtstyle} placeholder = "First Name" name="firstname" />
                        <input type="text" style = {txtstyle} placeholder = "Last Name" name="lastname"/>
                        <input type="text" style = {txtstyle} placeholder = "Email" name="email"/>
                    </div>
                        <button type="submit" style={butstyle}>Submit</button>
                </div>

            </form>
        </>
    );
};

export default UserForm;