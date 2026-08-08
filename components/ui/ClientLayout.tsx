"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";
import ScrollProgress from "./ScrollProgress";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader loading={loading} />
      
      <ScrollProgress />
      
      {!loading && children}
    </>
  );
}