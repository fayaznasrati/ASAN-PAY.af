import Image from "next/image";
import featurescard from "../data/featurescard";


const Sectionc4 = () => {

return (
    <div className="  relative z-[99999] top-[120px] w-full mx-auto items-center content-center text-center pb-[100px] ">

        <div className="grid grid-cols-3  px-[80px]">
            {featurescard.map((feat)=> <div>
                  <div key={feat.id} className="bg-[url('/Group9.png')]  px-[45px] flex flex-col justify-center items-center content-center bg-cover ">
                  <div className="bg-[url('/Rectangle2.png')] w-[300px] flex justify-center h-[200px] items-center content-center bg-cover ">
                  <Image src={feat.image2} alt="" width={40} height={40} className="w-[75px] mt-18" />
            
                  </div>      <h1 className="text-[25px] mt-6 text-[#ffff] font-bold">
                        {feat.title}
                  </h1>
                  <p className="text-[16px] mt-5 mb-23  text-[#fff]">{feat.desc}</p>
                  </div>
            </div>)}
</div>

    </div>
)
}
export default Sectionc4;