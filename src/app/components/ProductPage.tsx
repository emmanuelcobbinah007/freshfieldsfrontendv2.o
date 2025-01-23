"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

const ProductPage = () => {
  const params = useParams();
  const [productId, setProductId] = useState<string | null>(null);

  useEffect(() => {
    const id = Array.isArray(params.id) ? params.id[0] : params.id;
    if (id) {
      setProductId(id);
    }
  }, [params]);

  if (!productId) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Product ID: {productId}</h1>
      {/* You can now use the productId to fetch product details and display them */}
    </div>
  );
};

export default ProductPage;