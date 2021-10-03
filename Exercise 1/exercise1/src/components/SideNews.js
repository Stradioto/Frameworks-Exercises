import React from 'react'
import styles from './SideNews.module.css'

export default function SideNews(props) 
{
    return(
        <div className={styles.container}>
                <div>
                    <h2>{props.sidetitle}</h2>
                    <hr></hr>
                </div>
                    
                <div className={styles.ColumnSide}>
                    <h1>{props.number}</h1>
                    <p>{props.sideTitle}<spam>{props.sideText}</spam></p>
                </div>
                
        </div>
    )
}