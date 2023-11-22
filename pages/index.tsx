import Head from "next/head";
import fs from "fs";
import styles from '../styles/Home.module.css';
import Card from "../components/Card";
import Deck from "../models/deck";
import Word from "../models/word";

export async function getStaticProps() {
    const unit1 = JSON.parse(fs.readFileSync('decks/unit1.json', 'utf8')) as Deck
    return {
        props: {
            unit1
        }
    }
}

export default function Home({unit1}) {
    return <>
        <Head>
            <title>Home</title>
        </Head>
        <h1>Welcome to Flashcards</h1>
        <div className={styles.grid}>
            {unit1.words.map((word: Word) => <Card key={word.hebrew} word={word}/>)}
        </div>
    </>
}