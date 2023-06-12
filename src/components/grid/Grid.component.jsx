import './grid.css';

const Grid = ({ rowArr }) => {

    return (
        <tr>
            <td>{rowArr[0]? <img className='img' src="https://i.ibb.co/rGYhJpr/robo1.jpg" alt="robo" />:""}</td>
            <td>{rowArr[1]? <img className='img' src="https://i.ibb.co/rGYhJpr/robo1.jpg" alt="robo" />:""}</td>
            <td>{rowArr[2]? <img className='img' src="https://i.ibb.co/rGYhJpr/robo1.jpg" alt="robo" />:""}</td>
            <td>{rowArr[3]? <img className='img' src="https://i.ibb.co/rGYhJpr/robo1.jpg" alt="robo" />:""}</td>
            <td>{rowArr[4]? <img className='img' src="https://i.ibb.co/rGYhJpr/robo1.jpg" alt="robo" />:""}</td>
        </tr>
    )
}

export default Grid;