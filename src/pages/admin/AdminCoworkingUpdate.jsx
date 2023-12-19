import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const AdminCoworkingUpdate = () => {
  //J'extrais l'ID du coworking depuis l'URL
  const { coworkingId } = useParams()

  //useState permet de stocker dans une variable et donner par défaut la valeur "null"
  //qu'il l'utilisera au premier chargement
  //Aux chargements suivants, il prendra la valeur stocké dans le composant
  const [coworking, setCoworking] = useState(null)

  //useEffect permet d'executer du code uniquement à certains chargement du composant(le premier, à chaque fois, etc)
  //On place un tableau vide en deuxième paramètre pour exécuter la fonction une seule fois au premier chargement du composant
  useEffect(() => {
    //J'utilise une fonction anonyme qui s'auto-invoque pour effectuer des opérations asynchrone
    ;(async () => {
      //J'attend jusqu'à avoir récupéré les données du coworking spécifié par son ID
      const coworkingResponse = await fetch(`http://localhost:3000/api/coworkings/${coworkingId}`)
      //Je convertis les données JSON en JS
      const coworkingInJs = await coworkingResponse.json()
      setCoworking(coworkingInJs.data)
    })()
    // eslint-disable-next-line
  }, [])

  console.log(coworking)

  return (
    <>
      {coworking && (
        <form>
          <div>
            <label>
              Nom
              <input type="text" name="name" defaultValue={coworking.name} />
            </label>
          </div>
          <div>
            <label>
              Prix par heure
              <input type="number" name="priceByHour" defaultValue={coworking.price.hour} />
            </label>
          </div>
          <div>
            <label>
              Prix par jour
              <input type="number" name="priceByDay" defaultValue={coworking.price.day} />
            </label>
          </div>
          <div>
            <label>
              Prix par mois
              <input type="number" name="priceByMonth" defaultValue={coworking.price.month} />
            </label>
          </div>
          <div>
            <label>
              Adresse : Numéro
              <input type="text" name="addressNumber" defaultValue={coworking.address.number} />
            </label>
          </div>
          <div>
            <label>
              Adresse : Rue
              <input type="text" name="addressStreet" defaultValue={coworking.address.street} />
            </label>
          </div>
          <div>
            <label>
              Adresse : Code Postal
              <input
                type="number"
                name="addressPostCode"
                defaultValue={coworking.address.postCode}
              />
            </label>
          </div>
          <div>
            <label>
              Adresse : Ville
              <input type="text" name="addressCity" defaultValue={coworking.address.city} />
            </label>
          </div>
          <div>
            <label>
              Superficie
              <input type="number" name="superficy" defaultValue={coworking.superficy} />
            </label>
          </div>
          <div>
            <label>
              Capacité
              <input type="number" name="capacity" defaultValue={coworking.capacity} />
            </label>
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
      )}
    </>
  )
}

export default AdminCoworkingUpdate
