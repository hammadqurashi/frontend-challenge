import React from "react";
import { format, parseISO } from "date-fns";
import noImg from "../assets/no-photo-available.png";

const NewsCard = ({ news }) => {
  const { author, source, description, publishedAt, title, url, urlToImage } =
    news || {};

  return (
    <a
      href={url}
      target="_blank"
      className="flex flex-col items-center gap-4 h-[400px] "
    >
      <div className="w-full h-[200px]">
        <img
          src={urlToImage || noImg}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xs font-bold ">{source?.name}</p>
        <h3 className="text-secondary text-lg">
          {title?.length > 42 ? `${title?.slice(0, 42)}...` : title}
        </h3>
        <p className="text-sm text-secondary">
          {description?.length > 100
            ? `${description?.slice(0, 100)}...`
            : description}
        </p>
      </div>
      <div className="w-full flex justify-between items-center">
        <span className="text-secondary">
          {author?.includes("https://") || author?.length > 30 ? "" : author}
        </span>
        <span className="text-gray-500">
          {publishedAt ? format(parseISO(publishedAt), "dd/MM/yyyy") : ""}
        </span>
      </div>
    </a>
  );
};

export default NewsCard;
