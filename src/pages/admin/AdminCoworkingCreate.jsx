import { useState } from "react"

const AdminCoworkingsCreate = () => {
  const [message, setMessage] = useState()

  const handleCreateCoworking = async (event) => {
    event.preventDefault()

    //Je récupère les valeurs du formulaire
    const name = event.target.name.value
    const priceByHour = event.target.priceByHour.value
    const priceByDay = event.target.priceByDay.value
    const priceByMonth = event.target.priceByMonth.value
    const addressNumber = event.target.addressNumber.value
    const addressStreet = event.target.addressStreet.value
    const addressPostCode = event.target.addressPostCode.value
    const addressCity = event.target.addressCity.value
    const superficy = event.target.superficy.value
    const capacity = event.target.capacity.value

    //Je crée un objet avec les valeurs du formulaire, en les faisant correspondre ave le modèle de l'API (noms et types)
    const coworkingToCreate = {
      name: name,
      price: {
        hour: priceByHour,
        day: priceByDay,
        month: priceByMonth,
      },
      adress: {
        number: addressNumber,
        street: addressStreet,
        postCode: addressPostCode,
        city: addressCity,
      },
      superficy: superficy,
      capacity: capacity,
    }

    //Je convertis coworkingToCreate en format JSON
    const coworkingToCreateJson = JSON.stringify(coworkingToCreate)

    //Je récupère mon token depuis le localStorage
    const token = localStorage.getItem("jwt")

    //J'effectue une requête FETCH de type POST pour créer un coworking
    const coworkingToCreateResponse = await fetch(`http://localhost:3000/api/coworkings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", //Je définis le type de contenu de la requête comme étant du JSON
        Authorization: "Bearer " + token, //J'inclus le token d'authentification
      },
      body: coworkingToCreateJson, //Je définis les données représentant le coworking à créer
    })

    //Je crée un message selon la situation, un succès (code 201) ou une erreur
    if (coworkingToCreateResponse) {
      setMessage("Coworking créé")
    } else {
      setMessage("Une erreur est survenue !")
    }
  }

  return (
    <>
      {message && <p>{message}</p>}
      <form onSubmit={handleCreateCoworking}>
        <div>
          <label>
            Nom
            <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label>
            Prix par heure
            <input type="number" name="priceByHour" />
          </label>
        </div>
        <div>
          <label>
            Prix par jour
            <input type="number" name="priceByDay" />
          </label>
        </div>
        <div>
          <label>
            Prix par mois
            <input type="number" name="priceByMonth" />
          </label>
        </div>
        <div>
          <label>
            Adresse : Numéro
            <input type="text" name="addressNumber" />
          </label>
        </div>
        <div>
          <label>
            Adresse : Rue
            <input type="text" name="addressStreet" />
          </label>
        </div>
        <div>
          <label>
            Adresse : Code Postal
            <input type="number" name="addressPostCode" />
          </label>
        </div>
        <div>
          <label>
            Adresse : Ville
            <input type="text" name="addressCity" />
          </label>
        </div>
        <div>
          <label>
            Superficie
            <input type="number" name="superficy" />
          </label>
        </div>
        <div>
          <label>
            Capacité
            <input type="number" name="capacity" />
          </label>
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </>
  )
}

export default AdminCoworkingsCreate
