import actionTypes from '../actionTypes'

let defaultState = {
    countries: []
}

export default function bannedReducer(state = defaultState, action) {
    switch (action.type) {
      case actionTypes.ADD_BANNED:
        let exists = false
        state.countries.forEach(card => {
          if(card.cardNumberClear === action.data.cardNumberClear) {
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
          if(Number(country.alpha2) === Number(action.data.alpha2)) {
            newBanned.splice(index, 1)
          }
        })
        return {
          cards: newBanned
        }
      default:
        return state
    }
}