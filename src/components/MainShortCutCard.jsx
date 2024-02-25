import { useEffect, useState } from "react";
import { fetchMainShortCutCardDetails } from "../utils/fetcher";

export const MainShortCutCards = () => {
  const [shortCutCard, setShortCutCard] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const results = await fetchMainShortCutCardDetails();
        if (!results) {
          setErrorMessage("sorry no data was found");
        } else {
          setShortCutCard(results);
        }
      } catch (error) {
        console.log(error);
        setErrorMessage("An error occurred while fetching data.");
      }
    };

    fetchedData();
  }, []);

  return (
    <div className=" flex flex-row gap-3 max-w-7xl mx-auto py-10  flex-nowrap px-2 ">
      {shortCutCard.map((item, index) => (
        <div key={index} className="flex flex-col gap-3 ">
          <img src={item.imageUrl} />
          <div>{item.title}</div>
        </div>
      ))}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};
