'use client';

import { getPost, PostMetadata } from '@/utils/getMetaData';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type SplashImageProps = {
  slug?: string;
}

const SplashImage: React.FC<SplashImageProps> = ({ slug }) => {
  const [post, setPost] = useState<PostMetadata | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) {
        setLoading(false);
        return;
      }

      try {
        const postData = await getPost(slug);
        console.log(slug, postData, "postData");
        setPost(postData);
      } catch (error) {
        console.error('Failed to fetch post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return null;
  }

  return (
    <Image
      src={post?.logo || '/cat5-logo.svg'}
      id='splash-img'
      alt='Cat5 Content logo'
      width={600}
      height={600}
      priority
    />
  );
};

export default SplashImage;