// CREATE A SPOT, NOT EDIT

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { createSpotThunk } from "../../store/spots";
import { useEffect } from "react";
// import './editSpot.css'

const CreateSpot = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    // useEffect(() => {
    //     dispatch(editSpotThunk(spot))
    // }, [dispatch, spot])

    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [previewImage, setPreviewImage] = useState('')
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

        let newSpot = await dispatch(createSpotThunk(payload))
        debugger
        if (newSpot) history.push(`/spots/${newSpot.id}`)
    }

    return (
        <div className="new-spot-page">
            <div className="outer">
                <span className="Form Title">New Spot Details</span>
            </div>
            <div className="form area">

                <form className="new-spot-form" onSubmit={handleSubmit}>
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
                    <input type="text"
                        className="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder='Price'
                        required
                    />

                    <button className="submit-edit" type="submit">Create New Spot</button>
                </form>
            </div>
        </div>

    )

}

export default CreateSpot;