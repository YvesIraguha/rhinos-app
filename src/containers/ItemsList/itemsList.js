import React from "react";
import { useQuery } from "@apollo/client";
import fetchAllItems from "../../graphql/queries/getAllItems";
import Item from "../../components/Item";

const ItemsList = () => {
  const { loading, data, error } = useQuery(fetchAllItems, {
    variables: { status: "found" },
  });

  return (
    <div>
      {data?.getAllItems?.map((item) => (
        <Item item={item} key={item.sk} />
      ))}
    </div>
  );
};

export default ItemsList;
