export default interface Word {
    hebrew: string,
    phonetic: string,
    english: string,
    part_of_speech: 'noun' | 'verb',
    noun_properties?: NounProperties,
    verb_properties?: VerbProperties,
}

export interface NounProperties {
    gender: 'masculine' | 'feminine',
    always_plural: boolean,
    regular_plural: boolean,
    plural: string,
    plural_phonetic: string,
}

export interface VerbProperties {
    present_conjugations: presentConjugations,
}

export interface presentConjugations {
    regular: boolean,
    singular_masculine: string,
    singular_masculine_phonetic: string,
    singular_feminine: string,
    singular_feminine_phonetic: string,
    plural_masculine: string,
    plural_masculine_phonetic: string,
    plural_feminine: string,
    plural_feminine_phonetic: string,
}