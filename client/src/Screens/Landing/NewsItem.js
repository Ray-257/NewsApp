import React from "react";

const NewsItem = ({ item }) => {
  const formatDate = (s) =>
    new Date(s).toLocaleDateString(undefined, { dateStyle: "long" });
  return (
    <li className="item">
      <h2 className="title">
        <a href={item.url}>{item.title}</a>
      </h2>
      <p className="description">{item.description || ""}</p>
      <div className="meta">
        <span>{formatDate(item.publishedAt)}</span>
      </div>
    </li>
  );
};

export default NewsItem;
