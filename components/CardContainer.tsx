'use client';
import React, { useState, useEffect, useRef } from 'react';
import Card from './Card';
import { PostMetadata } from '@/utils/getMetaData';
import anime from 'animejs';

type CardContainerProps = {
  list: PostMetadata[];
};

const CardContainer: React.FC<CardContainerProps> = ({ list }) => {
  const [inView, setInView] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const sortedProductions = list.sort((a, b) => b.release.getTime() - a.release.getTime());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cardRefs.current.forEach((card, i) => {
              if (card) {
                anime({
                  targets: card,
                  opacity: [0, 1],
                  translateY: [100, 0],
                  duration: 500,
                  easing: 'easeOutQuad',
                  delay: 210 + i * 100,
                });
              }
            });
            setInView(true);
            observer.unobserve(entry.target);
          } else {
            setInView(false);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      setInView(true);
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [sortedProductions]);




  return (
    <div ref={containerRef} className="p-2 pt-0 pb-4 sm:pl-4 sm:pr-4 md:pl-20 md:pr-20 lg:pr-36 lg:pl-36 max-w-full flex flex-col items-center">
      <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 ${inView ? '' : 'invisible'}`}>
        {sortedProductions.map((production, i) => (
          <div
            key={production.slug}
            ref={el => {
              cardRefs.current[i] = el;
            }}
          >
            <Card {...production} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;