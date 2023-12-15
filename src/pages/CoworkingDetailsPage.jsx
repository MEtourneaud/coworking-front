import { useEffect, useState } from "react"
import Header from "../components/Header"
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
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Header />
      {coworking ? (
        <article>
          <h3>{coworking.name}</h3>
        </article>
      ) : (
        <p>Dommage</p>
      )}
    </>
  )
}

export default CoworkingDetailsPage
