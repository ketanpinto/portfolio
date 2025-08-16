// app/colleges/page.tsx

"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import InfiniteMenu from "@/components/InfiniteMenu";

const items = [
  // {
  //   image: '/meehe.jpg',
  //   link: 'https://google.com/',
  //   title: 'Lumiere Mirror',
  //   description: 'Your daily personal sidekick.'
  // },
  // {
  //   image: '/meehe.jpg',
  //   link: 'https://google.com/',
  //   title: 'City Lights',
  //   description: 'The vibrant life of the city.'
  // },
  // {
  //   image: '/meehe.jpg',
  //   link: 'https://google.com/',
  //   title: 'Ocean View',
  //   description: 'Calm waves and a vast horizon.'
  // },
  // {
  //   image: '/meehe.jpg',
  //   link: 'https://google.com/',
  //   title: 'Mountain Peak',
  //   description: 'The world from above the clouds.'
  // },
  {
    image: '/projectlumiere.png',
    link: 'https://google.com/',
    title: <>Lumiere <br /> Mirror</>, 
    description: 'Your daily personal sidekick.'
  },
  {
    image: '/hardtest.png',
    link: 'https://google.com/',
    title: <>Website <br />Development</>,
    description: 'Designed, developed and deployed for a client.'
  }
];

export default function CollegesPage() {
  return (
    // Switched from Flexbox to CSS Grid for a more robust layout
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-black">
      <Header />

      {/* This <main> tag now perfectly fills the '1fr' grid area */}
      <main className="relative">
        <InfiniteMenu items={items} />

        <div className="absolute bottom-6 right-7 text-right animate-pulse pointer-events-none">
          <p className="text-lg font-medium text-neutral-400">
            Hold and drag to explore
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}