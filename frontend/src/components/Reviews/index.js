import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSpotReviewsThunk } from '../../store/reviews';
import { deleteReviewThunk } from '../../store/reviews';
import { useHistory, useParams } from 'react-router-dom';
import './ReviewsDesign.css'

const SpotReviews = () => {
    const { spotId } = useParams()
    const dispatch = useDispatch()
    const history = useHistory()

    const reviews = useSelector(state => Object.values(state.reviews))
    console.log('reviews: ', reviews)
    const user = useSelector(state => state.session.user)   

    let spotReviews = []
    for (let i = 0; i < reviews.length; i++) {
        let review = reviews[i]
        review.createdAt = new Date(review.createdAt).toLocaleDateString()
        if (review.spotId === +spotId) spotReviews.push(review)
    }

    console.log('spot reviews: ', spotReviews)

    const userReviewedSpot = () => {
        for (let i = 0; i < spotReviews.length; i++) {
            let spotReview = spotReviews[i]
            if (spotReview.userId === user.id) return spotReview.id
        }
        return false
    }

    useEffect(() => {
        dispatch(getSpotReviewsThunk(spotId))
    }, [dispatch, spotId])

    if (!reviews) return null;

    return (
        <div className='reviews-outer'>
            <div className='spot-reviews'>
                {spotReviews.map((review) => (
                    <>
                    <div className='review-owner'>{review.User.firstName}</div>
                    <div className='review-date'>{review.createdAt}</div>
                  <div className='review-text'> {review.review}</div>
                    </>
                ))}
            </div>
            {user && userReviewedSpot() && <button id='delete-review' onClick={() => {
                const deleteDispatch = dispatch(deleteReviewThunk(userReviewedSpot()))
                if (deleteDispatch) history.push(`/spots/${spotId}`);
            }}>Delete your review</button>}

           
        </div>
    )
}

export default SpotReviews;
