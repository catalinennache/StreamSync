import { useState } from 'react';
import styles from './detailsPanel.module.css';
import UiServiceManager from '../services/UiServiceManager';

export default function DetailsMenu(props){
    console.warn(props)
    const [hidden, setHidden] = useState(true)
    var hdn = props.hidden;
    
    console.log(props.hidden, hidden)
    UiServiceManager.registerComponent("detailspanel", {show:(model)=>{
        hdn = false;
        setHidden(false);
    }, hide:()=>{ setHidden(true); }})
    return <>
           <div className={`${styles.detailsPanel} ${hdn || hidden?styles.hidden:""}`}>

           </div>
     </>
}
