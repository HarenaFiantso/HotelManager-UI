"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Card, Carousel } from "@/components/ui";

export const Hero = () => {
  const cards = data.map((card, index) => <Card key={card.src} card={card} index={index} />);

  return (
    <div className="h-full w-full py-20">
      <h2 className="mx-auto mb-5 max-w-7xl text-xl font-bold text-neutral-800 md:text-5xl dark:text-neutral-200">
        {"The modern hotel experience platform".split(" ").map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
            className="mr-2 inline-block"
          >
            {word}
          </motion.span>
        ))}
      </h2>
      <motion.p
        className="mx-auto max-w-7xl text-neutral-800 dark:text-neutral-200"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
          delay: 0.8,
        }}
      >
        Hotel Manager powers future-ready hotels with a fully integrated suite of tools. Designed to
        drive revenue and efficiency.
      </motion.p>
      <Carousel items={cards} />
    </div>
  );
};

const DummyContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="mb-4 rounded-3xl bg-[#F5F5F7] p-8 md:p-14 dark:bg-neutral-800"
          >
            <p className="md:text-md mx-auto mb-8 max-w-3xl font-sans text-base text-neutral-600 dark:text-neutral-400">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolores doloremque
                eveniet.
              </span>{" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt itaque placeat
              labore rem aperiam magnam molestiae eligendi, ipsa dolorum error fugiat molestias quod
              ut impedit adipisci sunt, earum officia? Corrupti.
            </p>
            <Image
              src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG1hY2Jvb2slMjBtb2NrdXAlMjBhcHAlMjB1aXxlbnwwfHx8fDE2ODQ3NzE5NTg&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="mx-auto h-full w-full rounded-4xl object-contain md:h-1/2 md:w-1/3"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Trending destination",
    title: "Most popular choices for travelers from Madagascar.",
    src: "https://madagascar-tourisme.com/wp-content/uploads/2017/04/33901965473_9d923c2042_k-1024x683.jpg",
    content: <DummyContent />,
  },
  {
    category: "Explore Madagascar",
    title: "These popular destinations have a lot to offer.",
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/602558633.jpg?k=4c8f851ed232b47ef53259b4df4d88e6174ebd817a81d4ebc77b4609e0e5c0db&o=&hp=1",
    content: <DummyContent />,
  },
  {
    category: "Quick and easy trip.",
    title: "Pick a vibe and explore the top destinations in Madagascar.",
    src: "https://content.r9cdn.net/rimg/dimg/94/79/55517153-city-53678-168a07fb81b.jpg?crop=true&width=1366&height=768&xhint=2372&yhint=1242",
    content: <DummyContent />,
  },

  {
    category: "Stay at our top unique properties",
    title: "From castles and villas to boats and igloos, we have it all.",
    src: "https://www.myluxoria.com/storage/app/uploads/public/630/77d/1e4/63077d1e4e7a2970728706.jpg",
    content: <DummyContent />,
  },
  {
    category: "Deals for the weekend",
    title: "Save on stays for April 18 - April 20.",
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/567483368.jpg?k=b2ba3a8208b07eddb47570ce23a02d04143b34e056d5e6f03707f5ce10d860ec&o=&hp=1",
    content: <DummyContent />,
  },
];
