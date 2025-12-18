import Image from "next/image";
const Sectiona5 = () => {
    return(
        <div className=" xl:flex mt-[100px] max-w-screen-2xl mx-auto xl:px-[100px] px-[30px] xl:pb-[100px]  ">
            <div className="xl:w-[50%]"> 
                <h1 className="text-[#383141] 2xl:text-[40px] xl:text-[35px] text-[26px] font-bold xl:mb-[15px] mb-[30px] text-center xl:text-start ">Our mission</h1>
                <p className="text-[#5B5B5B] 2xl:text-[18px] xl:text-[16px] text-[16px] font-normal xl:w-[550px] xl:mb-[40px] text-center xl:text-start ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient lorem purus justo, ultricies. Sollicitudin odio elementum urna placerat lacus, vulputate. Non malesuada viverra et ultrices cras. Tincidunt tempor, blandit augue ac feugiat. Praesent arcu tempus ullamcorper quisque in. Magna fermentum, lacus, fermentum arcu.</p>
                <p className="text-[#5B5B5B] 2xl:text-[18px] xl:text-[16px] text-[16px]  font-normal xl:w-[520px] mb-[70px] text-center xl:text-start ">Vulputate pellentesque proin facilisis dignissim gravida sed faucibus nunc. Nunc eget pharetra, in vitae porta lacus. Elit in nisl, in quis nulla tellus suscipit id. Semper velit odio cras pretium tristique habitant. Elit eu penatibus congue orci turpis. Enim diam id.</p>

                <h1 className="text-[#383141] 2xl:text-[40px] xl:text-[35px] text-[26px] font-bold xl:mb-[15px] mb-[30px] text-center xl:text-start  ">Our Vision</h1>
                <p className="text-[#5B5B5B] 2xl:text-[18px] xl:text-[16px] text-[16px] font-normal xl:w-[550px] xl:mb-[40px] text-center xl:text-start ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient lorem purus justo, ultricies. Sollicitudin odio elementum urna placerat lacus, vulputate. Non malesuada viverra et ultrices cras. Tincidunt tempor, blandit augue ac feugiat. Praesent arcu tempus ullamcorper quisque in. Magna fermentum, lacus, fermentum arcu.</p>
                <p className="text-[#5B5B5B] 2xl:text-[18px] xl:text-[16px] text-[16px] font-normal xl:w-[520px] text-center xl:text-start ">Vulputate pellentesque proin facilisis dignissim gravida sed faucibus nunc. Nunc eget pharetra, in vitae porta lacus. Elit in nisl, in quis nulla tellus suscipit id. Semper velit odio cras pretium tristique habitant. Elit eu penatibus congue orci turpis.</p>
            </div>
            <div className="xl:w-[50%]">
<Image
                                                              src="/planet.png"
                                                              width={2200}
                                                              height={400}
                                                              className=" 2xl:w-[650px] xl:w-[550px] 2xl:h-[650px] xl:h-[550px] mb-[80px] xl:mt-0 mt-[80px] "
                                                              alt="homeImage"
                                                              />
<p className="text-[#5B5B5B] 2xl:text-[18px] xl:text-[16px] font-normal 2xl:w-[550px] xl:w-[450px] text-center xl:text-start  xl:ml-[80px]">Seamlessly manage your money, make secure transactions, 
and enjoy a hassle-free financial experience.</p>
            </div>
        </div>
    )
}
export default Sectiona5;