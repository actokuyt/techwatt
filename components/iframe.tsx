interface IframeProps {
  src: string;
  title: string;
  className: string;
}

export default function Iframe({ src, title, className }: IframeProps) {
  return (
    <iframe
      src={src}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className={className}
    ></iframe>
  );
}
