import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { editSpotThunk } from "../../store/spots";
import './editSpot.css'

const EditSpot = () => {
    const { spotId } = useParams()
    const dispatch = useDispatch()
    const spot = useSelector(state => state.spots[spotId])
    const history = useHistory()

    // useEffect(() => {
    //     dispatch(editSpotThunk(spot))
    // }, [dispatch, spot])

    const [address, setAddress] = useState(spot ? spot.address : '')
    const [city, setCity] = useState(spot ? spot.city : '')
    const [state, setState] = useState(spot ? spot.state : '')
    const [country, setCountry] = useState(spot ? spot.country : '')
    const [name, setName] = useState(spot ? spot.name : '')
    const [description, setDescription] = useState(spot ? spot.description : '')
    const [price, setPrice] = useState(spot ? spot.price : '')
    // previewImage
    const [errors, setErrors] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const payload = {
            address,
            city,
            state,
            country,
            lat: 120.1234242,
            lng: -120.1234242,
            name,
            description,
            price,
        }

        let editedSpot;

        editedSpot = await dispatch(editSpotThunk(spot, payload))
        // use createSpot thunk for create
        if (editedSpot) history.push(`/spots/${spotId}`)
    }

    return (
        <div className="edit-spot-page">
            <div className="edit-form-title">
                Did something change with your listing? Update below.
            </div>
            <div className="form area">

                <form className="edit-spot-form" onSubmit={handleSubmit}>
                    {!!errors.length && <ul>
                        {errors.map((error, index) => (
                            <li className="all-errors" key={index}>{error}</li>
                        ))}
                    </ul>}
                    <input type="text"
                        className="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Address"
                        required
                    />

                    <input type="text"
                        className="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder='City'
                        required
                    />
                    <input type="text"
                        className="state"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        placeholder='State'
                        required
                    />
                    <input type="text"
                        className="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder='Country'
                        required
                    />
                    <input type="text"
                        className="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Name'
                        required
                    />
                    <input type="text"
                        className="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder='Description'
                        required
                    />
                    <input type="number"
                        className="price2"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder='Price'
                        required
                        min='0'
                    />
                    <button className="submit-edit" type="submit">Submit</button>
                </form>
            </div>
        </div>

    )

}

export default EditSpot;