import React from 'react'
import styles from './index.module.css'

export default function Loader() {

    return (
        <div className={styles.loader_container}>
            <div className={styles.loader_message}>
            </div>
        </div>
    );
}