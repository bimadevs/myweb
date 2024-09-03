"use client"
import { FloatingDock } from "@/app/components/ui/floating-dock";
import {
  IconHome,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import Image from "next/image";
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from "./components/ui/text-reveal-card";
import { Timeline } from "./components/ui/timeline";
import { CardAnimate } from "./components/ui/card";
import { InfiniteMovingCards } from "./components/ui/infinite-moving-cards";
import { Footer } from "./components/ui/footer";
import { SparklesCore } from "./components/ui/sparkles";
import { Project } from "./components/ui/project";
import { TextHoverEffect } from "./components/ui/text-hover-effect";


export default function Home() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Facebook",
      icon: (
        <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://facebook.com/bima.jovanta.7",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://instagram.com/biimaa_jo",
    },
    {
      title: "Whatsapp",
      icon: (
        <IconBrandWhatsapp className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://wa.me/6282254044783",
    },
  ];
  const data = [
    // 2021 start
    {
      title: "2021",
      content: (
        <div>
          <p className="text-neutral-300 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Awal saya belajar HTML,CSS dan Framework CSS seperti Tailwind
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/html.webp"
              alt="html"
              width={500}
              height={500}
              loading="lazy"
              className="rounded-lg object-fill h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/css.webp"
              alt="css"
              width={500}
              height={500}
              loading="lazy"
              className="rounded-lg object-fill h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/css2.webp"
              alt="css"
              width={500}
              height={500}
              loading="lazy"
              className="rounded-lg object-fill h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/tailwind.webp"
              alt="tailwind"
              width={500}
              height={500}
              loading="lazy"
              className="rounded-lg object-fill h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    // 2022 start
    {
      title: "2022",
      content: (
        <div>
          <p className="text-neutral-300 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Disini saya sempat berpikir untuk berhenti sejenak karena merasa tidak ada perkembangan.
          </p>
          <p className="text-neutral-300 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            tapi itu tidak menghenti kan saya. Saya terus belajar melalui Youtube Channel, seperti Dea Afrizal, WPU, Creative Academy Indonesia, hingga Programmer Zaman Now
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/deaafrizal.webp"
              alt="Dea Afrizal"
              width={500}
              height={500}
              loading="lazy"
              className="rounded-lg object-fill h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/wpu.webp"
              alt="Web Progaming UNPAS"
              width={500}
              height={500}
              loading="lazy"
              className="rounded-lg object-fill h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/CAI.webp"
              alt="Creative Academy Indonesia"
              width={500}
              height={500}
              loading="lazy"
              className="rounded-lg object-fill h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/pzn.webp"
              alt="Programmer Zaman Now"
              width={500}
              height={500}
              loading="lazy"
              className="rounded-lg object-fill h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    // 2023 start
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-300 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Ditahun ini saya mulai belajar Javascript dan Framework nya walaupun tidak terlalu mahir, karena sempat terhenti.
          </p>
          <div className="grid grid-cols-2 gap-4 justify-center">
            <Image
              src="/assets/js.webp"
              alt="Javascript"
              width={500}
              height={500}
              loading="lazy"
              className="rounded-lg object-fill h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/react.webp"
              alt="React JS"
              width={500}
              height={500}
              loading="lazy"
              className="rounded-lg object-fill h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/next.webp"
              alt="Next JS"
              width={500}
              height={500}
              loading="lazy"
              className="col-span-2 rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-300 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Hingga saat ini saya sudah membuat berbagai macam project
          </p>
          <p className="text-neutral-300 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Sebenarnya masih banyak project keren. Seperti namun hilang foto nya dikarenakan saya simpan di hp dan hp nya rusak
          </p>
          <div className="grid grid-cols-2 gap-4 justify-center">
            <Image
              src="/assets/ImoGen.webp"
              alt="ImoGen"
              width={500}
              height={500}
              loading="lazy"
              className="rounded-lg object-fill h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/magicai.webp"
              alt="MagicAi"
              width={500}
              height={500}
              loading="lazy"
              className="rounded-lg object-fill h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/ImageToUI.webp"
              alt="Image To Code"
              width={500}
              height={500}
              loading="lazy"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/sri.webp"
              alt="Chat Bot"
              width={500}
              height={500}
              loading="lazy"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  const testimonials = [
    {
      quote:
        "Tidak ada orang yang jenius, tanpa pemikiran yang gila",
      name: "Aristoteles",
      title: "",
    },
    {
      quote:
        "Dia yang berbicara dengan baik, tidak mendengar kata kata buruk dari siapa pun",
      name: "Al-Faribi",
      title: "",
    },
    {
      quote: "Semua kebenaran di dunia ini harus melewati tiga langkah. Pertama ditertawakan, kedua ditentang dengan kasar, dan ketiga diterima tanpa pembuktian dan alasan.",
      name: "Arthur Schopenhauer",
      title: "",
    },
    {
      quote:
        "Awal dari kebijaksanaan adalah dengan menaklukkan rasa takut.",
      name: "Bertrand Russel",
      title: "",
    },
    {
      quote:
        "Latar belakang tidak dapat dijadikan alasan untuk tidak mau berusaha dan berjuang",
      name: "BimaDev",
      title: "",
    },
  ];

  return (

    <main className="bg-dark">
      <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
          BimaDev
        </h1>
        <div className="w-[40rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={600}
            className="w-full h-full"
            particleColor="#52d7ff"
            particleSize={500}
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full z-auto bg-red-500">
        <FloatingDock
          items={links}
        />
      </div>
      <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem] rounded-2xl w-full">
        <TextRevealCard
          text="Apa yang kamu lihat!"
          revealText="Berbeda dengan kenyataan"
        >
          <TextRevealCardTitle>
            Sometimes, you just need to see it.
          </TextRevealCardTitle>
          <TextRevealCardDescription>
            This deffrent with else
          </TextRevealCardDescription>
        </TextRevealCard>
      </div>
      <div className="w-full">
        <Timeline data={data} />
      </div>
      <CardAnimate />
      <div className="py-10"></div>
      <div className=" flex items-center justify-center">
        <TextHoverEffect text="My Projects" />
      </div>
      <Project />
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />

      <Footer />

    </main>
  );
}
