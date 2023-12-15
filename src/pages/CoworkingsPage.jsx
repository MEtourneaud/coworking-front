import { useEffect, useState } from "react"
import Header from "../components/Header"

const CoworkingsPage = () => {
  const [coworkings, setCoworkings] = useState(null)

  useEffect(() => {
    ;(async () => {
      const coworkingsResponse = await fetch(`http://localhost:3000/api/coworkings`)
      const coworkingsInJs = await coworkingsResponse.json()
      setCoworkings(coworkingsInJs)
    })()
  }, [])

  return (
    <>
      <Header />
      <h2>Liste des coworkings</h2>
      {coworkings ? (
        <>
          {coworkings.map((coworking) => {
            return (
              <article>
                <h3>{coworking.name}</h3>
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

export default CoworkingsPage
