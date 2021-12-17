import React from 'react';
import Card from './Card';
import Link from 'next/link';
import styles from './index.module.css';
import data from './API/data.json';

export default class Index extends React.Component {
    static async getInitialProps () {
        return { cards: data }
    }

    render () {
        return (
            <div className={styles.app}>
                <header className={styles.header} style={{ cursor: "pointer" }}>
                    <Link href="/jumppage2">
                        <img src="/logo_new.png" className={styles.logo} alt="logo_new crypto pico image"
                        />
                    </Link>
                </header>
                <div className={styles.grid}>
                   {
                       this.props.cards.map((card) => (
                           <Card key={card.id} />
                       ))
                   }
                </div>
            </div>
        )
    }
};
