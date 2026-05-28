import OrderAndBookingCard from "./OrderAndBookingCard";

const OrdersAndBookingTab = ({ user }) => {
    console.log("from orders and booking tab ",user)
    return (
        <div className="p-6 bg-white w-full rounded-2xl">
            <h1 className="text-lg">Orders History</h1>
            <div className="p-6 max-h-96 overflow-y-auto hide-scrollbar " >
                {
                    user.orders.map((order)=> <OrderAndBookingCard key={order.orderId} user={user} order={order} />)
                }
            </div>
        
        </div>
    )
}
export default OrdersAndBookingTab;