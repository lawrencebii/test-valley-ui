import { MainBannerCard } from "./components/MainBannerCarousel";
import { MainShortCutCards } from "./components/MainShortCutCard";
import NavBar from "./components/NavBar";
import { CategoryHeader } from "./components/categories/CategoryHeader";
import { CategoryProductDetails } from "./components/categories/CategoryProductCard";
import CollectionCategory from "./components/collections/CollectionCategory";
import MainProductDisplay from "./components/collections/MainProductDisplay";

function App() {
  return (
    <div className="max-w-[1024px] mx-auto">
      <NavBar />
      <MainBannerCard />
      <MainShortCutCards />
      <div className="flex flex-row  max-w-7xl mx-auto py-5 gap-3 hide-scrollbar">
        {/* <CategoryHeader />
        <CategoryProductDetails /> */}
        <MainProductDisplay />
      </div>
    </div>
  );
}

export default App;
