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
        }
    }
    return(Data[dataNeed]);
}

export default Data;