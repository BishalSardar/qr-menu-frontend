import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchBox = () => {
  return (
    <div className="flex items-center bg-white rounded-xl px-4">
      <Search className="w-5 h-5" />
      <Input
        type="email"
        placeholder="Search food, drinks, etc..."
        style={{ border: "none", outline: "none", boxShadow: "none" }}
        className="border-none bg-transparent w-96 h-14 "
      />
    </div>
  );
};

export default SearchBox;
