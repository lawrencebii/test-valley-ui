import { MainBannerCard } from "./components/MainBannerCarousel";
import { MainShortCutCards } from "./components/MainShortCutCard";
import { CategoryHeader } from "./components/categories/CategoryHeader";
import { CategoryProductDetails } from "./components/categories/CategoryProductCard";

function App() {
  return (
    <>
      <MainBannerCard />
      <MainShortCutCards />
      <div className="flex flex-row  max-w-7xl mx-auto py-5 gap-3">
        <CategoryHeader />
        <CategoryProductDetails />
      </div>
    </>
  );
}

export default App;
