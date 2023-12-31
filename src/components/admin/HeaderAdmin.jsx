import { Link, useNavigate } from "react-router-dom"

const HeaderAdmin = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    //Je sors le token du local storage
    localStorage.removeItem("jwt")

    //Je redirige l'utilisateur vers la page de connexion
    navigate("/login")
  }

  return (
    <nav>
      <ul>
        <li>
          <Link to="/admin">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/coworkings">Gestion des coworkings</Link>
        </li>
        <li>
          <Link to="/admin/coworkings/create">Création d'un coworking</Link>
        </li>
      </ul>
      <button onClick={handleLogout}>Se déconnecter</button>
    </nav>
  )
}

export default HeaderAdmin
