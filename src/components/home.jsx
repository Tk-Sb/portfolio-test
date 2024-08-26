import PhoneAnimation from "./phone";


export default function Home() {
  return (
    <div lang="ar" dir="rtl" className="pl-[25px] pr-[25px] md:pt-[100px]">
        <div className="min-w-[310px] min-h-[132px] ">
          <div className="flex flex-col gap-[10px]">
            <p className="text-[36px] font-bold leading-[44px] md:text-[96px] md:font-bold md:leading-[116px]">
              انقل اسمك 
                <br/>
                  إلى 
                <br/>
                المستوى التالي
            </p>
            <p className="text-[16px] font-[400] leading-[25px] md:text-[32px] md:leading-[40px]">
            دليلك في العالم الرقمي سريع التغير
            <br />
            نساعدك لإثبات حضورك في عالم الإنترنت.
            </p>
          </div>
            <button className="bg-[#143EEA] text-[16px] leading-[19px] font-[400] text-white w-[125px] h-[50px] py-[15px] rounded-[15px] mt-[20px] ml-[15px]">
            تواصل معنا
            </button>
            <button className="text-[#143EEA] bg-[#FBFBFB] bg-opacity-0 text-[16px] leading-[19px] font-[400] w-[125px] h-[50px] py-[15px] rounded-[15px] mt-[20px] border-2 border-[#143EEA]">
              أعمالنا
            </button>
            <PhoneAnimation></PhoneAnimation>
        </div>
    </div>
  )
}
