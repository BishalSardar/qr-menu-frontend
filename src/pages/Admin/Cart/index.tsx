import CartItem from "./_components/CartItem";
import { Button } from "@/components/ui/button";

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

];

const Cart = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="relative flex-1">
        <div className="fixed top-0 bg-gray-100 z-20 w-full">
          <h1 className="text-2xl font-bold sticky top-0 pt-5 z-10 bg-slate-100 pb-5 px-5">{`Order`}</h1>
        </div>
        <div className="overflow-y-auto px-5  h-dvh -mt-28 pt-48 pb-24">
          <div className="space-y-3 pb-3">
            {foodData.map((food) => {
              return <CartItem key={food.id} food={food} />;
            })}
          </div>
        </div>
        <div className="absolute bottom-0 w-full">
          <div className="bg-white p-7 bottom-0 rounded-t-3xl">
            <div className="flex justify-between items-center">
              <h1>Item</h1>
              <p>5</p>
            </div>
            <div className="flex justify-between items-center mb-2">
              <h1 className="font-black text-xl">Total</h1>
              <p className="font-black text-xl">Rs. 50</p>
            </div>
            <div className="mb-10 mt-4">
              <Button className="rounded-[16px] w-full bg-orange-500 hover:bg-orange-800">
                Place Order
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
