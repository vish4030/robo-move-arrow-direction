import { ROBOTIC_INTERFACE_UPDATE } from "../constant"


export const updateGrid = (data) =>{
    return{
        type:ROBOTIC_INTERFACE_UPDATE,
        payLoad:data
    }
}