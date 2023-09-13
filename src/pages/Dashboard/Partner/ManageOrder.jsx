import { BsThreeDots } from "react-icons/bs";
import useOrdersData from "../../../Hooks/useOrderData";

const ManageOrder = () => {
  const orders = useOrdersData();
  console.log(orders);

  return (
    <>
      <div className="sm:px-4 w-full">
        <div className="py-4 md:py-7">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-black/80">
            Order Details
          </p>
        </div>
        <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
          <div className="sm:flex items-center justify-between">
            <div className="flex items-center">
              <a
                className="rounded-full focus:outline-none focus:ring-2  focus:bg-indigo-50 focus:ring-indigo-800"
                href=" javascript:void(0)"
              >
                <div className="py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full">
                  <p>All</p>
                </div>
              </a>
              <a
                className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8"
                href="javascript:void(0)"
              >
                <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                  <p>Done</p>
                </div>
              </a>
              <a
                className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8"
                href="javascript:void(0)"
              >
                <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                  <p>Pending</p>
                </div>
              </a>
            </div>
          </div>
          <div className="mt-7 overflow-x-auto">
            <table className="w-full whitespace-nowrap">
              <thead className="bg-gray">
                <tr className="text-left text-sm text-black/80">
                  <th className="py-3 px-4">Order ID</th>
                  <th className="py-3 px-4">Customer</th>
                  <th className="py-3 px-4">Order Date</th>
                  <th className="py-3 px-4">Payment Status</th>
                  <th className="py-3 px-4">Total</th>
                  <th className="py-3 px-4">Order Status</th>
                  <th className="py-3 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, i) => {
                  return (
                    <>
                      <tr key={i} className="">
                        <td className="px-3 py-4 whitespace-no-wrap border-b border-gray">
                          <div className="flex items-center ">
                            <div>
                              <div className="text-sm leading-5 text-indigo-500">
                                #{order.transactionId.slice(0, 8)}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-no-wrap border-b border-gray">
                          <div className="text-sm leading-5 text-black/80">
                            {order.customerData.name}
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-no-wrap border-b text-black/80 border-gray text-sm leading-5">
                          {order.orderDate}
                        </td>
                        <td className="px-4 py-4 whitespace-no-wrap border-b text-black/80 border-gray text-sm leading-5">
                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-green-400 opacity-50 rounded-full"
                            ></span>
                            <span className="relative text-xs">
                              {order.paymentStatus ? "Paid" : "Unpaid"}
                            </span>
                          </span>
                        </td>
                        <td className="px-4 py-4 whitespace-no-wrap border-b text-black/80 border-gray text-sm leading-5">
                          {order.totalPrice}
                        </td>
                        <td className="px-4 py-4 whitespace-no-wrap border-b border-gray text-black/80 text-sm leading-5">
                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-purple-200 opacity-50 rounded-full"
                            ></span>
                            <span className="relative text-xs">
                              {order?.delivery}
                            </span>
                          </span>
                        </td>
                        <td className="px-7 py-4 whitespace-no-wrap text-right cursor-pointer border-b border-gray text-sm leading-5">
                          <BsThreeDots
                            className="text-slate-400"
                            size={20}
                          ></BsThreeDots>
                        </td>
                      </tr>
                      <tr className="h-3"></tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageOrder;
