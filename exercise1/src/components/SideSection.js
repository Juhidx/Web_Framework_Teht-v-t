import React from 'react';
import styles from './SideSelection.module.css';
import SideNews from './SideNews';

export default function SideSection(props) {
    return (
        <div className = {styles.container}>
            <section className = {styles.topic}> {props.topic} </section>
            <section style = {{marginLeft: 10}}> __________________________________________ </section>
            <section>
            {
                props.newsData.map(news => <SideNews number = {news.number} topic = {news.topic} body = {news.body} />)
            }
            </section>
        </div>
    )
}
