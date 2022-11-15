import './spotDesign.css';
import { Link } from 'react-router-dom';

const SpotDesign = ({ spot }) => {
    return (
        <Link to={`spots/${spot.id}`}>
            <div className='top'>
                <div className='preview-img'>
                    <img className='land-img' src={spot.previewImage} alt='preview image of this spot'/>
                </div>
            </div>

            <div className='bottom'>
                <div className='spot snap info'>
***// come back to this***
                </div>
            </div>


        </Link>
    )
}

export default SpotDesign;