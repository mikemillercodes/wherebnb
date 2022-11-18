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

            {user && user.id === oneSpot.ownerId && <button onClick={() => {
                history.push(`/spots/${spotId}/edit`)
            }}>Edit Spot</button>}

            {user && user.id === oneSpot.ownerId && <button onClick={() => {
                const deleteDispatch = dispatch(deleteSpotThunk(spotId))
                if (deleteDispatch) history.push(`/`);
            }}>Delete Spot</button>}

            <div className='spot-images'>
                <img class='spot-image1' src={previewImage.url} alt={oneSpot.name} />

                {nonPreviewImages2.map(image =>
                    <img class='spot-image2' src={image.url} alt={oneSpot.name} />
                )}
            </div>
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
            {`${oneSpot.price} night`}
            <p>
                {oneSpot.description}
            </p>
        </div>
    )
}

export default OneSpot;


