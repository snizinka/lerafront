import { UsersActionTypes } from "../../types/users";

export const userData = (login, password) => {
    return async (dispatch) => {
        try{
           dispatch({type: UsersActionTypes.FETCH_USERS})
           const data = await fetch('http://localhost:7000/users', {
               method: 'POST',
               headers: {
                   'content-type': 'application/json',
                   'Accept': 'application/json'
               },
               body: JSON.stringify({
                   login: login,
                   password: password
               })
           }).then(res => res.json());

           console.log(data)

          dispatch({type: UsersActionTypes.FETCH_USERS_SUCCESS, payload: data.data})
        }catch(err) {
  
        }
    }   
}
