import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

// selectors
import { getAllSpots, getSpotById } from '../../store/spots';
// CSS (to-do)
import './OneSpotDesign.css'

const OneSpot = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const oneSpot = useSelector(getSpotById(id))
    console.log('One Spot: ', oneSpot)

    useEffect(() => {
        dispatch(getAllSpots())
    }, [dispatch])

    if (!oneSpot) return null;
    
    return (
        <div>
            <h1>{oneSpot.name}</h1>
            <img style={{ width: 500 }} src={oneSpot.previewImage} alt={oneSpot.name} />
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


