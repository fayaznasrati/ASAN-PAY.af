import Image from "next/image";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";
const Section10 = () => {
    return (
        <div>
             <div className="px-[80px] max-w-screen-2xl mx-auto hidden xl:block  py-[100px]  xl:mt-[-100px]">
                        <div className=" relative">
                            <Image
                                                          src="/bg-wrapper.svg"
                                                          width={2200}
                                                          height={400}
                                                          alt="homeImage"
                                                          />
        <div className="flex absolute 2xl:top-[62px] xl:top-[25px]  px-[40px] gap-20">

            <div>
                <h1 className="text-[35px] font-medium text-[#FEFEFD] w-[400px]">Enhance your business 
potential by partnering 
with us.</h1>
<p className="text[16px] text-[#FFFFFFCC]/80 w-[650px] font-medium pt-[10px]">Register today and access a wide range of fantastic features, including easy transactions, quick payments, and efficient financial management.</p>
    <div className="flex pt-[25px] gap-3">
   
<button className=" cursor-pointer bg-[#D9D9D926] border-[#FFFFFF80] gap-2 blur-[4] border rounded-[8px] flex h-[60px] items-center w-[200px] justify-center "><BiLogoPlayStore  className="w-[40px] text-[#fff]  h-[40px]" />
<p className="text-[12px] flex flex-col justify-items-start items-baseline text-[#fff]">
    Get it on <span className="text-[14px]">Google play</span>
</p>
</button>
<button className=" cursor-pointer bg-[#D9D9D926] border-[#FFFFFF80] gap-2 blur-[4] border rounded-[8px] flex h-[60px] items-center w-[200px] justify-center "><FaApple  className="w-[40px] text-[#fff]  h-[40px]" />
<p className="text-[12px] flex flex-col justify-items-start items-baseline text-[#fff]">
    Get it on <span className="text-[14px]">App store</span>
</p>
</button>

</div>

            </div>

            <div >
                                <Image
                                                          src="/NEQ! copy 1 (1).png"
                                                          width={2200}
                                                          height={400}
                                                          className="xl:w-[350px] 2xl:w-[450px] absolute 2xl:top-[-121px] xl:top-[-60px] left-[620px]"
                                                          alt="homeImage"
                                                          />
                                 <Image
                                                          src="/RectangleNEW copy 1 (2).png"
                                                          width={2200}
                                                          height={400}
                                                          className="xl:w-[300px] 2xl:w-[400px] 2xl:top-[-146px] absolute xl:top-[-65px] 2xl:left-[835px] xl:left-[785px]"
                                                          alt="homeImage"
                                                          />
            </div>

        </div>
        </div>
    </div>
    </div>
    )
}
export default Section10;