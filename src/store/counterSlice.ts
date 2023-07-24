import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch,RootState } from "./store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
// use if action is used in dispatch
interface state{
      count: number
}
const initialState:state={
      count: 0,
}
const counterSlice=createSlice({
      name:"counter",
      initialState,
      reducers:{
            increment(state){
                  return {...state,count:state.count+1};
            },
            decrement(state){
                  if(state.count===0){
                        return state
                  }
                  return {...state,count:state.count-1};
            },
      }
})
export const {increment,decrement}=counterSlice.actions;
export default counterSlice;

export const useCounterDispatch = () => useDispatch<AppDispatch>();
export const useCounterSelector: TypedUseSelectorHook<RootState> = useSelector;