import React from "react";
import NewsItem from "./NewsItem";

const NewsItemList = ({ articles }) => (
  <div className="item-list">
    {!articles ? null : articles.length === 0 ? (
      <p>
        <i>No results</i>
      </p>
    ) : (
      <ul>
        {articles.map((item, i) => (
          <NewsItem key={i} item={item} />
        ))}
      </ul>
    )}
  </div>
);

export default NewsItemList;
