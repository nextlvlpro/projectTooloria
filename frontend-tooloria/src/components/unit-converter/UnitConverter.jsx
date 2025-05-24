"use client";

import { useState, useEffect } from "react";
import convert from "convert-units";

export default function UnitConverter({ params }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(
    params?.category || "length"
  );

  const [subUnits, setSubUnits] = useState([]);
  const [inputValue, setInputValue] = useState({ value1: "", value2: "" });

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setInputValue({ value1: "", value2: "" });
  };

  useEffect(() => {
    setSelectedCategory(params?.category || "length");
    setCategories(convert()?.measures());
  }, [params]);

  useEffect(() => {
    if (categories.length > 0) {
      const units = convert()?.list(selectedCategory);
      setSubUnits(units);
      setInputValue({ value1: units?.[0].abbr, value2: units?.[1].abbr  });
    }
  }, [categories, selectedCategory]);

  useEffect(()=> {
    console.log(inputValue);
    
  }, [inputValue ])

  return (
    <section>
      <div className="border border-red-500 w-[500px] h-[500px] mx-auto p-4">
        <div className="mb-4 flex items-center gap-2 justify-center">
          <span className="block text-textMuted mb-2">Select a Category</span>
          <select
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="border border-gray-300 px-3 py-2 rounded bg-bg text-textMain w-[200px] text-sm"
          >
            {categories &&
              categories?.map((cat) => (
                <option key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
          </select>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="block text-textMain mb-2">From</span>
            <select
              value={inputValue.value1}
              onChange={(e) =>
                setInputValue({ ...inputValue, value1: e.target.value })
              }
              className="border border-gray-300 py-1 px-2 rounded bg-bg text-textMain text-xs"
            >
              {subUnits &&
                subUnits?.map((unit, i) => (
                  <option key={i} value={unit.abbr}>
                    {`(${unit?.abbr}) ${unit?.plural}`}
                  </option>
                ))}
            </select>
          </div>

          <div>
          <span className="block text-textMain mb-2">to</span>

          <select
              value={inputValue.value2}
              onChange={(e) =>
                setInputValue({ ...inputValue, value2: e.target.value })
              }
              className="border border-gray-300 py-1 px-2 rounded bg-bg text-textMain text-xs"
            >
              {subUnits &&
                subUnits?.map((unit, i) => (
                  <option key={i} value={unit.abbr}>
                    {`(${unit?.abbr}) ${unit?.plural}`}
                  </option>
                ))}
            </select>

          </div>
        </div>

        <button>Convert</button>
        <div>result</div>
      </div>
    </section>
  );
}
