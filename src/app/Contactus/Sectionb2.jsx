import MapCard from "@/components/MapCard";
const Sectionb2 = () => {
  return (
    <div className="xl:flex   mt-[-80px]  xl:border-[#CDCDCD] xl:border-1 xl:px-[100px] py-[80px] gap-5 relative max-w-screen-2xl mx-auto">
      <div className="xl:w-[50%] xl:px-[50px] px-[30px]">
        <div>
          <h1 className="2xl:text-[28px] xl:text-[25px] text-[#000000] font-semibold xl:mt-[0]  mt-[300px] text-[30px] w-full  ">
            Get in Touch with Us
          </h1>
          <p className="text-[#000000] 2xl:text-[16px] xl:text-[14px] xl:mt-[5px] 2xl:w-[400px] xl:w-[350px] text-[16px] w-full  ">
            Get in touch — we’re here to make your AsanPay experience smooth and
            secure.
          </p>
        </div>
        <div className="w-full max-w-xl mx-auto mt-[40px]">
          <form className="space-y-3">
            <div className="xl:grid grid-cols-2 xl:gap-3  ">
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-emerald-400  bg-[#000000]/5"
              />
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-emerald-400  bg-[#000000]/5 xl:mt-[0] mt-[10px] "
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-emerald-400  bg-[#000000]/5 "
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-emerald-400  bg-[#000000]/5 "
            />

            <textarea
              placeholder="Message"
              rows="4"
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-emerald-400  bg-[#000000]/5 "
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 text-white font-medium rounded-md bg-gradient-to-r from-[#2E8C7A] to-[#0C2621]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="xl:w-[50%] py-[20px] xl:px-0 px-[10px] w-full  ">
        <MapCard />
      </div>
    </div>
  );
};
export default Sectionb2;
