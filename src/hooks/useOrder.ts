import { useState } from "react"
import { MenuItems, OrderItem } from "../types/types"


export const useOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>([])
  const [tip, setTip] = useState(0)

  const addItem = (item: MenuItems) => {
    const orderExist = order.find((element) => element.id === item.id);
    if (orderExist) {
      const updatedOrder = order.map((ele) => ele.id === item.id ?
        {
          ...ele,
          quantity: ele.quantity + 1
        } :
        ele
      )
      setOrder(updatedOrder)
    } else {
      const newItem: OrderItem = { ...item, quantity: 1 }
      setOrder([...order, newItem]);
    }
  }

  const deleteItem = (id: MenuItems['id']) => {
    const result = order.filter((element) => element.id !== id)
    setOrder(result)
  }

  const placeOrder = () => {
     setOrder([])
     setTip(0)
  }

  return {
    order,
    tip,
    setTip,
    addItem,
    deleteItem,
    placeOrder
  }
}
