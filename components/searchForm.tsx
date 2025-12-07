"use client";

import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import StarGroup from "./StarGroup";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  rating: number;
  thumbnail: string;
};

export default function ProductSearchForm() {
  const [text, setText] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!text.trim()) {
      setProducts([]);
      return;
    }

    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(
          `https://dummyjson.com/products/search?q=${text}`,
          { signal: controller.signal }
        );
        const data = await res.json();
        setProducts(data.products || []);
      } catch (err: any) {
        if (err.name !== "AbortError") {
          setError("Something went wrong!");
        }
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(fetchData, 500); 

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [text]);

  return (
    <div className="px-6 flex-1">
      <div className="relative">
        {/* Search Input */}
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Search products..."
          className="border w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          type="text"
        />

        {/* Search Icon */}
        <button className="absolute top-1/2 -translate-y-1/2 right-3 text-gray-500 hover:text-primary">
          <Search size={20} />
        </button>

        {/* Dropdown Results */}
        {text && (
          <div className="absolute top-full left-0 w-full mt-2 max-h-72 overflow-y-auto border rounded-lg bg-white shadow-lg z-50">
            {/* Loading */}
            {loading && (
              <p className="p-4 text-center text-sm text-gray-500">
                Searching...
              </p>
            )}

            {/* Error */}
            {error && (
              <p className="p-4 text-center text-sm text-red-500">{error}</p>
            )}

            {/* No Result */}
            {!loading && !error && products.length === 0 && (
              <p className="p-4 text-center text-sm text-gray-500">
                No products found
              </p>
            )}

            {/* Results */}
            {products.map((item) => (
              <Link
                href={`/products/${item.id}`}
                key={item.id}
                className="flex gap-3 p-3 border-b hover:bg-gray-50 transition"
              >
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  width={70}
                  height={70}
                  className="rounded object-cover"
                />
                <div className="flex-1">
                  <h4 className="text-sm font-medium">{item.title}</h4>
                  <div className="flex items-center gap-1 text-sm">
                    <StarGroup count={item.rating} />
                  </div>
                  <p className="text-sm font-semibold text-primary">
                    ${item.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
