import React from "react";
import { SelectCollections } from "../../redux/shop/shop.selector";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../../components/preview-collection/preview-collection.component";
const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...OtherCollectionProps }) => (
      <CollectionPreview key={id} {...OtherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: SelectCollections,
});
export default connect(mapStateToProps)(ShopPage);
