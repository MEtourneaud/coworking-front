import { useNavigate } from "react-router-dom"
import HeaderAdmin from "../../components/admin/HeaderAdmin"
import { useEffect } from "react"

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
  })

  return (
    <>
      <HeaderAdmin />
      <p>ADMIN !!</p>
    </>
  )
}

export default DashboardPage
