import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Comida from '../../models/Comida'

type CartState = {
  items: Comida[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state, action: PayloadAction<Comida>) {
      state.items.push(action.payload)
    }
  }
})

export const { add } = cartSlice.actions
