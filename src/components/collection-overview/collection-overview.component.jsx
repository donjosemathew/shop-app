import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./collection-overview.style.scss";
import { SelectCollections } from "../../redux/shop/shop.selector";
import CollectionPreview from "../../components/preview-collection/preview-collection.component";
const CollectionOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...OtherCollectionProps }) => (
      <CollectionPreview key={id} {...OtherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: SelectCollections,
});

export default connect(mapStateToProps)(CollectionOverview);
