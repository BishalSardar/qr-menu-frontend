"use client";
import momoImage from "@/assets/images/momo.png";
import momoImage2 from "@/assets/images/momo2.png";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, X } from "lucide-react";
import { useState } from "react";

export default function FoodCard({ food }: { food: Food }) {
  const [count, setCount] = useState(0);

  return (
    <Card
      className={`shadow-lg border-0 rounded-[25px] pb-3 flex flex-col justify-between ${
        count > 0 ? "border-2 border-orange-500" : ""
      }`}
    >
      <div className="relative">
        <img
          src={food.image === "momo.png" ? momoImage : momoImage2}
          alt={food.name}
          className="w-[8rem] h-[8rem] lg:w-[12rem] lg:h-[12rem] object-cover rounded-full select-none m-auto my-2 shadow-lg"
        />
        {count > 0 && (
          <div className="absolute right-1 top-2">
            <Button
              size="icon"
              onClick={() => setCount(0)}
              className="w-7 h-7 bg-orange-500 font-black rounded-full"
            >
              <X size={14} strokeWidth={3} className="text-white" />
            </Button>
          </div>
        )}
        <div className="px-3 lg:px-5 pt-3">
          <h1 className="font-bold select-none">{food.name}</h1>
        </div>
      </div>
      <div className="px-3 lg:px-5 flex justify-between items-center lg:mt-2">
        <div className="flex gap-1">
          <span className="text-sm text-orange-500 select-none">Rs.</span>
          <p className="text-xl font-black text-orange-500 select-none">250</p>
        </div>
        <div className="z-10">
          <Button
            size="icon"
            onClick={() => setCount(count + 1)}
            className="lg:w-14 lg:h-14 font-black rounded-full bg-orange-500 hover:orange-800"
          >
            {count === 0 ? <Plus size={24} /> : count}
          </Button>
        </div>
      </div>
    </Card>
  );
}
