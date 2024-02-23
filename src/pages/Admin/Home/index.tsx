import Cart from "../Cart";
import MainNav from "../_components/MainNav";
import FoodCard from "./_components/FoodCard";

const foodData = [
  {
    id: "1",
    name: "Veg Momo with fried rice",
    price: 250,
    image: "momo2.png",
  },
  {
    id: "2",
    name: "Veg Momo with fried rice and omlete",
    price: 250,
    image: "momo.png",
  },
  {
    id: "3",
    name: "Veg Chicken Momo",
    price: 250,
    image: "momo.png",
  },
  {
    id: "4",
    name: "Veg Momo with fried rice",
    price: 250,
    image: "momo.png",
  },
  {
    id: "5",
    name: "Veg Momo with fried rice",
    price: 250,
    image: "momo.png",
  },
  {
    id: "6",
    name: "Veg Momo with fried rice",
    price: 250,
    image: "momo2.png",
  },
  {
    id: "7",
    name: "Veg Momo with fried rice",
    price: 250,
    image: "momo.png",
  },
  {
    id: "8",
    name: "Veg Momo with fried rice",
    price: 250,
    image: "momo.png",
  },
  {
    id: "9",
    name: "Veg Momo with fried rice",
    price: 250,
    image: "momo.png",
  },
  {
    id: "10",
    name: "Veg Momo with fried rice",
    price: 250,
    image: "momo.png",
  },
  {
    id: "11",
    name: "Veg Momo with fried rice",
    price: 250,
    image: "momo.png",
  },
  {
    id: "12",
    name: "Veg Momo with fried rice",
    price: 250,
    image: "momo.png",
  },
  {
    id: "13",
    name: "Veg Momo with fried rice",
    price: 250,
    image: "momo.png",
  },
  {
    id: "14",
    name: "Veg Momo with fried rice",
    price: 250,
    image: "momo.png",
  },
  {
    id: "15",
    name: "Veg Momo with fried rice",
    price: 250,
    image: "momo.png",
  },
  {
    id: "16",
    name: "Veg Momo with fried rice",
    price: 250,
    image: "momo.png",
  },
  {
    id: "17",
    name: "Veg Momo with fried rice",
    price: 250,
    image: "momo.png",
  },
  {
    id: "18",
    name: "Veg Momo with fried rice",
    price: 250,
    image: "momo.png",
  },
  {
    id: "19",
    name: "Veg Momo with fried rice",
    price: 250,
    image: "momo.png",
  },
  {
    id: "20",
    name: "Veg Momo with fried rice",
    price: 250,
    image: "momo.png",
  },
  {
    id: "21",
    name: "Veg Momo with fried rice",
    price: 250,
    image: "momo.png",
  },
  {
    id: "22",
    name: "Veg Momo with fried rice",
    price: 3546,
    image: "momo.png",
  },
];

const Home = () => {
  return (
    <div className="flex min-h-screen">
      <div className="relative w-full xl:w-3/4">
        <div className="sticky top-0 bg-gray-100 z-20">
          <MainNav />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-3 gap-3 xl:gap-5 -mt-20 pt-28 pb-10 overflow-y-auto px-5 sm:px-10 h-dvh">
          {foodData.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
      </div>
      <div className="hidden xl:block w-2/4 pr-5">
        <Cart />
      </div>
    </div>
  );
};

export default Home;
