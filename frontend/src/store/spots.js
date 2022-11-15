import { csrfFetch } from "./csrf"

// * Actions (types) *
const GET_SPOTS = '/spots/getAllSpots'
const CREATE_SPOT = '/spots/createNew'
const CREATE_SPOT_IMAGE = '/spots/createImage'
const UPDATE_SPOT = '/spots/update'
const DELETE_SPOT = '/spots/delete'

// * Actions (creators) *
export const getSpots = (data) => {
    return {
        type: GET_SPOTS,
        spots: data
    }
}

export const createSpot = (data) => {
    return {
        type: CREATE_SPOT,
        data
    } 
}

export const createSpotImg = (image, spot) => {
    return {
        type: CREATE_SPOT_IMAGE,
        image,
        spot
    }
}

export const updateSpot = (spot) => {
    return {
        type: UPDATE_SPOT,
        spot
    }
}

export const deleteSpot = (spot) => {
    return {
        type: DELETE_SPOT,
        spot
    }
}

// THUNKS

export const getSpotsThunk = () => async dispatch => {
    const response = await csrfFetch('api/spots')

    if (response.ok) {
        const allSpots = await response.json()
        dispatch(getSpots(allSpots))
        return allSpots
    }
}

export const createSpotThunk = (payload) => async dispatch => {
    const response = await csrfFetch('api/spots', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })

    if (response.ok) {
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
export const getSpotById = (id) => (state) => state.spots[id]
export const getAllSpots = (state) => Object.values(state.spots)
const initialState = {}

// Spot Reducer
const spotReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SPOTS:
            const allSpots = {}

            for (let i = 0; i < action.spots.Spots.length; i++) {
                let spot = action.spots.Spots[i]
                allSpots[spot.id] = spot
            }
            return { ...state, ...allSpots }

        case CREATE_SPOT_IMAGE:
            return { ...state, [action.spot.id]: { ...action.spot, previewImage: action.image.url } }
        
        case CREATE_SPOT:
            return { 
                ...state, 
                [action.spot.id]: { ...action.spot }
            }

        case UPDATE_SPOT:
            return {
                ...state,
                [action.spot.id]: { ...action.spot, previewImage: action.image}
            }
        case DELETE_SPOT:
            const stateCopy = { ...state }
            delete stateCopy[action.spotId]
            return stateCopy
            default: return state
    }
}

export default spotReducer;