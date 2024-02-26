import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function CategoryProductCard({ product }) {
  return (
    <div className="w-[22%] flex-shrink-0 h-full pb-5">
      <img
        src={product.publication.media[0].uri}
        alt=""
        className="object-cover w-3/4 h-[75%]"
      />
      <div>
        <h2 className="text-base font-light">{product.publication.title}</h2>
        {product.publication.priceInfo.discountRate && (
          <h1 className="inline mr-2 text-red-600">
            {product.publication.priceInfo.discountRate}%
          </h1>
        )}
        <h1 className="inline">
          {product.publication.priceInfo.discountPrice}
        </h1>
        <FontAwesomeIcon icon={faStar} className="font-normal" />
      </div>
    </div>
  );
}
