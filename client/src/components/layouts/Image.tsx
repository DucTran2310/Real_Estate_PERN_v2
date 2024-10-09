import { useState } from "react";

interface ImageProps {
  src: string;
  fallbackSrc?: string;
  alt?: string;
  className?: string;
}

const Image: React.FC<ImageProps> = ({
  src,
  fallbackSrc,
  alt = "ALT",
  className,
  ...props
}) => {
  const [imageUrl, setImageUrl] = useState(src);

  return (
    <img
      className={className}
      src={imageUrl}
      alt={alt}
      {...props}
      onError={() => setImageUrl(fallbackSrc ?? '')}
    />
  );
};

export default Image;
