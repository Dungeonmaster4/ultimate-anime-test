export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export async function fetchQuizQuestions(
  amount: number,
  difficulty: Difficulty
) {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&category=31&type=multiple`;
  const data = await (await fetch(endpoint)).json();
  // console.log(data);
  return data.results.map((question: Question) => ({
    ...question,
    answers: [question.correct_answer, ...question.incorrect_answers].sort(
      () => Math.random() - 0.5
    ),
  }));
}
