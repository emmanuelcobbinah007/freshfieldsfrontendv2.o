"use client";

import { db } from "../lib/firebaseClient";
import { collection, query, where, getDocs } from "firebase/firestore";
import { createContext, useContext, useState, useEffect } from "react";

export interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    description: string;
    fullDescription: string;
    imageUrl: string;
    features: string[];
}

interface ProductContextType {
    products: Product[];
    addProduct: (product: Product) => void;
    fetchProducts: () => void;
    categoryProducts: Product[]; // Add this line
    fetchCategory: (category: string) => void; // Add this line
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: React.ReactNode }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [categoryProducts, setCategoryProducts] = useState<Product[]>([]); //Change to product array

    // Fetch products from backend
    const fetchProducts = async () => {
        try {
            const res = await fetch("/api/products");
            const data = await res.json();
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    // Add product
    const addProduct = async (product: Product) => {
        try {
            const res = await fetch("/api/products", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(product),
            });

            if (!res.ok) {
                throw new Error("Failed to add product");
            }

            // Update state
            setProducts((prev) => [...prev, product]);
        } catch (error) {
            console.error("Error adding product:", error);
        }
    };

    // Fetch category from backend
    const fetchCategory = async (category: string) => {
        try {
          const productsRef = collection(db, "products"); // Reference to Firestore collection
          const q = query(productsRef, where("category", "==", category));
          const querySnapshot = await getDocs(q);
          
          const products = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          
          return products;
        } catch (error) {
          console.error("Error fetching products from category:", error);
          return [];
        }
      };

    // Fetch products on mount
    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <ProductContext.Provider value={{ products, addProduct, fetchProducts, categoryProducts, fetchCategory }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProducts = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error("useProducts must be used within a ProductProvider");
    }
    return context;
};