
import { useSelector } from 'react-redux';
import './logicPanel.css';



const LogicPanel = () => {
    const { logicArr } = useSelector(state => state.dasbordControle);

    return (
        <div className="logic-panel"><h1>Logic Panel</h1>
            <table> <tr>
                <th>{logicArr[0] != undefined ? `[${logicArr[0].a}][${logicArr[0].b}]` : ""}</th>
                <th>{logicArr[1] != undefined ? `[${logicArr[1].a}][${logicArr[1].b}]` : ""}</th>
                <th>{logicArr[2] != undefined ? `[${logicArr[2].a}][${logicArr[2].b}]` : ""}</th>
                <th>{logicArr[3] != undefined ? `[${logicArr[3].a}][${logicArr[3].b}]` : ""}</th>
                <th>{logicArr[4] != undefined ? `[${logicArr[4].a}][${logicArr[4].b}]` : ""}</th>
                <th>{logicArr[5] != undefined ? `[${logicArr[5].a}][${logicArr[5].b}]` : ""}</th>
                <th>{logicArr[6] != undefined ? `[${logicArr[6].a}][${logicArr[6].b}]` : ""}</th>
                <th>{logicArr[7] != undefined ? `[${logicArr[7].a}][${logicArr[7].b}]` : ""}</th>
                <th>{logicArr[8] != undefined ? `[${logicArr[8].a}][${logicArr[8].b}]` : ""}</th>
                <th>{logicArr[9] != undefined ? `[${logicArr[9].a}][${logicArr[9].b}]` : ""}</th>
                <th>{logicArr[10] != undefined ? `[${logicArr[10].a}][${logicArr[10].b}]` : ""}</th>
                <th>{logicArr[11] != undefined ? `[${logicArr[11].a}][${logicArr[11].b}]` : ""}</th>
                <th>{logicArr[12] != undefined ? `[${logicArr[12].a}][${logicArr[12].b}]` : ""}</th>
            </tr></table>
        </div>
    )
}

export default LogicPanel;