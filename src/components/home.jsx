import PhoneAnimation from "./phone";


export default function Home() {
  return (
    <div lang="ar" dir="rtl" className="px-[25px] md:px-[50px] md:pt-[75px] md:flex justify-between w-screen">
          <div>
          <div className="flex flex-col gap-[10px] md:gap-[15px] md:w-[336px] md:h-[269px]">
            <p className="text-[36px] font-bold leading-[44px] md:text-[48px] md:leading-[58px]">
              انقل اسمك 
                <br/>
                  إلى 
                <br/>
                المستوى التالي
            </p>
            <p className="text-[16px] font-[400] leading-[25px] md:text-[20px] md:leading-[40px]">
            دليلك في العالم الرقمي سريع التغير
            <br />
            نساعدك لإثبات حضورك في عالم الإنترنت.
            </p>
          </div>
          <div className="md:flex md:flex-col md:gap-[15px] text-center text-[16px] leading-[19px] font-[400] mt-[28px] md:text-[20px] md:leading-[24px]">
            <button className="bg-[#143EEA]  text-white w-[125px] h-[50px] md:w-[335px] rounded-[15px] ml-[15px]">
            تواصل معنا
            </button>
            <button className="text-[#143EEA] bg-[#FBFBFB] bg-opacity-0 w-[125px] h-[50px] md:w-[335px] rounded-[15px] border-2 border-[#143EEA]">
              أعمالنا
            </button>
          </div>
          </div>

              <div className="relative -right-5 md:static md:ml-[256px]">
                <PhoneAnimation></PhoneAnimation>
              </div>

            
        </div>
    
  )
}
