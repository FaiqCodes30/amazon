function ProductCard({ title, image, linkText = "See more" }) {
  return (
    <div className="bg-white p-5 shadow-sm hover:shadow-md transition">

      <h2 className="text-xl font-bold mb-4">
        {title}
      </h2>

      <img
        src={image}
        alt={title}
        className="w-full h-[250px] object-cover"
      />

      <p className="text-sm text-[#007185] mt-4 cursor-pointer hover:text-orange-600 hover:underline">
        {linkText}
      </p>

    </div>
  );
}

export default ProductCard;