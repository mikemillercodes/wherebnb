import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getOneSpotThunk } from '../../store/spots';
import { deleteSpotThunk } from '../../store/spots';
import SpotReviews from '../Reviews';
// CSS (to-do)
import './OneSpotDesign.css'

const OneSpot = () => {
    const { spotId } = useParams()
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const oneSpot = useSelector(state => state.singleSpot[spotId])

    const history = useHistory()

    useEffect(() => {
        dispatch(getOneSpotThunk(spotId))
    }, [dispatch, spotId])

    if (!oneSpot) return null;

    const nonPreviewImage = oneSpot.SpotImages.filter(image => image.preview === false);
    const nonPreviewImages2 = nonPreviewImage.slice(0, 4);

    const previewImage = oneSpot.SpotImages.find(image => image.preview === true);

    return (
        <div className='outer-div'>
            <div className='spot-details'>
                <div className='spot-headline'>{oneSpot.name}</div>
                <div className='review-data'>
                    <i class='fa-sharp fa-solid fa-star'></i>{`${Math.round(oneSpot.avgStarRating)} `}
                    ∙
                    {` ${oneSpot.numReviews} reviews`}
                    ∙
                    {` ${oneSpot.city}, ${oneSpot.state}, ${oneSpot.country}`}

                </div>
                <div className='spot-images'>
                    <div className='big-image'>
                        <img className='spot-image1' src={previewImage.url} alt={oneSpot.name} />
                    </div>
                    {nonPreviewImages2.map(image =>
                        <div className='small-images'>
                            <img className='spot-image2' src={image.url} alt={oneSpot.name} />
                        </div>
                    )}
                </div>
                <div className='edit-delete-buttons'>
                {user && user.id === oneSpot.ownerId && <button id='edit-spot' onClick={() => {
                    history.push(`/spots/${spotId}/edit`)
                }}>Edit your spot</button>}

                {user && user.id === oneSpot.ownerId && <button id='delete-spot' onClick={() => {
                    const deleteDispatch = dispatch(deleteSpotThunk(spotId))
                    if (deleteDispatch) history.push(`/`);
                }}>Delete your spot</button>}
                </div>
                <div className='entire-house'>
                    {`Entire house hosted by ${oneSpot.Owner.firstName}`}
                </div>
                <div className='details'>
                    10 guests ∙ 5 bedrooms ∙ 5 beds ∙ 3 baths
                </div>
                <div className='price'>
                    {`$${oneSpot.price}`} <span style={{ opacity: 0.7 }}> night</span>
                </div>
                <div className='single-spot-reviews'>
                    <div className='review-data2'>
                        <i class='fa-sharp fa-solid fa-star'></i>{`${Math.round(oneSpot.avgStarRating)} `}
                        ∙
                        {` ${oneSpot.numReviews} reviews`}
                        {user && user.id !== oneSpot.ownerId && <button id='review-your-stay' onClick={() => {
                            history.push(`/spots/${spotId}/reviewyourstay`)
                        }}>Review your stay</button>}
                    </div>
                    <SpotReviews spot={oneSpot} />
                </div>

            </div>

        </div>
    )
}

export default OneSpot;


