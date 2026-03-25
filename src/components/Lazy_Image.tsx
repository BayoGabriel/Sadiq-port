import { useEffect, useId, useState } from "react";

type LazyImageProps = {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  eager?: boolean;
  fetchPriority?: "high" | "low" | "auto";
};

const Lazy_Image = ({
  src,
  alt,
  className,
  wrapperClassName,
  eager = false,
  fetchPriority,
}: LazyImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);
  const id = useId();

  useEffect(() => {
    setLoaded(false);
    setErrored(false);
  }, [src]);

  return (
    <div
      className={`relative overflow-hidden ${wrapperClassName ?? ""}`}
      aria-busy={!loaded && !errored}
      aria-describedby={!loaded && !errored ? id : undefined}
    >
      {!loaded && !errored ? (
        <div
          id={id}
          className="absolute inset-0 bg-[#E8EFF0] animate-pulse"
        />
      ) : null}

      <img
        src={src}
        alt={alt}
        className={`${className ?? ""} ${
          loaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={fetchPriority}
        onLoad={() => setLoaded(true)}
        onError={() => {
          setErrored(true);
          setLoaded(true);
        }}
      />
    </div>
  );
};

export default Lazy_Image;
