export type Quest = {
    id: number,
    title: string,
    variants: string[],
    correctVariant: number
};

export type FunProps = {
    onClickVar: (index: number) => void;
}

export type StepProps = {
    step: number;
}

export type ResultProps = {
    correctVar: number;
}