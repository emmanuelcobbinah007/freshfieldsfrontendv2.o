"use client";
import { useState } from "react";
import { useProducts } from "../../context/ProductContext";
import { useRouter } from "next/navigation";
import { div } from "framer-motion/client";
import { ToastContainer, toast } from "react-toastify";

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
      router.push("/dashboard"); // Redirect to product list
      toast.success("Product added successfully");
    } catch (err) {
      setError("Failed to add product. Try again.");
      toast.error(error);
    } finally {
      setLoading(false);
    }

    setFormData({
      name: "",
      price: "",
      category: "",
      description: "",
      fullDescription: "",
      imageUrl: "",
      features: "",
    });

  };

  return (
    <div className="bg-[#FFC1070F] h-auto pt-[20px] flex items-center justify-center p-4 rounded-xl">
      <div className="max-w-3xl mx-auto shadow-md bg-[FFC1070F] p-6 pb-10 h-auto rounded-xl md:shadow-2xl md:w-[45%]">
      <ToastContainer />
        <h2 className="text-2xl mb-4 text-center font-semibold">Add a New Product</h2>

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
            className="bg-[#489706] w-full text-white px-5 py-2 rounded-3xl flex justify-center items-center hover:bg-[#FFC1070F] hover:font-semibold hover:text-[#489706] hover:border hover:border-[#489706] duration-200"
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
