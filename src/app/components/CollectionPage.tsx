"use client";

import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'

const CollectionPage = () => {
    const params = useParams();
    const [collectionId, setCollectionId] = useState<string | null>(null);

    useEffect(() => {
        const id = Array.isArray(params.id) ? params.id[0] : params.id;

        if (id) {
            setCollectionId(id);
        }

    }, [params]);

    if (!collectionId) {
        return <div>Loading...</div>;
    }


  return (
    <div>
      <h1>Collection ID: {collectionId}</h1>
      {/* You can now use the productId to fetch product details and display them */}
    </div>
  )
}

export default CollectionPage