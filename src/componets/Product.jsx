import React, { useEffect } from 'react'
import { asyncdata } from '../store/action/productaction.js'
import { useDispatch, useSelector } from 'react-redux'

export default function Product() {
  const data = useSelector((state) => state.productstore.Product)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncdata())
  }, [dispatch])

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}
