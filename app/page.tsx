import Image from "next/image";

import CardContainer from "../components/CardContainer";
import getPosts from "@/utils/getMetaData";
import Featured from "@/components/Featured";

export default async function Home() {
  const productions = await getPosts('productions');
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="pt-20 pb-10 text-5xl font-bolds w-full mx-auto text-center">CAT5 Content</h1>
      <div className='flex flex-col flex-wrap max-w-full mx-auto px-8 lg:px-[20%] pt-4 pb-4'>
        {/* image from pngtree.com */}
        <Image
          src='/sunset.png'
          alt='miami sunset - image from pngtree.com'
          width={470}
          height={470}
          className="mx-auto" />
        <p className="text-md md:text-lg lg:text-lg pt-7 pb-14 text-center">
        Founded by Alexis Garcia in 2024, CAT5 is the storm surge hitting Hollywood with high-voltage action films built for global audiences. From $10M thrillers to $75M blockbusters, we develop, produce, finance, and sell pulse-pounding stories—like A Working Man, our Jason Statham-led debut that opened #1 at the box office. In 2025, we teamed up with Robert Rodriguez to launch Brass Knuckle Films—because one punch is never enough.
        </p>
        <h2 className="text-3xl font-bold ml-auto mr-auto w-max pb-4 text-left">
          Featured
        </h2>
      </div>

      <Featured />
      <h1 className="text-3xl font-bold ml-auto mr-auto w-max pb-4">Productions</h1>
      <CardContainer list={productions} />
  </div>
  );
}