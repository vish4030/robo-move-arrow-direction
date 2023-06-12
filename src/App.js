
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import Grid from './components/grid/Grid.component';
import Instruction from './components/instruction/Instruction.component';
import RoboControle from './components/roboControle/RoboControle.component';
import LogicPanel from './components/logicPanel/LogicPanel.component'
import { updateGrid } from './redux/action/action';
import StepTrace from './components/stepTrack/StepTrack.component';
import Content from './components/content/content.component';






function App() {

  const dispatch = useDispatch();
  useEffect(() => { dispatch(updateGrid(" ")); }, [])

  const { gridArray, instruction, prevIndex, stepTrack } = useSelector(state => state.dasbordControle);

  return (
    <div className="App" style={{ display: "flex" }}>
      <div className="content">
        <Content />
      </div>
      <div className='function'>
        <div className='function-step-track'>
          <StepTrace />
        </div>
        {/*{5X5 grid and Step Description}*/}
        <div className="function-robo-dash" style={{ display: "flex" }}>
          <table id="function-robo-dash-grid">{
            gridArray.map((item, index) => {
              return <Grid key={index}
                rowArr={item}
              />
            })
          }</table>
          <div className="function-robo-dash-Instruction">
            <span style={{ fontSize: "22px" }}>Instruction Implemented.</span>
            {
              instruction.map((item, index) => {
                return <Instruction key={index}
                  index={index}
                  message={item}
                />
              })
            }
          </div>
        </div>
        {/*{Contole buttons and Logic Pannel}*/}
        <div className='function-logic-control'
          style={{ display: stepTrack == 12 || instruction[stepTrack] === "Robot Reached the destination" ? "none" : "block" }}>
          <LogicPanel prevIndex={prevIndex} />
          <RoboControle />
        </div>

        {/* {condition for cross the given limit OR reached the destination} */}
        <h1 style={{
          display: instruction[stepTrack] === "Robot Reached the destination" ? "block" : "none", fontSize: "48px"
        }} >Robot Reached the destination
          <button onClick={() => dispatch(updateGrid("reset"))} style={{ fontSize: "48px", backgroundColor: "green" }}
          > Play Again</button>
        </h1>
        <h1 style={{
          display: stepTrack == 12 ? "block" : "none", fontSize: "48px"
        }} >Your Chance Ended
          <button onClick={() => dispatch(updateGrid("reset"))} style={{ fontSize: "48px", backgroundColor: "green" }}
          > Play Again</button>
        </h1>
        {/* ---------------------------------------- */}
      </div>
    </div>
  );
}

export default App;
