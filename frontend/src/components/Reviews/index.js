import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSpotReviewsThunk } from '../../store/reviews';
// import { deleteReviewThunk } from '../../store/reviews';
import { useParams } from 'react-router-dom';
// CSS (to-do)
import './ReviewsDesign.css'

const SpotReviews = () => {
    const { spotId } = useParams()
    const dispatch = useDispatch()

    const reviews = useSelector(state => Object.values(state.reviews))
    const user = useSelector(state => state.session.user)

    const reviewExists = reviews.find(review => review.userId === user?.id)


    let spotReviews = []
    for (let i = 0; i < reviews.length; i++) {
        let review = reviews[i]
        review.createdAt = new Date(review.createdAt).toLocaleDateString()
        if (review.spotId === +spotId) spotReviews.push(review)
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
                    <div className='review-owner'>Anonymous</div>
                    <div className='review-date'>{review.createdAt}</div>
                  <div className='review-text'> {review.review}</div>
                    </>
                ))}
            </div>
           <button>Delete Review</button>

           
        </div>
    )
}

export default SpotReviews;
