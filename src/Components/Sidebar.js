import React from "react";
import { useData } from "../Contexts/data";

export const Sidebar = () => {
  const {
    sizeFilter,
    setSizeFilter,
    brandFilter,
    setBrandFilter,
    idealForFilter,
    setIdealForFilter,
    productInfo,
    setDisplayProductInfo,
  } = useData();

  const setSize = (e) => {
    console.log(e.target.value);
    if (sizeFilter.includes(e.target.value)) {
      setSizeFilter(sizeFilter.filter((item) => item !== e.target.value));
      //remove
    } else {
      setSizeFilter([...sizeFilter, e.target.value]);
      //add
    }
  };

  const setBrand = (e) => {
    console.log(e.target.value);
    if (brandFilter.includes(e.target.value)) {
      setBrandFilter(brandFilter.filter((item) => item !== e.target.value));
      //remove
    } else {
      setBrandFilter([...brandFilter, e.target.value]);
      //add
    }
  };

  const setIdealFor = (e) => {
    console.log(e.target.value);
    if (idealForFilter.includes(e.target.value)) {
      setIdealForFilter(
        idealForFilter.filter((item) => item !== e.target.value)
      );
      //remove
    } else {
      setIdealForFilter([...idealForFilter, e.target.value]);
      //add
    }
  };

  const clearAll = () => {
    setDisplayProductInfo(productInfo);
    setSizeFilter([]);
    setBrandFilter([]);
    setIdealForFilter([]);
  };

  return (
    <div className="fixed">
      <h3>Size</h3>
      <div className="size">
        <div>
          <input
            type="checkbox"
            value="S"
            id="small"
            onChange={(e) => setSize(e)}
          />
          <label htmlFor="small"> S</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="M"
            id="medium"
            onChange={(e) => setSize(e)}
          />
          <label htmlFor="medium"> M</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="L"
            id="large"
            onChange={(e) => setSize(e)}
          />
          <label htmlFor="large"> L</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="XL"
            id="x-large"
            onChange={(e) => setSize(e)}
          />
          <label htmlFor="x-large"> XL</label>
        </div>
      </div>
      <h3>Brand</h3>
      <div className="size">
        <div>
          <input
            type="checkbox"
            value="AARPI"
            id="aarpi"
            onChange={(e) => setBrand(e)}
          />
          <label htmlFor="aarpi"> AARPI</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="PUMA"
            id="puma"
            onChange={(e) => setBrand(e)}
          />
          <label htmlFor="puma"> PUMA</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="REEBOK"
            id="reebok"
            onChange={(e) => setBrand(e)}
          />
          <label htmlFor="reebok"> REEBOK</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="PEPE JEANS"
            id="pepe-jeans"
            onChange={(e) => setBrand(e)}
          />
          <label htmlFor="pepe-jeans"> PEPE JEANS</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="DECHEN"
            id="dechen"
            onChange={(e) => setBrand(e)}
          />
          <label htmlFor="dechen"> DECHEN</label>
        </div>
      </div>
      <h3>Ideal for</h3>
      <div className="size">
        <div>
          <input
            type="checkbox"
            value="Men"
            id="men"
            onChange={(e) => setIdealFor(e)}
          />
          <label htmlFor="men"> Men</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Women"
            id="women"
            onChange={(e) => setIdealFor(e)}
          />
          <label htmlFor="women"> Women</label>
        </div>
      </div>
      <button onClick={clearAll}>Clear all filters</button>
    </div>
  );
};
