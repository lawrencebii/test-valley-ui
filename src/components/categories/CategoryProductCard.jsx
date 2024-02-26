import { useEffect, useState } from "react";
import axios from "axios";

export const CategoryProductDetails = () => {
  const [collectionsHeader, setCollectionHeader] = useState(null);

  useEffect(() => {
    const fetchCategoryProductsData = async () => {
      try {
        const response = await axios.get(
          "https://api.testvalley.kr/collections",
          {
            params: {
              prearrangedDiscount: true, // Assuming you want to filter by prearranged discounts
            },
          }
        );
        // Assuming the response is an array of collections, we're setting the first one as an example
        const categoryItemsResults = response.data.items[0];
        console.log("headerINfo", categoryItemsResults);
        console.log("headerINfo");
        setCollectionHeader(categoryItemsResults);
      } catch (error) {
        console.error("Error fetching collection:", error);
      }
    };

    fetchCategoryProductsData();
  }, []);

  if (!collectionsHeader) {
    return <div>Loading...</div>;
  }
  return (
    <div className="    py-10  flex-wrap flex flex-col">
      {collectionsHeader && (
        <div>
          <img
            className="mb-2 rounded-md"
            src={collectionsHeader?.thumbnail.uri}
            alt={collectionsHeader.title}
          />
          <p>{collectionsHeader.description}</p>
          <p className="text-xs">{collectionsHeader.rating}</p>
        </div>
      )}
    </div>
  );
};
