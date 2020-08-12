import actionTypes from '../actionTypes'

export function addCard(data) {
    return {
        type: actionTypes.ADD_CARD,
        data: data
    }
}

export function removeCard(data) {
    return {
        type: actionTypes.REMOVE_CARD,
        data: data
    }
}