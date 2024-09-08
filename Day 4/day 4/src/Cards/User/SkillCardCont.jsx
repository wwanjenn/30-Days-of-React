import SkillCard from "./SkillCard";
import React from "react";
import Data from "../../Data";

const SkillCardCont = () => {
    const divstyle = {
        display: "block",
        margin: "15px 0 25px 0"
    };

    
    const UserData = Data({ name: 'User' });
    const {skills} = UserData;

    return(<>
    <div style={divstyle}>
    {skills.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
            ))}
        
    </div>
    </>);
}
export default SkillCardCont;