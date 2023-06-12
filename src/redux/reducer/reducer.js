import { ROBOTIC_INTERFACE_UPDATE } from "../constant";


const initialState = {
    gridArray: [],
    instruction: [""],
    stepTrack: 0,
    prevIndex: [0, 0],
    logicArr: []
}


export default function dasbordControle(state = initialState, action) {
    switch (action.type) {
        case ROBOTIC_INTERFACE_UPDATE:
            const copyArr = state.gridArray;
            let copyLogicArr = state.logicArr;
            if (state.gridArray[0] === undefined) {
                for (let i = 0; i < 5; i++)
                    copyArr.push(new Array(5).fill(0));
            } else {
                if (action.payLoad === "initial" || action.payLoad === "reset") {
                    copyArr[state.prevIndex[0]][state.prevIndex[1]] = 0;
                    copyArr[0][0] = 1;
                    state.prevIndex.fill(0, 0, 2);
                    state.instruction = [""];
                    state.stepTrack = 0
                    copyLogicArr.length =0
                    copyLogicArr[state.stepTrack] = { "a": state.prevIndex[0], "b": state.prevIndex[1] };
                } else if (action.payLoad === "left") {
                    if (state.prevIndex[1] !== 0) {
                        state.instruction.push("Robot Move Left");
                        copyArr[state.prevIndex[0]][state.prevIndex[1] - 1] = 1;
                        copyArr[state.prevIndex[0]][state.prevIndex[1]] = 0;
                        state.prevIndex[1] -= 1;
                        state.stepTrack += 1;
                        copyLogicArr[state.stepTrack] = { "a": state.prevIndex[0], "b": state.prevIndex[1] };
                    }

                } else if (action.payLoad === "right") {
                    if (state.prevIndex[1] !== 4) {
                        state.instruction.push("Robot Move Right");
                        copyArr[state.prevIndex[0]][state.prevIndex[1] + 1] = 1;
                        copyArr[state.prevIndex[0]][state.prevIndex[1]] = 0;
                        state.prevIndex[1] += 1;
                        state.stepTrack += 1;
                        copyLogicArr[state.stepTrack] = { "a": state.prevIndex[0], "b": state.prevIndex[1] };
                    }
                } else if (action.payLoad === "top") {
                    if (state.prevIndex[0] !== 0) {
                        state.instruction.push("Robot Move Top");
                        copyArr[state.prevIndex[0] - 1][state.prevIndex[1]] = 1;
                        copyArr[state.prevIndex[0]][state.prevIndex[1]] = 0;
                        state.prevIndex[0] -= 1;
                        state.stepTrack += 1;
                        copyLogicArr[state.stepTrack] = { "a": state.prevIndex[0], "b": state.prevIndex[1] };
                    }
                } else if (action.payLoad === "bottom") {
                    if (state.prevIndex[0] !== 4) {
                        state.instruction.push("Robot Move Down");
                        copyArr[state.prevIndex[0] + 1][state.prevIndex[1]] = 1;
                        copyArr[state.prevIndex[0]][state.prevIndex[1]] = 0;
                        state.prevIndex[0] += 1;
                        state.stepTrack += 1;
                        copyLogicArr[state.stepTrack] = { "a": state.prevIndex[0], "b": state.prevIndex[1] };
                    }
                }
                if (state.prevIndex[0] === 4 && state.prevIndex[1] === 4)
                    state.instruction[state.stepTrack] = "Robot Reached the destination";
            }
            return {
                ...state,
                gridArray: copyArr,
                prevIndex: state.prevIndex,


            };

        default:
            return state


    }
}