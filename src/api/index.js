const BASE_URL = 'https://enigmatic-lake-82877.herokuapp.com'

export async function RegisterUser(username,password,name,location){
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }, body: JSON.stringify({
            user: {
                username,
                password,
                name,
                location
            }
        })
    }
    const response = await fetch(`${BASE_URL}/api/users/register`)
    const result = await response.json()

    if (result.error){
        alert ("Account is already registered. Please log in.")
    }


}