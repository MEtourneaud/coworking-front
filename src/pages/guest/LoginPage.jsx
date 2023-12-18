const LoginPage = () => {
  const handleLogin = async (event) => {
    event.preventDefault()

    const username = event.target.username.value
    const password = event.target.password.value

    console.log(username, password)

    //Je crée un objet avec le username et le password récupéré du formulaire
    const loginData = {
      username,
      password,
    }

    //Je convertis loginData en format JSON
    const loginDataJson = JSON.stringify(loginData)

    //J'effectue une requête FETCH de type POST
    const loginResponse = await fetch(`http://localhost:3000/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", //Je définis le type de contenu de la requête comme étant du JSON
      },
      body: loginDataJson,
    })

    //J'attend la réponse de la requête et la convertis en JSON
    const loginResponseData = await loginResponse.json()

    //Je récupère le token à partir de loginResponseData
    const token = loginResponseData.data

    //Si le token existe, je le stocke dans le local storage du navigateur
    if (token) {
      localStorage.setItem("jwt", token)
    }
  }

  return (
    <section>
      <form onSubmit={handleLogin}>
        <label>
          username
          <input type="text" name="username" />
        </label>
        <label>
          password
          <input type="password" name="password" />
        </label>
        <input type="submit" />
      </form>
    </section>
  )
}

export default LoginPage
