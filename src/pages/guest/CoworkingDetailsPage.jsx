import { useEffect, useState } from "react"
import Header from "../../components/guest/Header"
import { useParams } from "react-router-dom"

const CoworkingDetailsPage = () => {
  const { coworkingId } = useParams()
  const [coworking, setCoworking] = useState(null)

  useEffect(() => {
    ;(async () => {
      const coworkingResponse = await fetch(`http://localhost:3000/api/coworkings/${coworkingId}`)
      const coworkingInJs = await coworkingResponse.json()
      setCoworking(coworkingInJs)
    })()
  }, [coworkingId])

  return (
    <>
      <Header />
      {coworking ? (
        <article>
          <h3>{coworking.data.name}</h3>
          <p>Prix : </p>
          <ul>
            <li>Heure : {coworking.data.price.hour}</li>
            <li>Jour : {coworking.data.price.day}</li>
            <li>Mois : {coworking.data.price.month}</li>
          </ul>
          <p>
            Adresse : {coworking.data.address.number} {coworking.data.address.street},{" "}
            {coworking.data.address.postCode} - {coworking.data.address.city}
          </p>
        </article>
      ) : (
        <p>Dommage</p>
      )}
    </>
  )
}

export default CoworkingDetailsPage
