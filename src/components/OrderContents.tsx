import { formatPrice } from "../helpers"
import {  MenuItems, OrderItem } from "../types/types"

type OrderContentsProps = {
    order: OrderItem[]
    deleteItem:(id:MenuItems['id']) => void
}
export const OrderContents = ({ order, deleteItem }: OrderContentsProps) => {
    return (
        <div>
            <h2 className=' font-black text-4xl'>Consumo</h2>
            <div className=" space-y-3 mt-10">
                {
                        order.map((item) => (
                            <div
                                key={item.id}
                                className=" flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b"
                            >
                                <div>
                                    <p className=" text-lg">
                                        {item.name} - {formatPrice(item.price)}
                                    </p>
                                    <p className=" font-black">
                                        Cantidad: {item.quantity} - {formatPrice(item.quantity * item.price)}
                                    </p>
                                </div>
                                <button 
                                className=" bg-red-500 h-8 w-8 rounded-full text-white font-black"
                                onClick={() => deleteItem(item.id)}
                                > x </button>
                            </div>
                        ))
                }
            </div>
        </div>
    )
}
