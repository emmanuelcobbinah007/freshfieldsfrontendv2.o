import { NextResponse } from "next/server";
import { getFirestore } from "firebase-admin/firestore";
import { initializeApp, applicationDefault, getApps } from "firebase-admin/app";

// ✅ Ensure Firebase is only initialized once
if (!getApps().length) {
  initializeApp({
    credential: applicationDefault(), // Ensure this is configured correctly
  });
}

const db = getFirestore();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name } = body;

    console.log("Requested category:", name);

    if (!name) {
      return NextResponse.json({ error: "Category is required" }, { status: 400 });
    }

    const productsRef = db.collection("products");
    const querySnapshot = await productsRef.where("category", "==", name).get();

    console.log("Firestore query result size:", querySnapshot.size);

    if (querySnapshot.empty) {
      return NextResponse.json([]);
    }

    const products = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log("Fetched products:", products);

    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}
