import { getAllSpots, getSpotsThunk } from "../../store/spots";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import './spotDesign/spotDesign.css'
import '../../index.css'
import SpotDesign from "./spotDesign/spotDesign";

const LandPage = () => {
    const dispatch = useDispatch()
    useEffect (() => {
        dispatch(getSpotsThunk());
    }, [dispatch])

    const spots = useSelector(state => state)
    console.log('Spots: ', spots)
    let spotArr;
    if (Object.values(spots).length) {
        spotArr = getAllSpots(spots)
    }

    if (!spotArr.length) return null;

    return (
        <div className="all-spots">
            {spotArr.map(spot => (
                <SpotDesign key={spot.id} spot={spot}/>
            ))
}
        </div>
    )
}

export default LandPage;
