import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

// selectors
import { getOneSpotThunk } from '../../store/spots';
// CSS (to-do)
import './OneSpotDesign.css'

const OneSpot = ({ spots }) => {
    const { spotId } = useParams()
    const dispatch = useDispatch()
    const oneSpot = useSelector(state => state.spots[spotId])

    useEffect(() => {
        dispatch(getOneSpotThunk(spotId))
    }, [dispatch, spotId])

    if (!oneSpot) return null;

    return (
        <div className='outer-div'>
            <div className='spot-images'>

            </div>
            <img style={{ width: 600 }} src={oneSpot.previewImage} />
            <div className='spot-details'>
                <h1>{oneSpot.name}</h1>
            </div>

            <h2>
                {oneSpot.address}
            </h2>
            <h2>
                {oneSpot.city},
            </h2>
            <h2>
                {oneSpot.state}, {oneSpot.country}
            </h2>
            <h2>
            </h2>
                ${oneSpot.price}
            <p>
                {oneSpot.description}
            </p>
        </div>
    )
}

export default OneSpot;


