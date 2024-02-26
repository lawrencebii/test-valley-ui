import React, { useEffect, useState } from "react";
import axios from "axios";
import CollectionCategory from "./CollectionCategory";
function MainProductDisplay() {
  const [collectionsHeader, setCollectionHeader] = useState(null);
  const fetchCategoryProductsData = async () => {
    console.log("Fetching");
    try {
      const response = await axios.get(
        "https://api.testvalley.kr/collections",
        {
          params: {
            prearrangedDiscount: true,
          },
        }
      );

      const categoryItemsResults = response.data.items || [];

      setCollectionHeader(
        categoryItemsResults.filter(
          (categoryItem) => categoryItem?.items?.length > 0
        )
      );
    } catch (error) {
      console.error("Error fetching collection:", error);
    }
  };

  useEffect(() => {
    fetchCategoryProductsData();
  }, []);

  if (!collectionsHeader) {
    return (
      <div className="flex flex-row items-center w-full mx-auto">
        Loading...
      </div>
    );
  }
  return (
    <div>
      {collectionsHeader &&
        collectionsHeader.map((item, index) => (
          <CollectionCategory key={index} item={item} />
        ))}
    </div>
  );
}

export default MainProductDisplay;
