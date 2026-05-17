import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <div>
     <Banner></Banner>
     <Featured></Featured>
     <WhyChooseUs></WhyChooseUs>
     <HowItWorks></HowItWorks>
     <Footer></Footer>
    </div>
  );
}
