"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useRef } from "react";
import { Great_Vibes, Playfair_Display, Italiana, Oswald } from "next/font/google";
import Image from "next/image";
import { FaFacebookF, FaLongArrowAltRight } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "./footer";

const vibes = Great_Vibes({ subsets: ["latin"], weight: ["400"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["900"] });
const italiana = Italiana({ subsets: ["latin"], weight: ["400"] });
const oswald = Oswald({ subsets: ["latin"], weight: ["400"] });

export default function Main() {
  const imageRef = useRef(null);
  const [isClient, setIsClient] = React.useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    // Wait for images to load before initializing animations
    const initAnimations = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".main",
          start: "0% 95%",
          end: "80% 90%",
          scrub: true,
        },
      });
      tl.to(".image", { top: "145%", ease: "none", rotate: "360deg" });

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".about",
          start: "10% 95%",
          end: "80% 80%",
          scrub: true,
        },
      });
      tl2.to(".image", { top: "290%", ease: "none", rotate: "360deg" });

      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: ".cans",
          start: "10% 95%",
          end: "80% 60%",
          scrub: true,
        },
      });
      tl3.to(".image", { left: "50%", top: "360%", width: "10%", ease: "none" });

      // Refresh ScrollTrigger after initialization
      ScrollTrigger.refresh();
    };

    // Delay animation initialization to ensure DOM is ready
    const timer = setTimeout(() => {
      initAnimations();
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isClient]);

  return (
    <main className="bg-yellow-100 relative">
      <div className="hidden md:fixed md:flex flex-col space-y-6 right-4 top-1/2 z-10">
        <a
          className="cursor-pointer"
          href="https://www.instagram.com/alcoholic_kurochan?igsh=YmJyYzg1Nzd3OWs5"
        >
          <FaFacebookF />
        </a>
        <a
          className="cursor-pointer"
          href="https://www.instagram.com/alcoholic_kurochan?igsh=YmJyYzg1Nzd3OWs5"
        >
          <CiInstagram />
        </a>
      </div>

      {/* Hero section */}
      <section className="relative hero">
        {/* header */}
        <div className="p-4 md:p-10 flex items-center justify-between">
          <h1 className={`${vibes.className} text-xl md:text-2xl text-ring`}>Noir & Or</h1>
            <a href="https://www.instagram.com/alcoholic_kurochan?igsh=YmJyYzg1Nzd3OWs5">
                <Button className="text-xs md:text-base">visite <FaLongArrowAltRight /></Button>
            </a> 
        </div>

        <div className="ml-2 md:ml-5 w-1 min-h-[200px] md:min-h-[400px] bg-primary"></div>

        <h1
          className={`${playfair.className} absolute text-destructive text-2xl sm:text-4xl md:text-5xl lg:text-7xl text-center font-extrabold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase px-4`}
        >
          la Boisson illimitée
        </h1>

        <Image
          className="hidden md:block absolute top-44 left-1/3 ml-6"
          src="/images/stamp.png"
          alt="Stamp image"
          width={100}
          height={50}
        />
        <Image
          className="hidden lg:block absolute top-20 left-1/6"
          src="/images/grapes.png"
          alt="Grapes image"
          width={150}
          height={150}
        />
        <Image
          className="hidden lg:block absolute top-3/4 left-24 -translate-y-1/2 -rotate-30 w-48 lg:w-auto"
          src="/images/water.png"
          alt="Hero image"
          width={350}
          height={450}
        />
        <Image
          ref={imageRef}
          className="image absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-15 w-32 sm:w-40 md:w-52 lg:w-auto"
          src="/images/can 4.png"
          alt="Hero image"
          width={250}
          height={350}
          priority
        />
        <Image
          className="hidden lg:block absolute top-1/2 right-40 -translate-y-1/2 -rotate-30"
          src="/images/leaves.png"
          alt="Hero image"
          width={250}
          height={350}
        />
      </section>

      {/* Main section */}
      <section className="main p-4 md:p-10 flex flex-col lg:flex-row justify-between items-center gap-8 bg-white">
        {/* Left box */}
        <div className="w-full lg:w-96 min-h-auto lg:h-96 p-4 md:p-8 space-y-4">
          <h2 className={`${vibes.className} font-semibold text-xl md:text-2xl`}>Qui sommes-nous?</h2>
          <h1 className={`${playfair.className} font-extrabold text-3xl md:text-4xl lg:text-5xl`}>
            Les meilleurs boissons alcoolisées
          </h1>
          <p className={`${italiana.className} font-bold text-base md:text-lg`}>
            Notre entreprise incarne l'élégance et la passion, offrant des boissons raffinées qui
            éveillent les sens et célèbrent l'art de vivre.
          </p>
          <a href="https://www.instagram.com/alcoholic_kurochan?igsh=YmJyYzg1Nzd3OWs5">
             <Button>visite <FaLongArrowAltRight /></Button>
          </a>
        </div>

        {/* Right box */}
        <div className="p-4 md:p-5 w-full lg:w-96 min-h-auto lg:h-96 space-y-4 border-foreground border-y-2 border-l-2">
          <div className="space-y-4">
            <h3 className={`${playfair.className} text-primary text-xl md:text-2xl`}>La Alcool</h3>
            <h4 className="border-b-2 text-sm md:text-base">Chaque détail compte</h4>
            <div className="flex items-center gap-4">
              <h2 className={`${playfair.className} font-bold text-4xl md:text-5xl text-chart-2`}>6.02%</h2>
              <p className="text-xs md:text-sm text-ring">Pur, raffiné, équilibré, notre alcool révèle.</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`${playfair.className} text-primary text-xl md:text-2xl`}>La Eau</h3>
            <h4 className="border-b-2 text-sm md:text-base">Chaque détail compte</h4>
            <div className="flex items-center gap-4">
              <h2 className={`${playfair.className} font-bold text-4xl md:text-5xl text-chart-2`}>51.1%</h2>
              <p className="text-xs md:text-sm text-ring">
                Une eau cristalline, filtrée naturellement, qui sublime le goût.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="about p-4 md:p-10 relative">
        <div className="absolute left-2 ml-2 md:ml-5 w-1 min-h-[400px] md:min-h-[600px] bg-primary"></div>
        <h1
          className={`tracking-widest font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-[100px] text-destructive text-center`}
        >
          SIllAGE
        </h1>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mt-8">
          {/* Left box */}
          <div className="space-y-4 ml-0 lg:ml-4 w-full lg:w-auto">
            <Image
              src="/images/cans.jpg"
              className="rounded-2xl w-full lg:w-auto"
              alt="Cans image"
              width={400}
              height={200}
            />
            <h2
              className={`${playfair.className} max-w-full lg:max-w-96 text-muted-foreground text-lg md:text-xl lg:text-2xl`}
            >
              Découvrez dès maintenant nos créations les plus récentes, raffinées et exclusives — le
              luxe à portée de main.
            </h2>
          </div>

          {/* Right box */}
          <div className="space-y-4 w-full lg:w-auto">
            <p className={`${oswald.className} max-w-full lg:max-w-96 text-muted-foreground text-lg md:text-xl lg:text-2xl`}>
              Élaboré avec passion, précision et savoir-faire artisanal incomparable.
            </p>
            <h3 className={`${playfair.className} font-bold text-muted-foreground text-xl md:text-2xl`}>
              Comment?
            </h3>
            <p className={`${oswald.className} max-w-full lg:max-w-96 text-muted-foreground text-lg md:text-xl lg:text-2xl`}>
              Comment nos boissons sont créées : chaque étape suit un processus méticuleux,
              combinant ingrédients naturels, fermentation maîtrisée, distillation fine et contrôle
              qualité pour une saveur parfaite.
            </p>
          </div>
        </div>
      </section>

      {/* Collection section */}
      <section className="cans p-4 md:p-10 bg-white">
        <h4 className={`${italiana.className} text-muted-foreground text-center text-sm md:text-base`}>Statistiques</h4>
        <h2 className={`${vibes.className} mt-4 text-ring text-xl md:text-2xl text-center`}>
          Produits les plus vendus
        </h2>

        {/* Products */}
        <div className="w-full max-w-7xl mx-auto flex flex-wrap md:flex-nowrap items-center justify-center gap-4 md:gap-2 mt-8">
          <div className="flex flex-col items-center">
            <Image src="/images/can 1.png" alt="Can 2" width={150} height={150} className="w-24 md:w-32 lg:w-auto" />
            <h3
              className={`${vibes.className} text-muted-foreground text-center text-lg md:text-xl lg:text-2xl`}
            >
              Vin rouge
            </h3>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/can 2.png" alt="Can 4" width={120} height={150} className="w-20 md:w-28 lg:w-auto" />
            <h3
              className={`${vibes.className} text-muted-foreground text-center text-lg md:text-xl lg:text-2xl`}
            >
              Champagne
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3
              className={`${vibes.className} mt-0 md:mt-20 text-muted-foreground text-center text-lg md:text-xl lg:text-2xl`}
            >
              Absinthe
            </h3>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/can 3.png" alt="Can 2" width={120} height={150} className="w-20 md:w-28 lg:w-auto" />
            <h3
              className={`${vibes.className} text-muted-foreground text-center text-lg md:text-xl lg:text-2xl`}
            >
              Liqueur
            </h3>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/can 5.png" alt="Can 2" width={150} height={150} className="w-24 md:w-32 lg:w-auto" />
            <h3
              className={`${vibes.className} text-muted-foreground text-center text-lg md:text-xl lg:text-2xl`}
            >
              Cocktail
            </h3>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

