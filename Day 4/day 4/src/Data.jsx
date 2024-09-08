import cssImg from './assets/css.svg';
import htmlImg from './assets/html.svg';
import reactImg from './assets/react.svg';
import jsImg from './assets/js.svg';

const Data =(props)=> {    
    const dataNeed = props.name;
    const Data = {
        FrontEnd :{
            imgs: {htmlImg, cssImg, jsImg, reactImg},
            title: "Front End Technologies"
        },

        Subscribe :{
            title: "Subscribe",
            p: "Sign up with your email to recieve news and updates"
        },

        User : {
            img: "https://placehold.co/400x400",
            name: "WANJIN MAGLANGIT",
            title: "Junior Developer, Philippines",
            skills: ["HTML","CSS","JS","React","Node","Python","NumPy","MYSQL","Git"],
            date: "Joined Sept 7, 2024"
        },

        color: {
            colors: [
                "#518cef",
                "#3b10c4",
                "#9aede6",
                "#8ee763",
                "#a30dd0"
            ]
        }
    }
    return(Data[dataNeed]);
}

export default Data;