import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


import { updateGrid } from '../../redux/action/action';
import './roboControle.css'


const RoboControle = () => {

    const [btnStatus, setBtnStatus] = useState(true);

    const dispatch = useDispatch();
    const {stepTrack} = useSelector(state => state.dasbordControle);
    console.log(stepTrack);



    return (
        <div className="robo-control" style={{ display: "flex" }}>
            <div className="btn">
                <button onClick={() => dispatch(updateGrid("left"))} disabled={btnStatus}>	&larr;</button>
                <button onClick={() => dispatch(updateGrid("right"))} disabled={btnStatus} >&rarr;</button>
                <button onClick={() => dispatch(updateGrid("top"))} disabled={btnStatus} >&uarr;</button>
                <button onClick={() => dispatch(updateGrid("bottom"))} disabled={btnStatus} >&darr;</button>
            </div>
            <div className="btn" >
                <button className="init" disabled={btnStatus ? false : true}
                    onClick={() => { dispatch(updateGrid("initial")); setBtnStatus(!btnStatus); }} >Play</button>
                <button className="init"
                    onClick={() => dispatch(updateGrid("reset"))} disabled={btnStatus} >&#8635;</button>

            </div>

        </div>
    )
};

export default RoboControle;