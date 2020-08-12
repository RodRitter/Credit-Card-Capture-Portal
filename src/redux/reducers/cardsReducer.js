import actionTypes from '../actionTypes'

let defaultState = {
    cards: []
}

export default function cardsReducer(state = defaultState, action) {
    switch (action.type) {
      case actionTypes.ADD_CARD:
        let exists = false
        state.cards.forEach(card => {
          if(card.cardNumberClear === action.data.cardNumberClear) {
            exists = true
          }
        })

        if(!exists) {
          state.cards.push(action.data)
        }
        return state 
      case actionTypes.REMOVE_CARD:
        let newCards = [...state.cards]

        newCards.forEach((card, index) => {
          if(Number(card.cardNumberClear) === Number(action.data.cardNumberClear)) {
            newCards.splice(index, 1)
          }
        })
        return {
          cards: newCards
        }
      default:
        return state
    }
}