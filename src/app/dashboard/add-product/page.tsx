"use client";
import { useState } from "react";
import { useProducts } from "../../context/ProductContext";
import { useRouter } from "next/navigation";
import { div } from "framer-motion/client";

const Page = () => {
  const { addProduct } = useProducts();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    fullDescription: "",
    imageUrl: "",
    features: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Convert price to number & features to array
    const productData = {
      ...formData,
      id: crypto.randomUUID(), // Generate a unique id
      price: parseFloat(formData.price),
      features: formData.features.split(",").map((feature) => feature.trim()), // Convert features to an array
    };

    try {
      await addProduct(productData);
      console.log(productData); // Debugging
    //   router.push("/dashboard/products"); // Redirect to product list
    } catch (err) {
      setError("Failed to add product. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (

    <div className="bg-[#FFC1070F]">
        <div className="max-w-3xl mx-auto shadow-md bg-[FFC1070F] p-6 h-auto rounded md:shadow-2xl md:w-[45%]">
      <h2 className="text-2xl font-bold mb-4">Add a New Product</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Product Name"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price (GHC)"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Short Description"
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="fullDescription"
          value={formData.fullDescription}
          onChange={handleChange}
          placeholder="Full Description"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="features"
          value={formData.features}
          onChange={handleChange}
          placeholder="Features (comma-separated)"
          className="w-full p-2 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-700"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
    </div>
  );
};

export default Page;
