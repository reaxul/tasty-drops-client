import restaurant from "../../assets/asset/Category Card/restaurant.jpg";
import customerImg from "../../assets/asset/facility-card-images/newCustomer.jpg";
import orderImg from "../../assets/asset/facility-card-images/boost-order.jpg";
import salesImg from "../../assets/asset/facility-card-images/salesImage.jpg";
import satisfiedImg from "../../assets/asset/facility-card-images/satisfiedCustomer.jpg";
import UsersCTASection from "../UsersCTASection/UsersCTASection";
import FacilityCard from "../../components/Cards/FacilityCard";
import BannerTemplate from "../../components/Banner/dynamicBanner/BannerTemplate";
const Partner = () => {
  const facilities = [
    { title: "REACH NEW CUSTOMERS", image: customerImg },
    { title: "BOOST YOUR ORDER VOLUME", image: orderImg },
    { title: "DRIVE MORE SALES", image: salesImg },
    { title: "INCREASE CUSTOMER SATISFACTION", image: satisfiedImg },
  ];

  return (
    <>
      <BannerTemplate
        bannerImage={restaurant}
        heading={"Tap into a fresh audience"}
        subHeading={"Become a partner"}
        description={
          "Take your business to new heights by partnering with Tasty Drop, the leading delivery service trusted by businesses large and small. We dare to always go further, helping you reach untapped customer bases, boost order volume, and drive more sales."
        }></BannerTemplate>
      <UsersCTASection
        btnLabel={"Become a partner"}
        heading={"Hello"}
        subHeading={
          "Tasty Food is live across all major cities. Take your business to new heights by partnering with us!"
        }
        ctaImg={satisfiedImg}
        link={"/partners/register"}
        userLocation={"partner"}></UsersCTASection>
      <div>
        <p className="text-center text-3xl tracking-tighter text-sky-900 font-bold font-sans mt-20">
          {"Why partner with Tasty Drop?"}
        </p>

        <FacilityCard facilities={facilities}></FacilityCard>
      </div>
    </>
  );
};

export default Partner;
