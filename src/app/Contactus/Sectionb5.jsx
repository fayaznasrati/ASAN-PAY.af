import Image from "next/image";
const Sectionb5 = () => {
  return (
    <div className=" xl:px-[100px] px-[20px] pb-[100px] xl:mt-[100px] max-w-screen-2xl 2xl:mx-auto">
      <Image
        src="/Frame 1216401808.jpg"
        className="  mx-auto hidden xl:block"
        width={2200}
        height={400}
        alt="homeImage"
      />
      <Image
        src="/Frame 1216401808.jpg"
        className="mx-auto block xl:hidden"
        width={2200}
        height={400}
        alt="homeImage"
      />
    </div>
  );
};
export default Sectionb5;
