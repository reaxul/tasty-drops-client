import logo from "/logo.png";
import cancel from "../../assets/icon/cancel.svg";
import discount from "../../assets/icon/discount.svg";
import calendar from "../../assets/icon/calendar.svg";
import silver from "../../assets/icon/silver.svg";
import delivery from "../../assets/icon/delivery.svg";
import gold from "../../assets/icon/gold.svg";
import { useState } from "react";
import CheckoutModal from "../../components/Modal/CheckoutModal";
import { useGetProfileQuery } from "../../redux/reduxApi/userApi";
import useAuth from "../../api/useAuth";
import Loader from "../../components/Loader/Loader";
import { PaymentCancelModal } from "../../components/Modal/PaymentCancelModal";

export const TastyDropPlus = () => {
  const { user, isLoading: isLoading } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isCancelOpen, setCancelOpen] = useState(false);
  const [selectedSubscription, setSelectedSubscription] = useState(null);
  const { data: profileData, isLoading: loading } = useGetProfileQuery(
    user?.email
  );
  console.log(user);
  const isPlusType = profileData?.paymentInfo?.type;
  console.log(isPlusType);
  const silverSubscription = {
    type: "Silver",
    price: 399,
    description: "Free delivery on orders of Tk 49 or more",
    img: silver,
  };

  const goldSubscription = {
    type: "Gold",
    price: 999,
    description: "Free delivery on orders of Tk 99 or more",
    img: gold,
  };

  const openModal = (subscription) => {
    setSelectedSubscription(subscription);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCancelOpen(false);
  };

  if (isLoading || loading) return <Loader />;
  const openCancelModal = () => {
    setCancelOpen(true);
  };
  return (
    <div className="lg:pt-32 pt-28 lg:pb-28 p-10 bg-zinc-50 font-Fredoka">
      <CheckoutModal
        isOpen={isOpen}
        closeModal={closeModal}
        subscription={selectedSubscription}
      />
      <PaymentCancelModal isOpen={isCancelOpen} closeModal={closeModal} />
      <div className="max-w-5xl mx-auto">
        <div className="w-full flex items-center mx-auto lg:mx-0 justify-center rounded-tl-full rounded-br-full shadow-md bg-white py-2 ">
          <img loading="lazy" src={logo} className="w-16 lg:w-28" alt="TastyDrop" />{" "}
          <h1 className="lg:text-3xl text-xl tracking-wide">
            <span className="font-medium">TastyDrops</span>
            <span className="text-orange-500">plus</span>
          </h1>
        </div>

        <div className="space-y-20">
          <div className="text-center pt-20 lg:max-w-md mx-auto space-y-3">
            <h1 className="text-xl lg:text-3xl font-medium  ">
              Get special deals and offers on the food you love
            </h1>
            <p className="text-zinc-500 xl:px-7 text-xs lg:text-base">
              Join Plus to skip the delivery fee at great restaurants and
              grocery shops
            </p>
          </div>

          {/* features section */}

          <div className="flex flex-col lg:flex-row items-center justify-center text-center xl:max-w-4xl lg:mx-auto mx-4 shadow-md text-xs lg:text-base bg-white p-5 rounded-md">
            <div className=" flex flex-col items-center  justify-center h-48 w-52">
              <img loading="lazy" className="w-20 " src={discount} alt="discount" />
              <h1 className=" text-zinc-600">
                Save up to 100tk on delivery fees per order
              </h1>
            </div>
            <div className=" flex flex-col items-center  justify-center h-48 w-52">
              <img loading="lazy" className="w-20 " src={delivery} alt="delivery" />
              <h1 className=" text-zinc-600">Faster delivery</h1>
            </div>
            <div className=" flex flex-col items-center justify-center h-48 w-52  ">
              <img loading="lazy" className="w-20" src={calendar} alt="calendar" />
              <h1 className=" text-zinc-600">Get special birthday gift</h1>
            </div>
            <div className=" flex flex-col items-center  h-48 w-52 justify-center">
              <img loading="lazy" className="w-20" src={cancel} alt="cancel" />
              <h1 className=" text-zinc-600">Cancel at anytime</h1>
            </div>
          </div>

          {/* plans area */}
          <div className="lg:max-w-3xl mx-auto text-center">
            <h1 className="div-title">Choose your plan</h1>
            <div className="flex flex-col gap-7 lg:flex-row pt-10">
              <div className="bg-white mx-4 lg:mx-0 shadow-lg rounded-md">
                <div className="bg-gradient-to-r from-orange-500 to-red-500  px-3 py-7 ">
                  <img loading="lazy" className="w-24 mx-auto " src={silver} alt="" />
                  <h1 className="text-white text-lg  font-medium">
                    Free delivery on orders of Tk 49 or more
                  </h1>
                </div>
                <div className="space-y-4 mt-5 p-5">
                  <h1 className="text-2xl">Tk 399/month</h1>
                  <p>
                    Free delivery on the food you love – restaurants, takeaway
                    or groceries
                  </p>
                  {isPlusType === "Silver" ? (
                    <button
                      onClick={openCancelModal}
                      className="py-2   text-white font-medium rounded mt-5 px-3  transition-all w-full bg-orange-500 hover:bg-orange-600"
                    >
                      Cancel subscription
                    </button>
                  ) : (
                    <button
                      onClick={() => openModal(silverSubscription)}
                      disabled={isLoading || isPlusType === "Gold"}
                      type="submit"
                      className={`${
                        isPlusType === "Gold"
                          ? "bg-zinc-300 cursor-not-allowed"
                          : "bg-orange-500 hover:bg-orange-600"
                      } py-2   text-white font-medium rounded mt-5 px-3  transition-all w-full`}
                    >
                      Subscribe Silver for 30 days
                    </button>
                  )}
                </div>
              </div>
              <div className="bg-white mx-4 lg:mx-0 shadow-lg rounded-md">
                <div className="bg-gradient-to-r from-orange-500 to-red-500   px-3 py-7 ">
                  <img loading="lazy" className="w-24 mx-auto " src={gold} alt="" />
                  <h1 className="text-white text-lg   font-medium">
                    Free delivery on orders of Tk 99 or more
                  </h1>
                </div>
                <div className="space-y-4 mt-5 p-5">
                  <h1 className="text-2xl">Tk 999/month</h1>
                  <p>
                    Free delivery on the food you love – restaurants, takeaway
                    or groceries
                  </p>
                  {isPlusType === "Gold" ? (
                    <button
                      onClick={openCancelModal}
                      className="py-2   text-white font-medium rounded mt-5 px-3  transition-all w-full bg-orange-500 hover:bg-orange-600"
                    >
                      Cancel subscription
                    </button>
                  ) : (
                    <button
                      onClick={() => openModal(goldSubscription)}
                      disabled={isLoading || isPlusType === "Silver"}
                      type="submit"
                      className={`${
                        isPlusType === "Silver"
                          ? "bg-zinc-300 cursor-not-allowed"
                          : "bg-orange-500 hover:bg-orange-600"
                      }  py-2   text-white font-medium rounded mt-5 px-3  transition-all w-full`}
                    >
                      Subscribe Gold for 30 days
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* important text */}
          <p className="lg:text-sm text-xs text-center max-w-2xl lg:mx-auto tracking-wide text-zinc-600 lg:pb-10">
            Subscription will automatically renew to the standard price after
            any introductory offer period and you can cancel at any time. This
            offer is personal to you and only one account can be used for each
            subscription. This account will benefit from TastyDrop Plus. By
            clicking the button above, you agree to our TastyDrop Plus Terms and
            Conditions and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};