import HeaderAdmin from "../../components/admin/HeaderAdmin"
import { useVerifyIfUserIsLogged } from "../utils/security-utils"

const DashboardPage = () => {
  useVerifyIfUserIsLogged()

  return (
    <>
      <HeaderAdmin />
      <p>ADMIN !!</p>
    </>
  )
}

export default DashboardPage
