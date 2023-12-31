import CountUp from "react-countup";
const FoodType = () => {
  const Options = [
    {
      icon: "fa-utensils",
      text: "Menu Delivered",
      count: 350,
    },
    {
      icon: "fa-face-smile-wink",
      text: "Happy Customers",
      count: 150,
    },
    {
      icon: "fa-burger",
      text: "Menu Items",
      count: 180,
    },
    {
      icon: "fa-motorcycle",
      text: "Ready To Go",
      count: 50,
    },
  ];
  return (
    <div className="pt-28 lg:block hidden">
      <div className="w-[88vw] mx-auto h-[250px] lg:h-[400px]">
        <img loading="lazy"
          className="h-full w-full object-cover"
          src="/faq-banner2.jpg"
          alt=""
        />
      </div>
      <div className="lg:flex justify-center gap-8 text-center">
        {Options.map((option, i) => (
          <div
            key={i}
            className="h-[220px] pt-6 w-[15vw] -mt-16 rounded-md bg-white duration-300 border-pink shadow-lg text-pink cursor-pointer relative">
            <div className="flex-col items-center justify-between">
              <p>
                <i className={`${option.icon} text-6xl fa-solid`}></i>
              </p>
              <p className="font-bold pt-3 text-5xl text-pink">
                <CountUp enableScrollSpy={true} end={option.count} />
              </p>
            </div>
            {/* Menu Text */}
            <h3 className="text-xl uppercase font-Fredoka font-semibold absolute bottom-2 right-2 left-2">
              {option.text}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodType;
