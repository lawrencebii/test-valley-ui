import CategoryProductCard from "./CategoryProductCard";

function CollectionCategory({ item }) {
  return (
    <div className="flex flex-col overflow-x-clip md:flex-row items-start   box-border w-full h-auto md:h-56">
      <div className="pl-3 pt-3 w-full md:w-[34%]">
        <h2 className="text-xl text-bold">{item.title}</h2>
        <p className="text-base font-normal">{item.description}</p>
      </div>
      <div className="flex flex-row w-full overflow-x-hidden space-x-[3.1%]">
        {item.items &&
          item.items.map((item, index) => (
            <CategoryProductCard key={index} product={item} />
          ))}
      </div>
    </div>
  );
}

export default CollectionCategory;
