import Image from "next/image";
import featurescard from "../data/featurescard";


const Sectionc2 = () => {

return (
    <div className="  relative z-[99999] top-[120px] w-full mx-auto items-center content-center text-center pb-[100px] max-w-screen-2xl mx-auto ">

        <div className=" mb-[40px] ">
            <h1 className="text-[#000000] 2xl:text-[38px] xl:text-[35px] font-medium z-99999  ">Everything You Need in One Smart Wallet</h1>
            <p className=" mt-[20px] 2xl:text-[20px] xl:text-[18px] 2xl:w-[600px] xl:w-[550px] mx-auto ">Manage payments, top-ups, bills, and transfers instantly — fast, 
secure, and always accessible.</p>
        </div>
        <div className="grid grid-cols-3  px-[80px]">
            {featurescard.map((feat)=> <div>
                  <div key={feat.id} className="bg-[url('/Group9.png')]  px-[45px] flex flex-col justify-center items-center content-center bg-cover ">
                  <div className="bg-[url('/Rectangle2.png')] w-[300px] flex justify-center h-[200px] items-center content-center bg-cover ">
                  <Image src={feat.image2} alt="" width={40} height={40} className="w-[75px] mt-18" />
            
                  </div>      <h1 className="text-[25px] mt-6 text-[#ffff] font-bold">
                        {feat.title}
                  </h1>
                  <p className="text-[16px] mt-5 2xl:mb-60 xl:mb-23  text-[#fff]">{feat.desc}</p>
                  </div>
            </div>)}
</div>

    </div>
)
}
export default Sectionc2;