import { NextResponse } from "next/server";
import {adminDB} from "../../server/firebaseAdmin";


// Temporary in-memory storage (replace with a database)
let admins: any[] = [];


/**
 * GET /api/adminss
 * Fetch all admins
 */
export async function GET() {
    try {
      const adminsRef = adminDB.collection("users");
      const snapshot = await adminsRef.get();
  
      const admins = snapshot.docs
        .map(doc => {
          const data = doc.data() as { role: string }; // Define the expected structure
          return { id: doc.id, ...data };
        })
        .filter(user => user.role === "admin"); // Filter only admins


      return NextResponse.json(admins, { status: 200 });

    } catch (error) {
      console.error("Error fetching admins:", error);
      return NextResponse.json({ message: "Failed to fetch admins" }, { status: 500 });
    }
  }


