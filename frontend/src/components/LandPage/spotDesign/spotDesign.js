import './spotDesign.css';
import { Link } from 'react-router-dom';

const SpotDesign = ({ spot }) => {
    console.log('Spot Prop', spot)
    return (
        <Link to={`spots/${spot.id}`}>
            <div className='spot-top'>
                <div className='preview-img'>
                    <img className='land-image' src={spot.previewImage} alt='preview image of this spot'/>
                <div className='spot location info'>
                    <div className='location-text'>{spot.city}, {spot.state}</div>
                </div>
                <div className='spot-name'>{spot.name}</div>
                </div>
            </div>

            <div className='spot-bottom'>
                <div className='spot-price'>${spot.price}</div>
                <div className='avg-rating'>{spot.avgRating}</div>
            </div>
        </Link>
    )
}

export default SpotDesign;