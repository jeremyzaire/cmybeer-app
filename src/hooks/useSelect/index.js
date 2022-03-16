import React from "react";

export default function useSelect(defaultValue = "") {
  const [selectedValue, selectValue] = React.useState("");

  const handleChange = (event) => {
    selectValue(event.target.value);
  };

  return [selectedValue, handleChange];
}
