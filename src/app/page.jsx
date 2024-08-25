import Background from "@/components/background"
import MenuBtn from "@/components/menu-btn"
import Example from "@/components/phone"

export default function Home() {
    
    return (
        <>
           <div class="snap-y snap-mandatory overflow-y-scroll h-screen overflow-x-hidden">
                <section class="snap-start h-screen">
                    <Background></Background>
                    
                </section>
                <section class="snap-start h-screen">
                    <Background></Background>

                </section>
                <section class="snap-start h-screen">Section 3</section>
            </div>
        </>
    )
}
