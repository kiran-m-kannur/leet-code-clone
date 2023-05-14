import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

import "./AllProblems.css"
import { backendUrl } from "../../constants.js";

const AllProblemsPage = () => {
  const [problems, setProblems] = useState([]);

  const init = async () => {
    const response = await fetch(`${backendUrl}/problems`, {
      method: "GET",
    });

    const json = await response.json();
    setProblems(json.problems);
  }

  useEffect(() => {
    init()
  }, []);

  return (
    <div id="allproblems">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Difficulty Level</th>
            <th>Acceptance Rate</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((prob, index) => (
            <tr key={prob.problemId}>
              <td>
                <Link to={`/problems/${prob.problemId}`}>{prob.title}</Link>
              </td>
              <td className={`difficulty ${prob.difficulty}`}>{prob.difficulty}</td>
              <td className={`acceptance ${prob.difficulty}`}>{prob.acceptance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllProblemsPage