import { getAllSpots } from "../../store/spots";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import './LandPage.css'
import SpotDesign from "./spotDesign/spotDesign";

const LandPage = () => {
    const dispatch = useDispatch()
    useEffect (() => {
        dispatch(getAllSpots());
    }, [])

    const spots = useSelector(state => state.spots.getAllSpots)
    console.log('Spots: ', spots)

    let spotArr = []
    for (let i = 0; i < getAllSpots.length; i++) {
        let spot = getAllSpots[i]
        spotArr.push(getAllSpots[spot]);
    }

    return (
        <div>
            {spotArr.map(spot => (
                <SpotDesign key={spot.id} spot={spot}/>
            ))
}
        </div>
    )
}

export default LandPage;
