import Background from "@/components/background"
import MenuBtn from "@/components/menu-btn"
import Example from "@/components/phone"
import Home from "@/components/home"
import Card from "@/components/card"
import OurTools from "@/components/ourTools"

export default function App() {
    
    return (
        <>
            <div lang="ar" dir="rtl" className="h-screen">
                <section className="h-screen flex">
                    <Home/>
                </section>
                <section className="h-screen flex">
                    <OurTools></OurTools>
                </section>

            </div>
        </>
    )
}
