import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getOneSpotThunk } from '../../store/spots';
import { deleteSpotThunk } from '../../store/spots';
// CSS (to-do)
import './OneSpotDesign.css'

const OneSpot = () => {
    const { spotId } = useParams()
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const oneSpot = useSelector(state => state.spots[spotId])
    console.log("One Spot :", oneSpot)

    const history = useHistory()

    useEffect(() => {
        dispatch(getOneSpotThunk(spotId))
    }, [dispatch, spotId])

    if (!oneSpot) return null;

    return (
        <div className='outer-div'>

            {user.id === oneSpot.ownerId && <button onClick={() => {
                history.push(`/spots/${spotId}/edit`)
            }}>Edit Spot</button>}

            {user.id === oneSpot.ownerId && <button onClick={() => {
                if (dispatch(deleteSpotThunk(spotId)) === true) {
                    history.push(`/`)
                }
            }}>Delete Spot</button>}
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


