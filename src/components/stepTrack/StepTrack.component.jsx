
import { useSelector } from 'react-redux';
import './steptrace.css'

const StepTrace = () => {
    const flag = useSelector(state => state.dasbordControle.logicArr);
    console.log(flag)
    return (
        <>
            <span className="dot" style={{ backgroundColor: flag[0]!= undefined? "darkblue" : "white" }} ></span>
            <hr style={{ display: "inline-block", width: "5%" }} />
            <span className="dot" style={{ backgroundColor: flag[1]!= undefined? "darkblue" : "white" }} ></span>
            <hr style={{ display: "inline-block", width: "5%" }} />
            <span className="dot" style={{ backgroundColor: flag[2]!= undefined? "darkblue" : "white" }} ></span>
            <hr style={{ display: "inline-block", width: "5%" }} />
            <span className="dot" style={{ backgroundColor: flag[3]!= undefined? "darkblue" : "white" }} ></span>
            <hr style={{ display: "inline-block", width: "5%" }} />
            <span className="dot" style={{ backgroundColor: flag[4]!= undefined? "darkblue" : "white" }} ></span>
            <hr style={{ display: "inline-block", width: "5%" }} />
            <span className="dot" style={{ backgroundColor: flag[5]!= undefined? "darkblue" : "white" }} ></span>
            <hr style={{ display: "inline-block", width: "5%" }} />
            <span className="dot" style={{ backgroundColor: flag[6]!= undefined? "darkblue" : "white" }} ></span>
            <hr style={{ display: "inline-block", width: "5%" }} />
            <span className="dot" style={{ backgroundColor: flag[7]!= undefined? "darkblue" : "white" }} ></span>
            <hr style={{ display: "inline-block", width: "5%" }} />
            <span className="dot" style={{ backgroundColor: flag[8]!= undefined? "darkblue" : "white" }} ></span>
            <hr style={{ display: "inline-block", width: "5%" }} />
            <span className="dot" style={{ backgroundColor: flag[9]!= undefined? "darkblue" : "white" }} ></span>
            <hr style={{ display: "inline-block", width: "5%" }} />
            <span className="dot" style={{ backgroundColor: flag[10]!= undefined? "darkblue" : "white" }} ></span>
            <hr style={{ display: "inline-block", width: "5%" }} />
            <span className="dot" style={{ backgroundColor: flag[11]!= undefined? "darkblue" : "white" }} ></span>
            <hr style={{ display: "inline-block", width: "5%" }} />
            <span className="dot" style={{ backgroundColor: flag[12]!= undefined? "darkblue" : "white" }} ></span>
        </>
    )
};

export default StepTrace;