import React from "react";

const BackgroundVideo = () => {
  return (
    <video
      src="/Code-Climate-Homepage-Hero-2xl.webm"
      autoPlay
      muted
      loop
      playsInline
      className="fixed inset-0 object-cover w-full h-full z-[-1]"
    >
      <source
        src="/Code-Climate-Homepage-Hero-2400-x-1020.webm"
        type="video/webm"
      />
      {/* Agrega más fuentes de video si es necesario (por ejemplo, WebM) */}
    </video>
  );
};

export { BackgroundVideo };
