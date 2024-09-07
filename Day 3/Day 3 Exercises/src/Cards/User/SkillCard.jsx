import React from "react";

const SkillCard = (props) => {
    const skill = props.skill;
    const skillstyle = {
        color: "black",
        background: "white",
        border: "0px",
        borderRadius: "5px",
        width: "max-content",
        float: "left",
        margin: "15px 0 0 15px",
        padding: "5px 10px 5px 10px"
    };
    return(<>
        <div style={skillstyle}>
            <p>{skill}</p>
        </div>
    </>);
};

export default SkillCard;