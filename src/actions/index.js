import { SET_USER, SET_USERS, SET_WEIGHTS, SET_EXERCISES, LOGOUT } from './types';
import { login, fetchUser, fetchUsers, fetchUserData, fetchExercises, fetchUserWeights } from '../api/index.js'


export function loginUser(user_params, history) {
  return function (dispatch){
  return login(user_params)
    .then(data => {
      if (data.error){
        return 'bad'
      } else {
        localStorage.setItem("token", data["jwt"]);
        dispatch(fetchingAllUserData(data.user.id))
        dispatch(fetchingWeights(data.user.id))
        return 'success'
      }
    })
  }
}

export function fetchingUser(){
  return function(dispatch){
    fetchUser()
    .then(data => {
      if (data.error){
        console.log('error - ', data.error);
        return 'bad'
      } else {
        dispatch(fetchingWeights(data))
        // console.log('data in fetching user',data)
        dispatch(fetchingAllUserData(data))
        dispatch(fetchingExercises())
      }
    })
  }
}

export function fetchingAllUserData(user_id){
  console.log('Im in fetching all user data')
  return function(dispatch){
    fetchUserData(user_id)
    .then(data => {
      if (data.error){
        return 'bad'
      } else {

        dispatch({ type: SET_USER, payload: data })
      }
    })
  }
}

export function fetchingWeights(user_id){
  return function(dispatch){
    fetchUserWeights(user_id)
    .then(data => {
      if (data.error){
        console.log('error');
        return null
      } else {
        let newArray = Array.from(data)
        function compare(a,b) {
          // console.log('a and b - ',a,b)
              if (a.date < b.date)
              // console.log('a date and b date ',a.date,b.date)
                return -1;
              if (a.date > b.date)
                return 1;
              return 0;
            }

            let newestArray = Array.from(data).sort((a,b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0));

            let newData = newArray.sort(compare);
            console.log('my new data', typeof Array.from(data))
        dispatch({ type: SET_WEIGHTS, payload: data })
      }
    })
  }
}

export function fetchingUsers(){
  return function (dispatch){
    fetchUsers()
    .then(data => {
      if (data.error){
        console.log('error')
        return null
      }
      else {
        // console.log('data - fetching users', data)
        dispatch({ type: SET_USERS, payload: data})
      }
    })
  }
}

export function fetchingExercises(){
  return function (dispatch){
    fetchExercises()
    .then(data => {
      if (data.error){
        console.log('error')
        return null
      }
      else {
        // console.log('data - fetching users', data)
        dispatch({ type: SET_EXERCISES, payload: data})
      }
    })
  }
}




export function logout(){
  localStorage.clear()
  return {
    type: LOGOUT
  }
}
