const BASE_URL = 'https://enigmatic-lake-82877.herokuapp.com'

export async function RegisterUser(username,password,name,location){
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }, body: JSON.stringify({
                username,
                password,
                name,
                location
        })
    }
    const response = await fetch(`${BASE_URL}/api/users/register`,options)
    const result = await response.json()
    console.log(response)
    console.log(result)
    if (result.error){
        alert ("Account is already registered. Please log in.")
    }
 return result.token

}

export async function loginUser(username, password) {
    try {
      const loginResult = await fetch(`${BASE_URL}/api/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
              username,
              password,
          }),
        }
      );
      const resp = await loginResult.json();
      console.log(resp, "this is response")
      return resp.token;
    } catch (error) {
      console.log(error);
    }
  }