import Head from "next/head";
import fs from "fs";

export async function getStaticProps() {
    const unit1 = fs.readFileSync('decks/unit1.json', 'utf8')
    return {
        props: {
            unit1: JSON.parse(unit1)
        }
    }
}

export default function Home({unit1}) {
    return <>
        <Head>
            <title>Home</title>
        </Head>
        <h1>Welcome to Flashcards</h1>
        <p>{JSON.stringify(unit1)}</p>
        <ul>
            {unit1.words.map((word) => <li>{JSON.stringify(word)}</li>)}
        </ul>
    </>
}