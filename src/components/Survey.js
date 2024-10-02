import { Outlet, Link } from "react-router-dom"

export default function Survey() {
  return (
      <div>
          <h1>Questionnaire 🧮</h1>
          <Link to="/client/1">Questionnaire client</Link>
          <Link to="/freelance" style={{ margin: '0 10px'}}>Questionnaire Freelance</Link>
          <Outlet />
      </div>
  )
}

