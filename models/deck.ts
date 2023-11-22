import Word from "./word";

export default interface Deck {
    set: string,
    name: string,
    words: Word[],
}