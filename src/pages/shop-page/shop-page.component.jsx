import React from "react";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route path={`${match.path}`} component={CollectionOverview}></Route>
    <Route
      exact
      path={`${match.path}/:collectionId`}
      component={CollectionPage}
    ></Route>
  </div>
);

export default ShopPage;
