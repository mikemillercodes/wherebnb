import { csrfFetch } from "./csrf"
import { useParams } from "react-router-dom"



// * Actions (types) *
const GET_REVIEWS = '/reviews/getAllreviews'
const GET_SINGLE_REVIEW = '/reviews/singleREVIEW'
const CREATE_REVIEW = '/reviews/createNew'
const DELETE_REVIEW = '/reviews/delete'

// * Actions (creators) *
export const getReviews = (data) => {
    return {
        type: GET_REVIEWS,
        reviews: data
    }
}

export const getSingleReview = (review) => {
    return {
        type: GET_SINGLE_REVIEW,
        review
    }
}

export const createReview = (review, spotId) => {
    return {
        type: CREATE_REVIEW,
        review,
        spotId
    }
}

export const deleteReview = (reviewId) => {
    return {
        type: DELETE_REVIEW,
        reviewId
    }
}

// THUNKS
export const getSpotReviewsThunk = (spotId) => async dispatch => {
    const response = await csrfFetch(`/api/spots/${spotId}/reviews`)
    if (response.ok) {
        const spotReviews = await response.json()
        dispatch(getReviews(spotReviews))
        return spotReviews
    }
}

export const getOneReviewThunk = (reviewId) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`)
    if (response.ok) {
        const review = await response.json()
        dispatch(getSingleReview(review))
        return review
    }
}


export const createReviewThunk = (payload, spotId) => async dispatch => {

    const response = await csrfFetch(`/api/spots/${spotId}/reviews`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    if (response.ok) {
        const review = await response.json()
        dispatch(createReview(review))
        return review
    } else { 
        const { message } = await response.json()
        return message
    }

}

export const deleteReviewThunk = (reviewId, payload) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })

    if (response.ok) {
        dispatch(deleteReview(reviewId))
        return true
    } else return false;
}

/* ------ SELECTORS ------ */
export const getAllreviews = (state) => {
    return Object.values(state.reviews)
}

export const getOneReview = (reviewId) => (state) => state.reviews[reviewId]
const initialState = {}

// All reviews Reducer
const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_REVIEWS:
            const reviews = {}
            for (let i = 0; i < action.reviews.Reviews.length; i++) {
                let review = action.reviews.Reviews[i]
                reviews[review.id] = review
            }
            return { ...state, ...reviews }

        case CREATE_REVIEW:
            return {
                ...state,
                [action.review.id]: { ...action.review }
            }

        case DELETE_REVIEW:
            const stateCopy = { ...state }
            delete stateCopy[action.reviewId]
            return stateCopy
        default: return state
    }
}


// Single Review Reducer

// export const singleSpotReducer = (state = {}, action) => {
//     switch(action.type) {
//         case GET_SINGLE_SPOT: {
//             const newState = {...state};
//             newState[action.spot.id] = action.spot
//         return newState
//         }
//         default: {
//             return state
//         }
//     }
// }

export default reviewReducer;