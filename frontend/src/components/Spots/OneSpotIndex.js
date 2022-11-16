import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

// selectors
import { getAllSpots, getOneSpotThunk, getSpotById } from '../../store/spots';
// CSS (to-do)
import './OneSpotDesign.css'

const OneSpot = () => {
    const { spotId } = useParams()
    const dispatch = useDispatch()
    const oneSpot = useSelector(getSpotById(spotId))
    console.log('One Spot: ', oneSpot)

    useEffect(() => {
        dispatch(getOneSpotThunk(spotId))
    }, [dispatch])

    if (!oneSpot) return null;
    
    // add styling to image
    return (
        <div>
            <h1>{oneSpot.name}</h1>
            <img src={oneSpot.previewImage} alt={oneSpot.name} />

            <h2>
                {oneSpot.address},
                {oneSpot.city},
                {oneSpot.state},
                {oneSpot.country}
                {oneSpot.price}
            </h2>
            <p>
                {oneSpot.description}
            </p>
        </div>
    )
}

export default OneSpot;


