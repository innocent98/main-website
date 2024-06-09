import React from "react";
const Image = ({
  src,
  alt,
  width,
  height,
  className,
  extension = "jpg" || "png" || "jpeg" || "svg",
}) => {
  // dynamic image source URL using the provided source and extension
  const dynamicSrc = `/src/assets/${src}.${extension}`;

  return (
    <img
      alt={alt}
      width={width}
      height={height}
      src={src}
      extension={extension}
      className={className}
    />
  );
};

export default Image;
