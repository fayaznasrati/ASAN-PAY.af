import Image from "next/image";
const Sectiona3 = () => {
    return(
        <div className="  flex w-full max-w-screen-2xl mx-auto 2xl:mt-[750px] xl:mt-[650px] pb-[100px] px-[100px]  ">
            <div className="border-[#E0E0E0] border-r-1 w-[50%]">
                <h1 className="text-[30px]">About Us</h1>
                <p className="text-[#425466] mt-[40px] 2xl:w-[500px] xl:w-[400px]">ASAN-PAY delivers a simple, secure, and fast way to handle everyday payments. Each transaction is smooth and reliable, giving users comfort, confidence, and trust. With a modern design and strong performance, we promise excellence in every click. Our goal is to make digital payments effortless, safe, and enjoyable for everyone.</p>
                <button className=" rounded-2x2 rounded-[4px] w-[150px] h-[50px] bg-linear-to-r from-[#2E8C7A] to-[#135347] 2xl:mt-[40px] xl:mt-[30px]   text-[#FAFAFA] text-[16px]">Learn More</button>
            </div>
            <div className="border-[#E0E0E0] border-l-1 w-[50%] grid grid-cols-2 2xl:gap-7 xl:gap-1 px-[50px] ">
                <div className=" rounded-2x2  2xl:w-full xl:w-[170px] 2xl:h-[170px] xl:h-[150px]   justify-center items-center content-center text-center text-[#FFFFFF] bg-linear-to-b from-[#1A4E44] to-[#38BBA2] shadow-2xl ">
                    <h1 className="2xl:text-[40px] xl:text-[35px] font-medium ">1000+</h1>
                    <p className="2xl:text-[16px] xl:text-[14px] font-normal"> Active Users</p>
                </div>
                                <div className=" rounded-2x2 bg-[#E0E0E0] 2xl:w-full xl:w-[170px] 2xl:h-[170px] xl:h-[150px]  justify-center items-center content-center text-center hover:text-[#FFFFFF] hover:bg-linear-to-b from-[#1A4E44] to-[#38BBA2] hover:shadow-2xl ">
                    <h1 className="2xl:text-[40px] xl:text-[35px] font-medium ">500K+</h1>
                    <p className="2xl:text-[16px] xl:text-[14px] font-normal 2xl:w-full xl:w-[120px] m-auto"> Secure Transactions</p>
                </div>
                <div className=" rounded-2x2 bg-[#E0E0E0] 2xl:w-full xl:w-[170px] 2xl:h-[170px] xl:h-[150px]   justify-center items-center content-center text-center hover:text-[#FFFFFF] hover:bg-linear-to-b from-[#1A4E44] to-[#38BBA2] hover:shadow-2xl ">
                    <h1 className="xl:text-[35px] 2xl:text-[40px] font-medium ">100+</h1>
                    <p className="xl:text-[14px] 2xl:text-[16px] font-normal"> Partner Merchants </p>
                </div>
                 <div className=" rounded-2x2 bg-[#E0E0E0] 2xl:w-full xl:w-[170px] 2xl:h-[170px] xl:h-[150px]   justify-center items-center content-center text-center hover:text-[#FFFFFF] hover:bg-linear-to-b from-[#1A4E44] to-[#38BBA2] hover:shadow-2xl ">
                    <h1 className="xl:text-[35px] 2xl:text-[40px] font-medium ">500+</h1>
                    <p className="xl:text-[14px] 2xl:text-[16px] font-normal 2xl:w-full xl:w-[80px] m-auto"> Happy
Clients </p>
                </div>
            </div>
        </div>
    )
}
export default Sectiona3;