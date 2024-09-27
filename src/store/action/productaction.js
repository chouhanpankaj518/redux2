

import { getdata } from "../reducer/porductreducer.js"
import axios from "axios"

export const asyncdata = () => async (dispatch, getState) => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
    console.log(res.data)
    dispatch(getdata(res.data))
  } catch (e) {
    console.log(e)
  }
}
