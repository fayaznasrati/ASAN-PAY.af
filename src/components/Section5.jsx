import Link from "next/link";
const Section5 = () => {
    return (

 
    <div className="relative max-w-screen-2xl px-5 mx-auto pl-[80px] pr-[80px] hidden xl:block">
        <img src="Rectangle 3.png" className="   mt-[200px]  " alt="Rectangle" />
        <div className="absolute top-[-140px] pl-[10px] pr-[90px] flex">
            <div className="w-[60%]">
                <img src="computer.png" className="w-[700px]  " alt="computer" />
            </div>
            <div className="mt-[200px] w-[35%] ">
            <h1 className="text-[40px] font-medium text-[#FFFFFF]">Maximize Insights
                Grow Wealth </h1>
            <p className="text-[16px] font-medium text-[#E3E3E3] mt-[20px]">Upgrade Your Investment Strategy Today! Track Assets, 
Forecast Trends, and Make Smarter Moves With Our
Powered Dashboard.</p>

<Link href="/Contactus"><button className="rounded-[9px] bg-[#FFFFFF80]/50 py-2 px-3 items-center w-[170px] mt-[20px] cursor-pointer font-medium text-[16px] text-[#FFFFFF]">Start Your Journy</button></Link>

            </div>
        </div>

    </div>   )
}

export default Section5;