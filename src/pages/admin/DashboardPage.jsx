import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import HeaderAdmin from "../../components/admin/HeaderAdmin"

const DashboardPage = () => {
  //Je récupère la fonction navigate du react-router qui permet de rediriger l'utilisateur
  const navigate = useNavigate()

  //Au chargement du composant
  useEffect(() => {
    //Je récupère le token depuis le local storage
    const token = localStorage.getItem("jwt")

    //Si le token n'existe pas, je redirige l'utilisateur vers la page de connexion
    if (!token) {
      navigate("/login")
    }

    // idéalement, si y'a un token existant,
    // on le décode (avec jwt-decode) et on regarde si les données sont correctes
    // si elles ne sont pas correctes (pas de clé data etc)
    // on redirige
  })

  return (
    <>
      <HeaderAdmin />
      <p>ADMIN !!</p>
    </>
  )
}

export default DashboardPage
