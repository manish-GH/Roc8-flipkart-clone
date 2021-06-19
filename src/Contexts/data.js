import { createContext, useContext, useState, useEffect } from "react";
import Data from "../Data/data.json";

const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [productInfo, setProductInfo] = useState([]);
  const [displayProductInfo, setDisplayProductInfo] = useState([]);
  const [sizeFilter, setSizeFilter] = useState([]);
  const [brandFilter, setBrandFilter] = useState([]);
  const [idealForFilter, setIdealForFilter] = useState([]);

  useEffect(() => {
    setProductInfo(
      Data.map((item) => ({
        name: item.name,
        brand: item.brand,
        img: item.img,
        price: item.price,
        size: item.size,
        idealFor: item.idealFor,
      }))
    );
    setDisplayProductInfo(
      Data.map((item) => ({
        name: item.name,
        brand: item.brand,
        img: item.img,
        price: item.price,
        size: item.size,
        idealFor: item.idealFor,
      }))
    );
  }, []);

  const value = {
    productInfo,
    displayProductInfo,
    setDisplayProductInfo,
    sizeFilter,
    setSizeFilter,
    brandFilter,
    setBrandFilter,
    idealForFilter,
    setIdealForFilter,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
