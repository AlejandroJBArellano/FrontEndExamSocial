export default interface Exam {
    title: string;
    questions: {
        question: string;
        answers: {
            answer: string;
            correct: boolean;
        }[]
    }[];
}