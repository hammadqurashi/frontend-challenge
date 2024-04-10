import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useInfiniteQuery } from "@tanstack/react-query";
import { parse } from "search-params";

import { getNews } from "../lib/fetch";

// components
import Heading from "../components/Heading";
import CategoryRow from "../components/CategoryRow";
import NewsCard from "../components/NewsCard";
import ShowMore from "../components/ShowMore";
import Search from "../components/inputs/Search";
import PageSpinner from "../components/PageSpinner";
import SiteDevelopedBy from "../components/SiteDevelopedBy";

const LatestNews = () => {
  const location = useLocation();
  const [filters, setFilters] = useState({
    category: "general",
    searchIn: "",
    from: "",
    to: "",
  });

  useEffect(() => {
    if (location?.search) {
      const parsedSearchParams = parse(location?.search?.slice(1), {
        booleanFormat: "unicode",
        arrayFormat: "brackets",
      });
      setFilters(parsedSearchParams);
    }
  }, [location]);

  return (
    <section className="relative container mx-auto p-8 md:px-0 md:py-10 ">
      <Heading text={"Latest News"} />
      <div className="flex flex-col md:flex-row md:items-center md:justify-between my-5">
        <CategoryRow filters={filters} />
        <Search filters={filters} />
      </div>
      <NewsRow filters={filters} setFilters={setFilters} />
      <SiteDevelopedBy />
    </section>
  );
};

const NewsRow = ({ filters }) => {
  const { fetchNextPage, hasNextPage, data, isFetching, isLoading, error } =
    useInfiniteQuery({
      queryKey: ["news", filters],
      queryFn: ({ pageParam = 1 }) => getNews(pageParam, filters),
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = lastPage?.articles?.length
          ? allPages?.length + 1
          : undefined;
        return nextPage;
      },
      initialPageParam: 1,
    });

  if (isLoading) {
    return <PageSpinner />;
  }

  if (error) {
    return <p>Error</p>;
  }

  const showingResults = data?.pages?.reduce((total, currentPage) => {
    return total + currentPage?.articles?.length;
  }, 0);

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-7">
        {data?.pages?.map((page, index) =>
          page?.articles?.map((news, subIndex) => (
            <NewsCard news={news} key={subIndex} />
          ))
        )}
      </div>
      <ShowMore
        totalResults={data?.pages?.[0]?.totalResults}
        showingResults={showingResults || 0}
        btnDisable={isFetching || !hasNextPage}
        isFetching={isFetching}
        handleShowMore={fetchNextPage}
      />
    </div>
  );
};

export default LatestNews;
