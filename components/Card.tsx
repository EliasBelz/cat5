import { PostMetadata } from '@/utils/getMetaData';
import Link from 'next/link';
import Image from 'next/image';

const Card: React.FC<PostMetadata> = ({ title,  release, poster, slug }) => {
  return (
    <Link href={`/productions/${slug}`}>
      <div className="bg-gradient-to-br from-pink-400 via-purple-500 to-cyan-400 h-full w-80 p-2 rounded-sm shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:from-cyan-400 hover:via-purple-500 hover:to-pink-400 max-w-fit flex flex-col justify-between items-center text-xg font-semibold relative overflow-hidden before:absolute before:inset-0 before:bg-[linear-gradient(115deg,transparent_30%,rgba(255,255,255,0.4)_40%,rgba(255,255,255,0.2)_50%,transparent_70%)] before:z-0 before:animate-shine">
        <Image
          src={poster}
          alt={title}
          height={475}
          width={400}
          className="shadow-lg mb-1 fit-content relative z-10"
        />
        <div className="px-1 w-full border-b-2 border-black flex justify-between items-end relative z-10">
          <p className="text-sm sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-bold flex-grow font-any text-black">
            {title}
          </p>
          <p className="pl-2 text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl font-bold text-end text-black">
            {`${release.getFullYear()}`}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;