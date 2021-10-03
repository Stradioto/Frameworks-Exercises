import React from 'react'
import styles from './Header.module.css'

export default function Header() 
{
    return(
        <div className={styles.container}>
            <div className={styles.HeaderBackground}>
                <span className={styles.JournalHeaderTitle}>HELSINGIN SANOMAT</span>
                <span className={styles.HeaderTitles}>Etusivu</span>
                <span className={styles.HeaderTitles}>Uutiset</span>
                <span className={styles.HeaderTitles}>Lehdet</span>
                <span className={styles.HeaderTitles}>Asiakaspalvelu</span>
                <span className={styles.HeaderTitleB}></span>
                <span className={styles.HeaderTitleButton}>Tilaa</span>
                <span className={styles.HeaderTitleB}>Kirjaudu</span>
                <span className={styles.HeaderTitleMenu}>Valikko</span>
            </div>
        </div>
    )
}

