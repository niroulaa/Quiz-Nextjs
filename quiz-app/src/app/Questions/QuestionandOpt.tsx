import React from "react";

const QuestionandOpt = () => {
  fetch(
    "https://opentdb.com/api.php?amount=34&category=9&difficulty=easy&type=multiple"
  ).then((response) => {
    response.json().then((data) => {
      console.log(data);
      
    });
  });
  return( 
  
  <div>
    
  </div>
  );
};

export default QuestionandOpt;
