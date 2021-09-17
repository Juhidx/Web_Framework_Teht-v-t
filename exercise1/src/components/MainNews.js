import React from 'react'
import styles from './MainNews.module.css'

export default function MainNews(props) {
    return (
        <section className = {styles.container}>
            <img className = {styles.picture} src = {props.picture} alt = 'No'/>
            <section className = {styles.body}>
                <span className = {styles.header}> {props.header} </span>
                <span className = {styles.inlineBlock}> | </span>
                <section className = {styles.text}> {props.body} </section>
            </section>
            <div className = {styles.topic}>
                <div> {props.topic} </div>
                <div style = {{marginBottom: 10}}> {props.time} </div>
            </div>
        </section>
    )
}
