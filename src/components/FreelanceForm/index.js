import { useParams } from "react-router-dom"

export default function Freelance(){
  const {questionNumber} = {useParams}

  return (
    <div>
      <h1>Questionnaire Freelance</h1>
      <h2>question{ questionNumber }</h2>
    </div>
  )
}