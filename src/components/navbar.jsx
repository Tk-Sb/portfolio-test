import Link from "next/link";


export default function Navbar() {
  return (
    <nav className="absloute p-[25px] flex justify-between items-center h-[100px] md:bg-[#8B5CF680] md:border-b-[2px] border-black">
        <Link href='#' className="text-[48px] font-bold text-[#F9CE69]">TP</Link>
        <div className="hidden md:flex items-center justify-end gap-[35px] w-[463px] h-[100px]">
        <Link href='#' className="text-[24px] font-[400]">تواصل معنا</Link>
        <Link href='#' className="text-[24px] font-[400]">أدواتنا</Link>
        <Link href='#' className="text-[24px] font-[400]">أعمالنا</Link>
        <Link href='#' className="text-[24px] font-[400]">الرئيسية</Link>
        </div>
    </nav>
  )
}
