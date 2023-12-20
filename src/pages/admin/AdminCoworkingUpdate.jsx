import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import HeaderAdmin from "../../components/admin/HeaderAdmin"

const AdminCoworkingUpdate = () => {
  const { coworkingId } = useParams()

  const [message, setMessage] = useState()

  const [coworking, setCoworking] = useState(null)

  useEffect(() => {
    ;(async () => {
      const coworkingResponse = await fetch(`http://localhost:3000/api/coworkings/${coworkingId}`)
      const coworkingInJs = await coworkingResponse.json()
      setCoworking(coworkingInJs.data)
    })()
    // eslint-disable-next-line
  }, [])

  console.log(coworking)

  const handleUpdateCoworking = async (event) => {
    event.preventDefault()

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

    const coworkingToUpdate = {
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

    const coworkingToUpdateJson = JSON.stringify(coworkingToUpdate)

    const token = localStorage.getItem("jwt")

    const coworkingToUpdateResponse = await fetch(
      `http://localhost:3000/api/coworkings/${coworkingId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: coworkingToUpdateJson,
      }
    )

    if (coworkingToUpdateResponse.status === 201) {
      setMessage("Mise à jour OK")
    } else {
      setMessage("Une erreur est survenue !")
    }
  }

  return (
    <>
      <HeaderAdmin />
      <h2>Modification du coworking</h2>
      <>{message && <p>{message}</p>}</>
      {coworking && (
        <form onSubmit={handleUpdateCoworking}>
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
