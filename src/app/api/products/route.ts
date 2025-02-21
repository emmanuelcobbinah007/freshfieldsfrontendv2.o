import { NextResponse } from "next/server";

// Temporary in-memory storage (replace with a database)
let products: any[] = [];

/**
 * GET /api/products
 * Fetch all products
 */
export async function GET() {
  try {
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to fetch products" }, { status: 500 });
  }
}

/**
 * POST /api/products
 * Add a new product
 */
export async function POST(req: Request) {
  try {
    const product = await req.json();

    if (!product.name || !product.price) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    // Add to storage (replace with database logic)
    products.push(product);

    return NextResponse.json({ message: "Product added successfully", product }, { status: 201 });
  } catch (error) {
    console.error("Error in API:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
