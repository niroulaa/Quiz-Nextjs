import Navbar from "./Components/Navbar";
import Question from "./Components/Question";
import Score from "./Components/Score";
import QuestionandOpt from "./Questions/QuestionandOpt";


export default function Home() {
 
  return <div className="h-[100vh] overflow-hidden">
    <Navbar />
    <Score />
    <Question />
    <QuestionandOpt />
  </div>;
}
