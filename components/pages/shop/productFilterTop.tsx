"use client";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Funnel, Grid2X2, List } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const ProductFilterTop = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleFilter = (text: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (text == "All products") {
      params.delete("filter");
    }
    else{
      params.set("filter", text);
    }
    router.push(`?${params.toString()}`);
  };

  const handlePriceShort = (text: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (text === "default") {
    params.delete("price_short");
  } else {
    params.set("price_short", text);
  }

    router.push(`?${params.toString()}`);
  };


  const [view, setView] = useState("grid");
  const viewHandler = (text: string) => {
    setView(text);
  };
  return (
    <div className="my-container pt-12 pb-6">
      <div className="bg-white p-4 flex gap-x-2">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-x-1 border py-2 px-4">
            <Funnel size={16} />
            Quick filter
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={() => handleFilter("All products")}>
                All products
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleFilter("Featured")}>
                Featured
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleFilter("Best sellers")}>
                Best sellers
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleFilter("Top rated")}>
                Top rated
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleFilter("New Arrival")}>
                New Arrival
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="flex items-center gap-x-1">
          <span>Short by: </span>
          <DropdownMenu>
            <DropdownMenuTrigger className="border py-2 px-4 flex items-center justify-between gap-x-3.5">
              All Product
              <ChevronDown className="mt-1" size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={()=> handlePriceShort("default")}>Default</DropdownMenuItem>
                <DropdownMenuItem onClick={()=> handlePriceShort("Low - High price")}>Low - High price</DropdownMenuItem>
                <DropdownMenuItem onClick={()=> handlePriceShort("High - Low price")}>High - Low price</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="ml-auto">
          <ButtonGroup>
            <Button
              onClick={() => viewHandler("grid")}
              variant={view == "grid" ? "default" : "outline"}
              className="cursor-pointer"
            >
              <Grid2X2 size={16} />
            </Button>
            <Button
              onClick={() => viewHandler("list")}
              variant={view == "list" ? "default" : "outline"}
              className="cursor-pointer"
            >
              <List size={16} />
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default ProductFilterTop;
