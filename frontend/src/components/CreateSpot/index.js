// CREATE A SPOT, NOT EDIT

import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { createSpotImageThunk, createSpotThunk } from "../../store/spots";
import './NewSpot.css'

const CreateSpot = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [previewImageUrl, setPreviewImageUrl] = useState('')
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

        let createdSpot = await dispatch(createSpotThunk(payload))
            .catch(async (res) => {
                const fetchData = await res.json()
                if (fetchData && fetchData.errors) setErrors(fetchData.errors)
            })

        if (createdSpot && previewImageUrl) {
            const previewImagePayload = {
                url: previewImageUrl,
                preview: true
            }
            await dispatch(createSpotImageThunk(previewImagePayload, createdSpot))
        }

        if (createdSpot) history.push(`/spots/${createdSpot.id}`)
    }

    return (
        <div className="new-spot-page">
            <div className="title">
                Ready to Wherebnb it? Fill this out and let's get started.
            </div>
            <div className="form area">
                <form className="new-spot-form" onSubmit={handleSubmit}>
                    {!!errors.length && <ul>
                        {errors.map((error, index) => (
                            <li className="all-errors" key={index}>{error}</li>
                        ))}
                    </ul>}
                    <input id='input-address' type="text"
                        className="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Address"
                        required
                    />

                    <input id='input-city' type="text"
                        className="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder='City'
                        required
                    />
                    <input id='input-state' type="text"
                        className="state"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        placeholder='State'
                        required
                    />
                    <input id='input-country' type="text"
                        className="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder='Country'
                        required
                    />
                    <input id='input-name' type="text"
                        className="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Name'
                        required
                    />
                    <input id='input-description' type="text"
                        className="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder='Description'
                        required
                    />
                    <input id='input-price' type="number"
                        className="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder='Price'
                        required
                    />
                    <input id='input-preview-img'
                        type='url'
                        className="preview-image"
                        placeholder="Preview Image URL"
                        value={previewImageUrl}
                        onChange={(e) => setPreviewImageUrl(e.target.value)}
                        required
                    />

                    <button className="submit-new-spot" type="submit">Submit</button>
                </form>
            </div>
        </div>

    )

}

export default CreateSpot;