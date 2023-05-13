import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const  [problems_1,setProblems] = useState([{
    title : "Two Sums",
    difficulty : "Easy",
    acceptance : "75%"
  },{
    title : "Three Sums",
    difficulty : "Hard",
    acceptance : "25%"
  },{
    title : "Soreted arrays ",
    difficulty : "Easy",
    acceptance : "65%"
  },{
    title : "Matrix Inversion ",
    difficulty : "Medium ",
    acceptance : "55%"
  },{
    title : "Island Problem ",
    difficulty : "Hard",
    acceptance : "5%"
  }])
  const  [problems_2,setProblems] = useState([{
    title : "Sort Linked List",
    difficulty : "Easy",
    acceptance : "85%"
  },{
    title : "Stock Market 1",
    difficulty : "Easy",
    acceptance : "75%"
  },{
    title : "Stock Market 2 ",
    difficulty : "Medium ",
    acceptance : "55%"
  },{
    title : "Stock Market 3 ",
    difficulty : "Hard ",
    acceptance : "15%"
  },{
    title : "Integer to Roman",
    difficulty : "East",
    acceptance : "85%"
  }
]);
  return (
    <>
      <div>
      <input type="text" placeholder='Email'></input>
      <input type="text" placeholder='Password'></input>
      <button>Sign in </button>
      <br/>
      <div>
          <button>1</button>
          <button>2</button>
      </div>
      <div >
        {problems_2.map(problem => <ProblemStatement
          title = {problem.title}
          acceptance = {problem.acceptance}
          difficulty = {problem.difficulty}
          />)}
      </div>
      </div>
    </>
  )
}

function ProblemStatement (props) {
  const title = props.title;
  const acceptance = props.acceptance;
  const difficulty = props.difficulty;

  return  <tr>
      <td>{title}</td>
      <td>{acceptance}</td>
      <td>{difficulty}</td>
  </tr>
}
 
export default App
