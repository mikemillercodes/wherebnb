// CREATE A SPOT, NOT EDIT

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { createReviewThunk } from "../../store/reviews";
import { useParams } from "react-router-dom";
import './CreateReview.css'

const CreateReview = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { spotId } = useParams()

    const [review, setReview] = useState('')
    const [stars, setStars] = useState(1)
    const [errors, setErrors] = useState([])

    const user = useSelector(state => state.session.user)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = { review, stars }
        let newReview = await dispatch(createReviewThunk(payload, spotId))
            .catch(async (response) => {
                const data = await response.json()
                if (data && data.errors) setErrors(data.errors)
            })
        if (newReview) history.push(`/spots/${spotId}`)
    }

    return (
        <div className="new-review-form">
            <div className="outer">
            <div className="form area">
                <form className="new-review-form" onSubmit={handleSubmit}>
                    <ul>
                        {errors.map((error, index) => (
                            <li className="all-errors" key={index}>{error}</li>
                            ))}
                    </ul>
                    <div className='review-form-title'>{`How was your stay, ${user.firstName}?`}</div>
                    <input type="text"
                        className="review-content"
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        placeholder='Leave your thoughts here!'
                        required
                        />
                    <label className='review-stars'>
                        {`Stars `}
                        <select
                            value={stars}
                            onChange={(e) => setStars(e.target.value)}
                            >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </label>

                    <button className="submit-review" type="submit">Submit</button>
                </form>
            </div>
        </div>
                            </div>

    )

}

export default CreateReview;