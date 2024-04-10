import React from "react";
import CategoryInput from "./inputs/CategoryInput";
import { categories } from "../helpers/constants";

const FiltersRow = ({ filters }) => {
  return (
    <div className="flex flex-wrap items-center gap-5 my-5">
      {categories?.map((category, index) => (
        <CategoryInput
          label={category?.label}
          key={index}
          id={category?.id}
          value={category?.value}
          filters={filters}
        />
      ))}
    </div>
  );
};

export default FiltersRow;
