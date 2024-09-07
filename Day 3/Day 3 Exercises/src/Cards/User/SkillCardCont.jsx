import SkillCard from "./SkillCard";
import React from "react";

const SkillCardCont = () => {
    const skills = ["HTML","CSS","JS","React","Node","Python","NumPy","MYSQL","Git"]
    const divstyle = {
        display: "block",
        margin: "15px 0 25px 0"
    };
    return(<>
    <div style={divstyle}>
    {skills.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
            ))}
        
    </div>
    </>);
}
export default SkillCardCont;