import PaymentCard from "./PaymentCard";

const Payments = ({ user }) => {
    console.log(user.payments);
    

    return (
        <div className="p-6 bg-white w-full rounded-2xl">
            <h1 className="text-lg">Payment History</h1>
            {
                user.payments.map((payment) => <PaymentCard key={payment.paymentId} payment={payment} />)
            }
        </div>
    )
}
export default Payments;