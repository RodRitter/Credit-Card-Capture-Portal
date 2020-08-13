import actionTypes from '../actionTypes'

let defaultState = {
    countries: []
}

export default function bannedReducer(state = defaultState, action) {
    switch (action.type) {
      case actionTypes.ADD_BANNED:
        let exists = false
        state.countries.forEach(country => {
          if(country.alpha2Code === action.data.alpha2Code) {
            exists = true
          }
        })

        if(!exists) {
          state.countries.push(action.data)
        }
        return state 
      case actionTypes.REMOVE_BANNED:
        let newBanned = [...state.countries]

        newBanned.forEach((country, index) => {
          if(country.alpha2Code === action.data.alpha2Code) {
            newBanned.splice(index, 1)
          }
        })
        return {
          countries: newBanned
        }
      default:
        return state
    }
}