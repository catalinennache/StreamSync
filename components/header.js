import styles from './header.module.css';

export default function Header(props){
    console.log(props);
    return <><div className={styles.header}>
        <h1 style={{fontSize:'17px', margin:'0', float:'left'}}>StreamSync</h1> 
        <div className={styles.userArea}>
             
            <div style={{cursor:'pointer', display:'inline-flex'}}>
              <span>{props.user.userName} </span>
              <span className={`${styles.chevron} ${styles.bottom}`} style={{padding: '4px'}} ></span>
            </div>
        </div>
    </div></>
}

