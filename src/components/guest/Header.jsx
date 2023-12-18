import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/coworkings">Liste des coworkings</Link>
        </li>
      </ul>
    </header>
  )
}
export default Header
