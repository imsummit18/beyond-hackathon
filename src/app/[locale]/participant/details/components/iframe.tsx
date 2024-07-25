import React from 'react';

const Iframe = ({ file, title }: { file: any; title: string }) => {
  return (
    <iframe
      width='100%'
      height='100%'
      src={`https://www.youtube.com/embed/${file}`}
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
      title={title}
    />
  );
};

export default Iframe;
