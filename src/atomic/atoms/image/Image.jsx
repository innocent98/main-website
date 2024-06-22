const Image = ({ src, alt, width, height, className }) => {
  // dynamic image source URL using the provided source and extension

  return (
    <img
      alt={alt}
      width={width}
      height={height}
      src={src}
      className={className}
    />
  );
};

export default Image;
