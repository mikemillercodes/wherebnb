import './spotDesign.css';
import { Link } from 'react-router-dom';

const SpotDesign = ({ spot }) => {
    return (
        <Link to={`spots/${spot.id}`}>
            <script src="https://kit.fontawesome.com/fb97bfcf0f.js" crossorigin="anonymous"></script>
            <div className='entire-landpage'>
                <div className='spot-top'>
                    <div className='preview-img'>
                        <img className='land-image' src={spot.previewImage} alt='previewImage of this spot' />

                        <div className='location-stars'>
                            <div className='location-text'>{spot.city}, {spot.state}</div>
                            <div className='avg-rating'><i class="fa-sharp fa-solid fa-star"></i>{spot.avgRating}</div>
                        </div>

                        <div className='spot-name'>{spot.name}</div>
                    </div>
                </div>
                <div className='spot-bottom'>
                    <div className='spot-price'>{`$${spot.price} night`}</div>
                </div>
            </div>
        </Link>
    )
}

export default SpotDesign;