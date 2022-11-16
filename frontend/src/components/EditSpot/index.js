import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getOneSpotThunk } from "../../store/spots";
import { editSpotThunk } from "../../store/spots";
import './editSpot.css'

const EditSpot = () => {
    const { id } = useParams()
    const dispatch = useDispatch()

    const spot = useSelector(getOneSpotThunk(id))

    const [address, setAddress] = useState(spot.address)
    const [city, setCity] = useState(spot.city)
    const [state, setState] = useState(spot.state)
    const [country, setCountry] = useState(spot.country)
    const [name, setName] = useState(spot.name)
    const [description, setDescription] = useState(spot.description)
    const [price, setPrice] = useState(spot.price)
    const [errors, setErrors] = useState([])

    const updateAddress = (event) => setAddress(event.target.value)
    const updateCity = (event) => setCity(event.target.value)
    const updateState = (event) => setState(event.target.value)
    const updateCountry = (event) => setCountry(event.target.value)
    const updateName = (event) => setName(event.target.value)
    const updateDescription = (event) => setDescription(event.target.value)
    const updatePrice = (event) => setPrice(event.target.value)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const payload = {
            address,
            city,
            state,
            country,
            name,
            description,
            price
        }

        let editedSpot;

        editedSpot = await dispatch(editSpotThunk(payload, spot))


    }

    return (
        <div className="edit-spot-page">
            <div className="outer">
                <span className="Form Title">Update Spot Details</span>
                <form className="edit-spot-form">
                    <input type="text"
                        className="address"
                        value={address}
                        onChange={updateAddress}
                        placeholder="Address"
                        required
                    />

                    <input type="text"
                        className="city"
                        value={address}
                        onChange={updateAddress}
                        placeholder='City'
                        required
                    />
                    <input type="text"
                        className="state"
                        value={state}
                        onChange={updateState}
                        placeholder='State'
                        required
                    />
                    <input type="text"
                        className="country"
                        value={country}
                        onChange={updateCountry}
                        placeholder='Country'
                        required
                    />
                            <input type="text"
                        className="name"
                        value={name}
                        onChange={updateName}
                        placeholder='Name'
                        required
                    />
                            <input type="text"
                        className="description"
                        value={description}
                        onChange={updateDescription}
                        placeholder='Description'
                        required
                    />
                            <input type="text"
                        className="price"
                        value={address}
                        onChange={updatePrice}
                        placeholder='Price'
                        required
                    />
                </form>
            </div>

        </div>
    )

}

export default EditSpot;