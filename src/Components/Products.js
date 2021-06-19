import { useState, useEffect } from "react";
// import Data from "../Data/data.json";
import { useData } from "../Contexts/data";
export const Products = () => {
  const {
    productInfo,
    displayProductInfo,
    setDisplayProductInfo,
    sizeFilter,
    brandFilter,
    idealForFilter,
  } = useData();
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    let data = productInfo;
    // const temp = data;
    if (sizeFilter.length > 0) {
      sizeFilter.forEach((filterItem) => {
        const temp = data.filter((item) => item.size.includes(filterItem));
        data = temp;
      });
    }

    if (brandFilter.length > 0) {
      let innerTemp;
      brandFilter.forEach((filterItem) => {
        const temp = data.filter((item) => item.brand.includes(filterItem));
        data = temp;
        innerTemp = innerTemp + "," + temp;
      });
      // data = innerTemp;
    }

    if (idealForFilter.length > 0) {
      idealForFilter.forEach((filterItem) => {
        const temp = data.filter((item) => item.idealFor.includes(filterItem));
        data = temp;
      });
    }

    setDisplayProductInfo(data);
    console.log(data, sizeFilter, brandFilter, idealForFilter);
    // eslint-disable-next-line
  }, [sizeFilter, brandFilter, idealForFilter]);

  useEffect(() => {
    setProductData(displayProductInfo);
    // eslint-disable-next-line
  }, [displayProductInfo]);

  const onPopularity = () => {
    setProductData(displayProductInfo);
    // console.log(productData);
  };

  const onL2H = () => {
    const data = [...productData].sort((a, b) => a.price - b.price);
    setProductData(data);
    // console.log(productData);
  };

  const onH2L = () => {
    const data = [...productData].sort((a, b) => b.price - a.price);
    setProductData(data);
    // console.log(productData);
  };

  return (
    <div>
      <div className="sort">
        Sort By <span onClick={() => onPopularity()}>Popularity</span>
        <span onClick={onL2H}>Price--Low to High</span>
        <span onClick={onH2L}>Price--High to Low</span>
      </div>
      <div className="products">
        {productData?.map((item, index) => (
          <div key={index} className="card">
            <img src={item.img} alt={item.brand} />
            <h2>{item.name}</h2>
            <h3>{item.brand}</h3>
            <h4>₹ {item.price}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};
