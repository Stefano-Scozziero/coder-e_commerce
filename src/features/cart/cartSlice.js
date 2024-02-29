import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items:[],
    total:0
}

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addCartItem:(state,action) =>{

            const existingItem = state.items.some((item)=> item.id === action.payload.id)
            if(!existingItem){
                state.items = [...state.items, {...action.payload}]
            }else{
                state.items = state.items.map((item)=>{
                    if(item.id === action.payload.id){
                        return {...item,quantity : item.quantity + action.payload.quantity}
                    }
                    return item
                })
            }
            
            state.total = state.items.reduce((acc,item)=> acc = acc + (item.price * item.quantity),0)
            
        },
        deleteCartItem:(state,action) =>{
            state.items = state.items.filter((item)=> item.id !== action.payload)
            state.total = state.items.reduce((acc,item)=> acc = acc + item.price,0)
        }
    }
})

export const  {addCartItem,deleteCartItem} = cartSlice.actions

export default cartSlice.reducer