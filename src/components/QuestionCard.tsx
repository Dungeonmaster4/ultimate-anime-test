import { AnswerObject } from "../App";
import { ButtomWrapper, Wrapper } from "./QuestionCard.styles";

type Props = {
    questionNum: number,
    totalQuestions: number,
    question: string,
    answers: string[],
    userAnswer: AnswerObject | undefined,
    callback: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>void
}

function QuestioCard({questionNum, totalQuestions, question, answers, userAnswer, callback}: Props) {
    return ( 
        <Wrapper>
            <p>Question: {questionNum} / {totalQuestions} </p>
            <h4 dangerouslySetInnerHTML={{ __html: question }} />
            <div>
                {answers.map(answer => (
                    <ButtomWrapper
                        correct={userAnswer?.correctAnswer == answer}
                        isClicked={userAnswer?.answer === answer}
                        key={answer}>
                        <button onClick={callback} disabled={userAnswer ? true : false} value={answer}>
                            <span dangerouslySetInnerHTML={{__html: answer}} />
                        </button>
                    </ButtomWrapper>
                ))}
            </div>
        </Wrapper>
     );
}

export default QuestioCard;