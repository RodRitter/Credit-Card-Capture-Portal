import actionTypes from '../actionTypes'

export function addBanned(data) {
    return {
        type: actionTypes.ADD_BANNED,
        data: data
    }
}

export function removeBanned(data) {
    return {
        type: actionTypes.REMOVE_BANNED,
        data: data
    }
}