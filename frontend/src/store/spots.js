import { csrfFetch } from "./csrf"

// * Actions (types) *
const GET_SPOTS = '/spots/getAllSpots'
const CREATE_SPOT = '/spots/createNew'
const CREATE_SPOT_IMAGE = '/spots/createImage'
const UPDATE_SPOT = '/spots/update'
const DELETE_SPOT = '/spots/delete'

// * Actions (creators) *
export const getSpots = (data) => {
    debugger
    return {
        type: GET_SPOTS,
        spots: data
    }
}

export const createSpot = (spot) => {
    return {
        type: CREATE_SPOT,
        spot
    } 
}

export const createSpotImg = (image, spot) => {
    return {
        type: CREATE_SPOT_IMAGE,
        image,
        spot
    }
}

export const updateSpot = (spot, previewImage) => {
    return {
        type: UPDATE_SPOT,
        spot,
        previewImage
    }
}

export const deleteSpot = (spotId) => {
    return {
        type: DELETE_SPOT,
        spotId
    }
}

// THUNKS
export const getSpotsThunk = () => async dispatch => {
    const response = await csrfFetch('/api/spots')
    if (response.ok) {
        const allSpots = await response.json()
        debugger
        dispatch(getSpots(allSpots))
        return allSpots
    }
}

export const getOneSpotThunk = (spotId) => async dispatch => {
    const response = await csrfFetch(`/api/spots/${spotId}`)
    if (response.ok) {
        const spot = await response.json()
        // dispatch(getSpots(spot))
        return spot
    }
}


export const createSpotThunk = (payload) => async dispatch => {
    const response = await csrfFetch('/api/spots', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })

    if (response.ok) {
        debugger
        const spot = await response.json()
        dispatch(createSpot(spot))
        return spot
    }
}
export const editSpotThunk = (spot, payload) => async dispatch => {
    const response = await csrfFetch(`/api/spots/${spot.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })

    if (response.ok) {
        const editedSpot = await response.json()
        dispatch(updateSpot(editedSpot, spot.previewImage))
        return editedSpot
    }
}

export const deleteSpotThunk = (spotId, payload) => async dispatch => {
    const response = await csrfFetch(`/api/spots/${spotId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        // body: JSON.stringify(payload)
    })

    if (response.ok) {
        dispatch(deleteSpot(spotId))
        return true
    } else return false;
}




export const createSpotImgThunk = (spot, payload) => async dispatch => {
    const response = await csrfFetch(`/api/spots/${spot.id}/images`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })

    if (response.ok) {
        const spotImage = await response.json()
        dispatch(createSpotImg(spotImage, spot))
        return spotImage
    }
}

/* ------ SELECTORS ------ */
export const getAllSpots = (state) => {
    debugger
    return Object.values(state.spots)
}

export const getOneSpot = (spotId) => (state) => state.spots[spotId]
const initialState = {}

// Spot Reducer
const spotReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case GET_SPOTS:
            debugger
            const allSpots = {}
            for (let i = 0; i < action.spots.Spots.length; i++) {
                let spot = action.spots.Spots[i]
                allSpots[spot.id] = spot
            }
            return { ...state, ...allSpots }

        case CREATE_SPOT_IMAGE:
            return { ...state, [action.spot.id]: { ...action.spot, previewImage: action.image.url } }
        
        case CREATE_SPOT:
            debugger
            return { 
                ...state, 
                [action.spot.id]: { ...action.spot }
            }

        case UPDATE_SPOT:
            return {
                ...state,
                [action.spot.id]: { ...action.spot, previewImage: action.previewImage}
            }
        case DELETE_SPOT:
            const stateCopy = { ...state }
            delete stateCopy[action.spotId]
            return stateCopy
            default: return state
    }
}

export default spotReducer;