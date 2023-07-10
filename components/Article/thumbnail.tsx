'use client';
import Image from 'next/image';
import { useState } from 'react';

interface ThumbnailProps {
  thumbnail?: {
    caption?: string | null;
    image?: {
      url: string;
    } | null;
  } | null;
}

export default function Thumbnail({ thumbnail }: ThumbnailProps) {
  const [src, setSrc] = useState(thumbnail?.image?.url);

  return (
    <Image
      src={src || ''}
      alt={thumbnail?.caption || ''}
      width={300}
      height={200}
      onError={(e) => setSrc('https://placehold.jp/300x200.png')}
    />
  );
}
