"use client";
import momoImage from "@/assets/images/momo.png";
import momoImage2 from "@/assets/images/momo2.png";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Minus, Plus, X } from "lucide-react";

export default function CartItem({ food }: { food: Food }) {
  const [count, setCount] = useState(1);

  return (
    <div className="flex justify-between items-center bg-white py-7 px-5 relative rounded-2xl">
      <div className="absolute right-4 top-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setCount(Math.max(count - 1, 0))}
          className="w-7 h-7 font-black rounded-full bg-custom-white active:bg-custom-primary active:text-white"
        >
          <X size={15} />
        </Button>
      </div>
      <div className="w-1/4">
        <img
          src={food.image === "momo.png" ? momoImage : momoImage2}
          alt={food.name}
          className="max-w-[70px] max-h-[70px] rounded-full object-cover select-none"
        />
      </div>
      <div className="w-full space-y-2 pl-3">
        <div className="pt-3">
          <h1 className="select-none w-[80%]">{food.name}</h1>
          <p className="text-gray-500">Rs. {food.price}</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Button
            size="icon"
            onClick={() => setCount(Math.max(count - 1, 1))}
            className="w-7 h-7 font-black rounded-full bg-orange-500 hover:bg-orange-800"
          >
            <Minus size={20} />
          </Button>
          <p>{count}</p>
          <Button
            size="icon"
            onClick={() => setCount(count + 1)}
            className="w-7 h-7 font-black rounded-full bg-orange-500 hover:bg-orange-800"
          >
            <Plus size={20} />
          </Button>
        </div>
      </div>
      <div className="w-1/2 text-right ">
        <h1 className="text-md font-bold">Rs. {food.price * count}</h1>
      </div>
    </div>
  );
}
