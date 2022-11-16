import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// import { getOneSpot } from "../../store/spots";
import { editSpotThunk } from "../../store/spots";
import { useEffect } from "react";
import './editSpot.css'

const EditSpot = () => {
    const { spotId } = useParams()
    const dispatch = useDispatch()
    const spot = useSelector(state => state.spots[spotId])
    console.log("Edit Spot - Spot :", spot, spotId)
    // const history = useHistory()

    useEffect(() => {
        dispatch(editSpotThunk(spotId))
    }, [dispatch, spotId])
    
    
    // const spotTest = useSelector(state => state)
    // console.log("Spot Test: ", spotTest)


    const [address, setAddress] = useState(spot.address)
    const [city, setCity] = useState(spot.city)
    const [state, setState] = useState(spot.state)
    const [country, setCountry] = useState(spot.country)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    // const [errors, setErrors] = useState('')

    // const handleSubmit = async (e) => {
    //     e.preventDefault()

    //     const payload = {
    //         address,
    //         city,
    //         state,
    //         country,
    //         name,
    //         description,
    //         price
    //     }

    //     // let editedSpot;

    //     // editedSpot = await dispatch(editSpotThunk(payload, spot))

    //     // if (editedSpot) history.push('/')
    // }

    return (
        <div className="edit-spot-page">
            <div className="outer">
                <span className="Form Title">Update Spot Details</span>
                </div>
                <form className="edit-spot-form">
                    <input type="text"
                        className="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Address"
                        required
                    />

                    <input type="text"
                        className="city"
                        value={address}
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
                        value={address}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder='Price'
                        required
                    />
                </form>
            </div>

    )

}

export default EditSpot;