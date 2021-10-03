import React from 'react'
import styles from './MainNews.module.css'

export default function MainNews(props) 
{
    return(
        <div className={styles.container}>
                <h1>{props.newsHeader}</h1>
                <img src={props.img}></img>
                <h2>{props.newsTitle}<span className={styles.NewsText}>{props.newsText}</span></h2>
                <p>{props.date}</p>          
        </div>
        
    )
}