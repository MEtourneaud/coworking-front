import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

// je créé une fonction réutilisable,
// qui au chargement du composant,
// récupère le token en local storage
// s'il n'existe, ça redirige vers la page de login

// vu que ma fonction utilise des "hook" de react
//(des fonctions que react me fournies qui marchent
//que dans des composants, comme useState, useEffect, useNavigate
// qui commencent par "use")
// mon nom de fonction doit aussi commencer par use
// => ma fonction est devenue un hook

export const useVerifyIfUserIsLogged = () => {
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
}
