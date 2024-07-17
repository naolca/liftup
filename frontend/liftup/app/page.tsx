import Image from "next/image";
import LandingPage from "./langingPage/page";
import { Meteors } from "@/components/ui/meteors";


import { Rubik_Mono_One } from '@next/font/google'
import { Roboto, Rubik } from "next/font/google";
import Footer from "@/components/ui/custom/footer";

const rubik_mone_one = Rubik_Mono_One({
  weight: ['400'],
  subsets: ['latin'],
  
});

const roboto = Roboto({
  weight: ['400'],
  subsets: ['latin'],
  
});


export default function Home() {
  return (
    <main className={` ${rubik_mone_one.className} ${roboto.className} min-w-full`}>
     <LandingPage />
     <section id="footer" className="relative bottom-0 h-36">
        <Footer />
      </section>
     <Meteors number={20} />
    </main>
  );
}
