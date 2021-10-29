



export default function App(){

let questions = [
	{
	ques:"HTML stands for?",
	ansOP:[
		{ans:"Hyper Text Markup Language", isCorrect: false},
		{ans:"", isCorrect: false},	
		{ans:"", isCorrect: false},
		{ans:"", isCorrect: false},
		
	],
	},
	{
	ques:"XML stands for?",
	ansOP:[
		{ans:"Extensible Markup Language", isCorrect: false},
		{ans:"", isCorrect: false},	
import "./styles.css";




export default function App(){

  let questions = [
    {
    ques:"HTML stands for?",
    ansOP:[
      {ans:"Hyper Text Markup Language", isCorrect: false},
      {ans:"", isCorrect: false},	
      {ans:"", isCorrect: false},
      {ans:"", isCorrect: false},
      
    ],
    },
    {
    ques:"XML stands for?",
    ansOP:[
      {ans:"Extensible Markup Language", isCorrect: false},
      {ans:"", isCorrect: false},	
      {ans:"", isCorrect: false},
      {ans:"", isCorrect: false},
      
    ],
  
    },
    {
      ques:"HTTPS stands for?",
    ansOP:[
      {ans:"Hyper text transfer protocol secure", isCorrect: false},
      {ans:"", isCorrect: false},	
      {ans:"", isCorrect: false},
      {ans:"", isCorrect: false},
      
    ],
  
    },
    {
      ques:"FTP stands for?",
    ansOP:[
      {ans:"File Transfer Protocol", isCorrect: false},
      {ans:"", isCorrect: false},	
      {ans:"", isCorrect: false},
      {ans:"", isCorrect: false},
      
    ],
  
    },
    {
      ques:"STTP stands for?",
    ansOP:[
      {ans:"Secure Token Transfer Protocol", isCorrect: false},
      {ans:"", isCorrect: false},	
      {ans:"", isCorrect: false},
      {ans:"", isCorrect: false},
      
    ],
  
    }
  ];
  
  let [currentQues, setCurrentQues] = usestate(0);
  let[showScore, setShowScore] = useState(false);
  let handleAnswerBt = ()=> {{isCorrect}
    if(isCorrect===true){
    alert("Correct Answer");
    }
    else
    {setShoeScore(true)};
  };
  let [score, setScore]= useState(0);
  
  
  
  return(
  <div className="app">
  {false ?(<div className="score-section">You Scored ! out Of{question}</div>):(
  <>
  <div className="question-section">
  <div className="question-count">
  <span>Question 1</span>/{question.length}
  </div>
  <div className="question-text">{question[currentQues].ques}</div>
  <div className="answer-section">{question[0].ansOP.map{(ans)=>(
  <button onCLick={handleAnswerBt}>{ans.isCorrect}</button>)}}
  </div>

  </div>
  )
  
  </div>
  )
  }

</div>
)
}
