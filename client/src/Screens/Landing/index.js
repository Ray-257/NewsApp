import React, { useState,useEffect } from "react";
import SearchBox from "./SearchBox";
import { getLatestNews } from "../../Services/newsService";
import FilterPanel from "./FilterPanel";
import NewsItemList from "./NewsItemList";
import "./index.css";

const langauges = [
  { label: "English", value: "en" },
  { label: "Spanish", value: "es" },
  { label: "Germany", value: "de" },
  { label: "Chinese", value: "zh" },
  { label: "French", value: "fr" },
];

const sortList = [
  { label: "Relevancy", value: "relevancy" },
  { label: "Popularity", value: "popularity" },
  { label: "PublishedAt", value: "publishedAt" },
];

const Landing = () => {
  const [searchKey, setQuery] = useState("");
  const [articles, setArticles] = useState(null);
  const [language, setLanguage] = useState("en");
  const [sortBy, setSortBy] = useState("popularity");
  const [loading, setLoading] = useState(false);
  const getNewsData = () => {
    setLoading(true);
    getLatestNews({
      searchKey: searchKey,
      language,
      sortBy,
    })
      .then(({ data }) => {
        setLoading(false);
        setArticles(data.articles);
      })
      .catch((err) => {
        setLoading(false);
        setArticles([]);
      });
  };
  const search = (e) => {
    e.preventDefault();
    getNewsData();
  };
  useEffect(() => {
    getNewsData();
  }, [sortBy, language]);

  useEffect(() => {
    getNewsData();
  }, []);

  return (
    <>
      <SearchBox
        handleSearch={search}
        searchKey={searchKey}
        setQuery={setQuery}
      />
      <FilterPanel
        langauges={langauges}
        language={language}
        sortBy={sortBy}
        sortList={sortList}
        handleLaguage={setLanguage}
        handleSortBy={setSortBy}
      />
      {loading ? (
        <div> Fetching News ... </div>
      ) : (
        <NewsItemList articles={articles} />
      )}
    </>
  );
};
export default Landing;
