import React from "react";

const SiteDevelopedBy = () => {
  return (
    <div className="absolute bottom-2 right-0 flex gap-1 items-center text-[10px] md:text-xs">
      <p>Developed by</p>
      <a
        href="https://hammadqurashi.vercel.app/"
        target="_blank"
        className="text-tertiary font-bold hover:underline"
      >
        Hammad Qurashi
      </a>
    </div>
  );
};

export default SiteDevelopedBy;
