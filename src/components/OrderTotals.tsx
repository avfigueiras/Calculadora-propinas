import { useCallback, useMemo } from "react"
import { OrderItem } from "../types/types"
import { formatPrice } from "../helpers"

type OrderTotalProps = {
    order: OrderItem[]
    tip: number
    placeOrder: () => void
}

export const OrderTotals = ({order, tip, placeOrder}: OrderTotalProps) => {

    const subtotal = useMemo(() => order.reduce((total, current) => total + (current.quantity * current.price), 0),
    [order])
  
    const tipAmount = useMemo(() => subtotal * tip ,[tip,order])

    const totalAmount = useCallback(() => subtotal + tipAmount ,[tip, order])
    
  return (
    <>
     <div className=" space-y-3">
        <h2 className=" font-black text-2xl"> Totales y propinas</h2>
        <p> Subtotal a pagar:{' '}
            <span className=" font-bold">{formatPrice(subtotal)}</span>
        </p>
        <p> Propina:{' '}
            <span className=" font-bold">{formatPrice(tipAmount)}</span>
        </p>
        <p> Total a pagar:{' '}
            <span className=" font-bold">{formatPrice(totalAmount())}</span>
        </p>
     </div>
     <button
       className=" w-full bg-black text-white p-3 font-bold mt-10 disabled:opacity-10"
       disabled={totalAmount() === 0}
       onClick={placeOrder}
     >
        Guardar
     </button>
    </>
  )
}
