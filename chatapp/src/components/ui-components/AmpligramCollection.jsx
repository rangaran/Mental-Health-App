/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { SortDirection } from "@aws-amplify/datastore";
import { Post } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import Ampligram from "./Ampligram";
import { Collection } from "@aws-amplify/ui-react";
export default function AmpligramCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsPagination = {
    sort: (s) => s.createdAt(SortDirection.DESCENDING),
  };
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Post,
    pagination: itemsPagination,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="list"
      direction="column"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "AmpligramCollection")}
    >
      {(item, index) => (
        <Ampligram
          post={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></Ampligram>
      )}
    </Collection>
  );
}
