import { configureStore } from '@reduxjs/toolkit'
import productSlice from "./reducer/porductreducer.js"
export const store = configureStore({
  reducer: {
    productstore: productSlice
  },
})
