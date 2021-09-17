import React from 'react'
import styles from './SideNews.module.css';

export default function SideNews(props) {
    return (
        <div className = {styles.container}>
            <section className = {styles.number}> {props.number} </section> 
            <section className = {styles.body}> 
                <span className = {styles.topic}> {props.topic} | </span>
                <section className = {styles.text}> {props.body} </section>
            </section>
        </div>
    )
}
