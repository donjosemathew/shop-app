import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./collection-overview.style.scss";
import { SelectCollectionsForPreview } from "../../redux/shop/shop.selector";
import CollectionPreview from "../../components/preview-collection/preview-collection.component";
const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: SelectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
