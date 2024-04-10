import React from "react";
import { build } from "search-params";
import { useNavigate } from "react-router-dom";

const CategoryInput = ({ label = "", value = "", id, filters }) => {
  const navigate = useNavigate();

  const handleFilter = (e) => {
    if (e.target.checked) {
      const searchParams = build({ ...filters, category: value });
      navigate(`/?${searchParams}`);
    }
  };

  return (
    <button className="">
      <input
        type="radio"
        name="category"
        id={`category` + id}
        hidden
        onChange={handleFilter}
        className="peer"
        checked={filters?.category == value || false}
      />
      <label
        className="peer-checked:border-tertiary peer-checked:text-tertiary border border-secondary rounded-xl px-4 py-1 text-sm"
        htmlFor={`category` + id}
      >
        <span>{label}</span>
      </label>
    </button>
  );
};

export default CategoryInput;
