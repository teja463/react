import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:'counter',
    initialState: 0,
    reducers: {
        increment: state => {
            state += 1;
            return state;
        },
        decrement: state => {
            state-=1;
            return state;
        },
        incrementByValue: (state, action) => {
            state+=action.payload;
            return state;
        }
    }
})
console.log(counterSlice)
console.log(counterSlice.actions.increment())

export function incrementByValueAsync(value){
    return dispatch => {
        setTimeout(() => {
            dispatch(incrementByValue(value));
        }, 1000)
    }
}

export const {increment, decrement, incrementByValue} = counterSlice.actions;
export default counterSlice.reducer;