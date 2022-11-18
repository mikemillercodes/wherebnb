import { csrfFetch } from "./csrf"

// * Actions (types) *
const GET_REVIEWS = '/reviews/getAllreviews'
const GET_SINGLE_REVIEW = '/reviews/singleREVIEW'
const CREATE_REVIEW = '/reviews/createNew'
const DELETE_REVIEW = '/reviews/delete'

// * Actions (creators) *
export const getreviews = (data) => {
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

export const createReview = (review) => {
    return {
        type: CREATE_REVIEW,
        review
    }
}

export const deleteReview = (reviewId) => {
    return {
        type: DELETE_REVIEW,
        reviewId
    }
}

// THUNKS
export const getreviewsThunk = () => async dispatch => {
    const response = await csrfFetch('/api/reviews')
    if (response.ok) {
        const allreviews = await response.json()
        dispatch(getreviews(allreviews))
        return allreviews
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


export const createReviewThunk = (payload) => async dispatch => {
    const response = await csrfFetch('/api/reviews', {
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
            const allreviews = {}
            for (let i = 0; i < action.reviews.reviews.length; i++) {
                let review = action.reviews.reviews[i]
                allreviews[review.id] = review
            }
            return { ...state, ...allreviews }

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