import { useDispatch } from "react-redux";


import { updateGrid } from '../../redux/action/action';
import './roboControle.css'


const RoboControle = () => {
const dispatch  = useDispatch();

return(
    <div className="robo-control" style={{display:"flex"}}>
        <div className="btn">
        <button onClick={()=>dispatch(updateGrid("left"))}>	&larr;</button>
        <button onClick={()=>dispatch(updateGrid("right"))} >&rarr;</button>
        <button onClick={()=>dispatch(updateGrid("top"))} >&uarr;</button>
        <button onClick={()=>dispatch(updateGrid("bottom"))} >&darr;</button>
        </div>
        <div className="btn" >
            <button className="init" onClick={()=>dispatch(updateGrid("initial"))} >Play</button>
            <button className="init" onClick={()=>dispatch(updateGrid("reset"))} >&#8635;</button>

        </div>

    </div>
)
};

export default RoboControle;