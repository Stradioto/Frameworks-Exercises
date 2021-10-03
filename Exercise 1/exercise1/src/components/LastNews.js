import React from 'react'
import styles from './LastNews.module.css'

export default function LastNews(props) 
{
    return(
        <div className={styles.container}>
            <div>
                {props.LastNewsTitle}{props.LastNewsText}
            </div>
        </div>
    )
}