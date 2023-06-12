
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import Grid from './components/grid/Grid.component';
import Instruction from './components/instruction/Instruction.component';
import RoboControle from './components/roboControle/RoboControle.component';
import LogicPanel from './components/logicPanel/LogicPanel.component'
import { updateGrid } from './redux/action/action';
import StepTrace from './components/stepTrack/StepTrack.component';






function App() {

  const dispatch = useDispatch();
  useEffect(() => { dispatch(updateGrid(" ")); }, [])

  const { gridArray, instruction, prevIndex } = useSelector(state => state.dasbordControle);

  return (
    <div className="App" style={{ display: "flex" }}>
      <div className="content"></div>
      <div className='function'>
        <div className='function-step-track'>
          <StepTrace />
        </div>
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
        <div className='function-logic-control'>
          <LogicPanel prevIndex={prevIndex} />
          <RoboControle />
        </div>
      </div>
    </div>
  );
}

export default App;
