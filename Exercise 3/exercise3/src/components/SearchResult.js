import React from 'react';
import styles from './SearchResult.module.css';

export default function SearchResult(props) {
return(
<div className={styles.Products}>
    <div><img src={`/images/${props.image}`}/></div>
    <div>{props.name}</div>
    <div>{props.brand}</div>
    <div>{props.rating}</div>
    <div>${props.price}</div>
    <div>{props.description}</div>
</div> 
)}
