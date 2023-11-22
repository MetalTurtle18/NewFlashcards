import styles from '../styles/Home.module.css';
import Word from "../models/word";

type Props = {
    word: Word
}

export default function Card({word}: Props) {
    return <div className={styles.card}>
        <table>
            <tbody>
            <tr>
                <td>Hebrew</td>
                <td>{word.hebrew}</td>
            </tr>
            <tr>
                <td>Transliteration</td>
                <td>{word.phonetic}</td>
            </tr>
            <tr>
                <td>English</td>
                <td>{word.english}</td>
            </tr>
            </tbody>
        </table>
    </div>
}