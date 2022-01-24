import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import fetchAllItems from "../../graphql/queries/getAllItems";
import Item from "../../components/Item";
import RecordItemForm from "../../components/RecordItemForm";
import ADD_ITEM from "../../graphql/mutations/recordItem";

const ItemsList = () => {
  const { loading, data, error } = useQuery(fetchAllItems, {
    variables: { status: "found" },
  });

  const [addItem] = useMutation(ADD_ITEM);
  const handleRegisterItem = (name, itemId) => {
    addItem({ variables: { input: { name, itemId } } });
  };
  return (
    <div>
      {data?.getAllItems?.map((item) => (
        <Item item={item} key={item.sk} />
      ))}
      <RecordItemForm handleRegisterItem={handleRegisterItem} />
    </div>
  );
};

export default ItemsList;
