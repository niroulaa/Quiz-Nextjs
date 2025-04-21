import React, { useReducer, useEffect, useState } from "react";

const Playing = ({  setGameCondition, setGameScore }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const initialState = {
    time: 1,
    questionNumber: 0,
    effectQuest: "Question will appear here",
    effectOpt: [],
    score: 0,
    correctAns: "",
    allowedToNext: false,
  };

  const quizRed = (state: { time: number; questionNumber: number; score: number; }, action: { type: any; payload: { effectQuest: any; effectOpt: any; correctAns: any; }; }) => {
    switch (action.type) {
      case "Time":
        return { ...state, time: state.time + 1 };
      case "QuestionNumberSet":
        return { ...state, questionNumber: state.questionNumber + 1, allowedToNext: false };
      case "SetQuestion":
        return {
          ...state,
          effectQuest: action.payload.effectQuest,
          effectOpt: action.payload.effectOpt,
          correctAns: action.payload.correctAns,
        };
      case "SetScore":
        return { ...state, score: state.score + 1 };
      case "nextqn":
        return { ...state, allowedToNext: true };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(quizRed, initialState);

  useEffect(() => {
    setGameScore(state.score); 
  }, [state.score]);

  function shuffleArray(array: any[]) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=multiple")
      .then((res) => res.json())
      .then((data) => {
        const opt = [
          data.results[0].correct_answer,
          ...data.results[0].incorrect_answers,
        ];
        const shuffledOptions = shuffleArray(opt);
        const Quest = data.results[0].question;
        console.log(data.results[0].correct_answer)

        dispatch({
          type: "SetQuestion",
          payload: {
            effectOpt: shuffledOptions,
            effectQuest: Quest,
            correctAns: data.results[0].correct_answer,
          },
        });
      });
  }, [state.questionNumber]);

  const handleScore = (clicked: React.SetStateAction<null>) => {
    if (selectedOption !== null) return;
    setSelectedOption(clicked);
    dispatch({ type: "nextqn" });

    if (clicked === state.correctAns) {
      dispatch({ type: "SetScore" });
    }
  };

  const handleClick = () => {
    setSelectedOption(null);
    dispatch({ type: "QuestionNumberSet" });
  };

  useEffect(() => {
    const seconds = setInterval(() => {
      dispatch({ type: "Time" });
      if (state.time >= 20) {
        setGameCondition("over");
      }
    }, 1000);

    return () => clearInterval(seconds);
  }, [state.time]);

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-center p-8 bg-amber-50 w-[500px] rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold mb-4">General Quiz</h1>
        <p className="text-xl">{state.time}s</p>
        <div className="question mt-3">
          <p className="text-3xl" dangerouslySetInnerHTML={{ __html: state.effectQuest }} />
        </div>
        <div className="options flex flex-col gap-5 items-start p-7">
          {state.effectOpt.map((option: any, index: React.Key | null | undefined) => (
            <button
              key={index}
              className={`rounded-2xl w-full h-10 text-white text-2xl ${
                selectedOption
                  ? option === state.correctAns
                    ? "bg-green-500"
                    : option === selectedOption
                    ? "bg-red-500"
                    : "bg-gray-400"
                  : "bg-gray-400"
              } transition-colors duration-400 ease-in-out cursor-pointer`}
              onClick={() => handleScore(option)}
              disabled={selectedOption != null}
              dangerouslySetInnerHTML={{ __html: option }}
            />
          ))}
        </div>

        <div className="btn">
          <button
            className="bg-blue-600 w-26 h-10 rounded cursor-pointer"
            onClick={handleClick}
            disabled={!state.allowedToNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Playing;
