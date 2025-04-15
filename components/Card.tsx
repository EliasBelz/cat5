import { PostMetadata } from '@/utils/getMetaData';
import Link from 'next/link';
import Image from 'next/image';

const Card: React.FC<PostMetadata> = ({ title,  release, poster, slug }) => {
  return (
    <Link href={`/productions/${slug}`}>
      <div className="bg-cyan-200 h-full w-80 p-1 lg:p-2 pb-2 lg:pb-2 rounded-sm shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl max-w-fit flex flex-col justify-between items-center text-xg font-semibold">
        <Image
          src={poster}
          alt={title}
          height={475}
          width={400}
          className="shadow-lg mb-1 fit-content"
        />
        <div className="px-1 w-full border-b-2 border-black flex justify-between items-end ">
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