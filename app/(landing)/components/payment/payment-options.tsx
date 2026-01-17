import { FiCreditCard } from "react-icons/fi";
import CardWithHeader from "../ui/card-with-header"


const paymentList = [
    {
        bank_name: "BCA",
        account_number: "111111111",
        account_holder: "PT SportOn Digital",
    },
    {
        bank_name: "Mandiri",
        account_number: "222222222",
        account_holder: "PT SportOn Digital",
    },
    {
        bank_name: "BRI",
        account_number: "333333333",
        account_holder: "PT SportOn Digital",
    },
];

const PaymentOptions =() => {
    return(
        <CardWithHeader title="Payment Options">
            {
                paymentList.map((payment, index) => (
                    <div className="flex gap-5 p-5 border-b border-gray-100" key={index}>
                        <div className="bg-blue-100 p-4 text-blue-500 h-fit self-center">
                            <FiCreditCard size={24} />
                        </div>
                        <div className="self-center">
                            <div className="font-bold">{payment.bank_name}</div>
                            <div className="text-sm">{payment.account_number}</div>
                            <div className="text-sm opacity-70">{payment.account_holder}</div>
                        </div>
                        <div className="p-1 ml-auto bg-blue-100 text-gray-800 text-xs h-fit self-center">
                            Bank Transfer
                        </div>
                    </div>
                ))
            }
        </CardWithHeader>
    );
};

export default PaymentOptions;