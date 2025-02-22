"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/authContext";
import { ClipLoader } from "react-spinners";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, userRole, loading } = useAuth();
  const router = useRouter();
  const [roleChecked, setRoleChecked] = useState(false);

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push("/");
      } else if (userRole !== "admin") {
        router.push("/");
      } else {
        setRoleChecked(true);
      }
    }
  }, [user, userRole, loading, router]);

  if (loading || !user || !roleChecked) {
    return (
          <div className="flex justify-center items-center h-[85vh] bg-[#FFC1070F]">
            <div className="text-center">
              <div className="loader"></div>
              <ClipLoader size={50} color="#489706" />
            </div>
          </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
