
import './instruction.css'


const Instruction = ({index, message}) =>{


    return(
        <div className="instruction">{index ? index:""}   {message}</div>
    )

}

export default Instruction;