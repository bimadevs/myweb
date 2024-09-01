"use client"
import { FloatingDock } from "@/app/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconBrandFacebook,
  IconBrandInstagram,
  IconPhone,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Lamp } from "@/app/components/ui/lamp";
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from "./components/ui/text-reveal-card";
import { Timeline } from "./components/ui/timeline";
import { CardAnimate } from "./components/ui/card";
import { InfiniteMovingCards } from "./components/ui/infinite-moving-cards";
import { Footer } from "./components/ui/footer";

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
              src="/assets/html.jpg"
              alt="html"
              width={500}
              height={500}
              className="rounded-lg object-fill h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/css.webp"
              alt="css"
              width={500}
              height={500}
              className="rounded-lg object-fill h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/css2.webp"
              alt="css"
              width={500}
              height={500}
              className="rounded-lg object-fill h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/tailwind.jpg"
              alt="tailwind"
              width={500}
              height={500}
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
              src="/assets/deaafrizal.PNG"
              alt="Dea Afrizal"
              width={500}
              height={500}
              className="rounded-lg object-fill h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/wpu.PNG"
              alt="Web Progaming UNPAS"
              width={500}
              height={500}
              className="rounded-lg object-fill h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/CAI.PNG"
              alt="Creative Academy Indonesia"
              width={500}
              height={500}
              className="rounded-lg object-fill h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/pzn.PNG"
              alt="Programmer Zaman Now"
              width={500}
              height={500}
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
              src="/assets/js.jpeg"
              alt="Javascript"
              width={500}
              height={500}
              className="rounded-lg object-fill h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/react.png"
              alt="React JS"
              width={500}
              height={500}
              className="rounded-lg object-fill h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/next.jpg"
              alt="Next JS"
              width={500}
              height={500}
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
              src="/assets/porto1.jpeg"
              alt="porto 1"
              width={500}
              height={500}
              className="rounded-lg object-fill h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/porto2.jpeg"
              alt="Porto 2"
              width={500}
              height={500}
              className="rounded-lg object-fill h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/porto3.jpeg"
              alt="Porto 3"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/porto4.jpeg"
              alt="Porto 4"
              width={500}
              height={500}
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
      <Lamp />
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


      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />

      <Footer />

    </main>
  );
}
