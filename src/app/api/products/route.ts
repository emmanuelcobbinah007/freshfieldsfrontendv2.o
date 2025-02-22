import { NextResponse } from "next/server";
import {adminDB} from "../../server/firebaseAdmin";

/**
 * GET /api/products
 * Fetch all products
 */
export async function GET() {
  try {
    const productsRef = adminDB.collection("products");
    const snapshot = await productsRef.get();

    const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ message: "Failed to fetch products" }, { status: 500 });
  }
}

/**
 * POST /api/products
 * Add a new product
 */
export async function POST(req: Request) {
  try {
    const productData = await req.json();

    if (!productData.name || !productData.price) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    // Add to storage (replace with database logic)
    const newProductRef = adminDB.collection("products").doc();
    await newProductRef.set(productData);

    return NextResponse.json({ message: "Product added successfully", id: newProductRef.id }, { status: 201 });

  } catch (error) {
    console.error("Error adding product:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
