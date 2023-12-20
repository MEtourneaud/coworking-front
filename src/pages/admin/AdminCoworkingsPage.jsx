import { useEffect, useState } from "react"
import HeaderAdmin from "../../components/admin/HeaderAdmin"
import { Link } from "react-router-dom"

const AdminCoworkingsPage = () => {
  const [coworkings, setCoworkings] = useState(null)

  useEffect(() => {
    ;(async () => {
      const coworkingsResponse = await fetch(`http://localhost:3000/api/coworkings`)
      const coworkingsInJs = await coworkingsResponse.json()
      setCoworkings(coworkingsInJs)
    })()
  }, [])

  const handleDeleteCoworking = async (event, coworkingId) => {
    //Je récupère le token depuis le localStorage
    const token = localStorage.getItem("jwt")

    //J'effectue une requête FETCH de type DELETE pour supprimer le coworking avec l'ID  spécifié
    await fetch(`http://localhost:3000/api/coworkings/${coworkingId}`, {
      method: "DELETE",
      //
      headers: { Authorization: "Bearer " + token },
    })

    //J'effectue une requête FETCH pour récupérer la liste mise à jour des coworkings
    const coworkingResponse = await fetch(`http://localhost:3000/api/coworkings`)

    //Je convertis la réponse JSON en JAVASCRIPT
    const coworkingsInJs = await coworkingResponse.json()
    setCoworkings(coworkingsInJs)
  }

  return (
    <>
      <HeaderAdmin />
      <h2>Liste des coworkings</h2>
      {coworkings ? (
        <>
          {coworkings.map((coworking) => {
            return (
              <article>
                <h3>{coworking.name}</h3>
                <button onClick={(event) => handleDeleteCoworking(event, coworking.id)}>
                  Supprimer
                </button>
                <Link to={`/admin/coworkings/update/${coworking.id}`}>
                  <button>Modifier</button>
                </Link>
              </article>
            )
          })}
        </>
      ) : (
        <p>Coworkings en préparation</p>
      )}
    </>
  )
}

export default AdminCoworkingsPage
