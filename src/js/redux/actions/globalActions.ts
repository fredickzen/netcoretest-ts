import { types } from "../types/types";

export const GlobalIniting = () => ({
    type: types.GLOBAL_INITING,
})

export const GlobalInit = (data: any) => ({
    type: types.GLOBAL_INIT,
    payload: data
})
