import React from "react";
import { useMutation } from "@apollo/client";
import RecordItemForm from "../../components/RecordItemForm";
import ADD_ITEM from "../../graphql/mutations/recordItem";

const RecordItem = () => {
  const [addItem, { data, loading, error }] = useMutation(ADD_ITEM);

  const handleRegisterItem = (name, itemId) => {
    addItem({
      variables: {
        input: {
          name,
          itemId,
          status: "Lost",
          location: { district: "Rutsiro" },
        },
      },
    });
  };

  //   console.log({ data, loading, error });
  return (
    <div>
      <RecordItemForm handleRegisterItem={handleRegisterItem} />
    </div>
  );
};

export default RecordItem;
