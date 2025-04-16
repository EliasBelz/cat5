"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import CoverFlow from './CoverFlow';

export interface FeaturedVideo {
  trailer: string; // must be youtube embed link
  description: string;
}

const getBoundedIndex = (index: number) => {
  const len = features.length;
  return ((index % len) + len) % len;
};

export interface FeaturedContent {
  link?: {
    img: string;
    alt: string;
    ref: string;
  },
  trailer?: {
    src: string;
  }
  description: string;
}


const features: FeaturedContent[] = [
  {
    trailer: {
      src: 'https://www.youtube.com/embed/7PLCi1mG1n0?si=RsLFkxmEOYVMduwr',
    },
    description:'Nonnas - Coming to Netflix on May 9 Starring: Vince Vaughn, Lorraine Bracco, Talia Shire'
  },
  {
    trailer: {
      src: 'https://www.youtube.com/embed/zTbgNC42Ops?si=ffmVtoSz_RkWMlv_',
    },
    description:'In theaters now — A Working Man explodes onto the screen with Jason Statham leading a brutal rescue mission through the heart of a deadly trafficking ring. From director David Ayer and co-writer Sylvester Stallone, this action-packed thriller delivers bone-crushing fights, high-stakes vengeance, and non-stop intensity. When ex-Royal Marine Levon Cade goes to war to save a kidnapped girl, nothing will stand in his way. Don’t miss the most relentless action film of the year — A Working Man is pure, unfiltered mayhem.'
  },
  {
    link: {
      img: 'https://deadline.com/wp-content/uploads/2025/03/SNOW-WHITE-A-WORKING-MAN.jpg',
      alt: 'working man',
      ref: 'https://deadline.com/2025/03/box-office-snow-white-princess-mononoke-jenna-ortega-death-of-a-unicorn-1236353369/',
    },
    description: "Jason Statham’s ‘Working Man’ With $15M+ Opening Puts ‘Snow White’ To Sleep & Sends Jenna Ortega’s ‘Unicorn’ Out To Pasture – Sunday Box Office Update"

  },
  {
    link: {
      img: 'https://deadline.com/wp-content/uploads/2024/05/Alexis-Garcia_2a6c79.jpg',
      alt: 'Cat 5 launch',
      ref: 'https://deadline.com/2024/05/alexis-garcia-launches-film-label-cat5-fifth-season-backed-action-film-label-co-finances-david-ayer-jason-statham-film-a-working-man-black-bear-1235902876/',
    },
    description: "Alexis Garcia Launches CAT5; Fifth Season-Backed Action Film Label Co-Finances David Ayer-Jason Statham Film ‘A Working Man’ With Black Bear"
  }

]


const Featured: React.FC = () => {
  const [featureIndex, setFeatureIndex] = useState(0);

  const handleSlideChange = (index: number) => {
    setFeatureIndex(getBoundedIndex(index));
  };

  const videos = features.map((feature, index) => {
    const {trailer, link} = feature;


    return (
        <div className="w-full max-w-[75vw] min-w-72 mx-auto flex-grow-1 relative aspect-video" key={`feature-${index}`}>
          {
            trailer ?
              <iframe
                src={trailer.src}
                title="YouTube video player"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
              :
          <a href={link?.ref} target="_blank" rel="noopener noreferrer" className="absolute top-0 left-0 w-full h-full">
            <Image
              src={link?.img || ""}
              alt={link?.alt || ""}
              fill
              className="object-contain"
              sizes="75vw"
              priority
            />
          </a>
          }
        </div>
    )
  }
  );

  return (
    <div className='max-w-full mx-auto'>
      <div className='max-w-[2000px] h-full mx-auto px-4 lg:px-[5%]'>
        <CoverFlow slides={videos} onSlideChange={handleSlideChange}></CoverFlow>
      </div>
      <div className='py-4 md:py-6 lg:py-10 w-full px-8 md:px-16 lg:px-[15%] min-h-44 glow-pink-blue'>
        <p className="w-full text-md md:tex-lg lg:text-lg whitespace-pre-wrap text-center">
          {features[featureIndex].description}
        </p>
        {features[featureIndex].link?.ref && (
          <div className="flex justify-center mt-4">
            <a
              href={features[featureIndex].link?.ref}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 font-goldman bg-foreground rounded hover:bg-pink-600 transition-colors"
            >
              View More
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Featured;