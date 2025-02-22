"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "../lib/firebaseClient";
import { 
  onAuthStateChanged, 
  signInWithPopup, 
  GoogleAuthProvider, 
  signOut, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  User 
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

interface AuthContextType {
  user: User | null;
  userRole: string | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<User | void>;
  signInWithGoogle: () => Promise<void>;
  signUp: (email: string, password: string, name: string, phoneNumber: string, address: string) => Promise<User | void>;
  logout: () => Promise<void>;
  signUpAdmin: (email: string, password: string, name: string, phoneNumber: string, address: string) => Promise<User | void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      if (user) {
        await fetchUserRole(user.uid);
      } else {
        setUserRole(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const fetchUserRole = async (uid: string): Promise<string> => {
    try {
      const userRef = doc(db, "users", uid);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        console.log("Fetched Role:", userSnap.data().role); // Debugging
        const role = userSnap.data().role;
        setUserRole(role);
        return role;
      } else {
        console.warn("User document does not exist.");
        setUserRole("user");
        return "user";
      }
    } catch (error) {
      console.error("Error fetching user role:", error);
      setUserRole("user");
      return "user";
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setUser(user);
      
      await fetchUserRole(user.uid); // Ensure userRole is updated before redirecting
  
      toast.success("Signed in successfully!");
      
      // Fetching userRole is async, so get it directly after setting it
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);
      const role = userSnap.exists() ? userSnap.data().role : "user";
      
      router.push(role === "admin" ? "/dashboard" : "/");
      return user;
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "An unknown error occurred");
      throw error;
    }
  };
  
  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
      setUser(user);
  
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);
      if (!userSnap.exists()) await setDoc(userRef, { role: "user" });
  
      await fetchUserRole(user.uid);
  
      toast.success("Signed in with Google!");
      
      // Fetch role and redirect properly
      const updatedUserSnap = await getDoc(userRef);
      const role = updatedUserSnap.exists() ? updatedUserSnap.data().role : "user";
      
      router.push(role === "admin" ? "/dashboard" : "/");
    } catch (error) {
      toast.error("Google sign-in failed.");
    }
  };  

  const signUp = async (email: string, password: string, name: string, phoneNumber: string, address: string) => {
    try {
      const cleanedEmail = email.trim(); 
      console.log(cleanedEmail)// Trim spaces
      const userCredential = await createUserWithEmailAndPassword(auth, cleanedEmail, password);
      const user = userCredential.user;
      setUser(user);
  
      await setDoc(doc(db, "users", user.uid), { 
        role: "user",
        name: name,
        phoneNumber: phoneNumber,
        email: cleanedEmail,
        address: address,
        createdAt: new Date().toISOString(),
      });
  
      toast.success("Account created successfully!");
      return user;
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "An unknown error occurred");
      throw error;
    }
  };

  const signUpAdmin = async (email: string, password: string, name: string, phoneNumber: string, address: string) => {
    try {
      const cleanedEmail = email.trim(); 
      console.log(cleanedEmail)// Trim spaces
      const userCredential = await createUserWithEmailAndPassword(auth, cleanedEmail, password);
      const user = userCredential.user;
      setUser(user);
  
      await setDoc(doc(db, "users", user.uid), { 
        role: "admin",
        name: name,
        phoneNumber: phoneNumber,
        email: cleanedEmail,
        address: address,
        createdAt: new Date().toISOString(),
      });
  
      toast.success("Admin added successfully!");
      return user;
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "An unknown error occurred");
      throw error;
    }
  };
  

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setUserRole(null);
      toast.success("Logged out successfully!");
      router.push("/login");
    } catch (error) {
      toast.error("Logout failed.");
    }
  };

  return (
    <AuthContext.Provider value={{ user, userRole, loading, signIn, signInWithGoogle, signUp, signUpAdmin, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
