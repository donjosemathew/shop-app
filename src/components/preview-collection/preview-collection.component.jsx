import React from "react";
import CollectionItem from "../preview-item/preview-item.component";
import "./preview-collection.style.scss";
const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...itemprops }) => (
          <CollectionItem key={id} {...itemprops} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;