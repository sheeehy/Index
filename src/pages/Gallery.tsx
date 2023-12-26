const Gallery = () => {
  const imageUrls = [
    "https://indexdublin.com/wp-content/uploads/2023/09/ArmandVanHelden08_09_2023_Index_Killian_Whyte-24.jpg",
    "https://indexdublin.com/wp-content/uploads/2023/09/ArmandVanHelden08_09_2023_Index_Killian_Whyte-95.jpg",
    "https://indexdublin.com/wp-content/uploads/2023/09/ArmandVanHelden08_09_2023_Index_Killian_Whyte-87.jpg",
    "https://indexdublin.com/wp-content/uploads/2023/09/ArmandVanHelden08_09_2023_Index_Killian_Whyte-50.jpg",
    "https://indexdublin.com/wp-content/uploads/2023/09/ArmandVanHelden08_09_2023_Index_Killian_Whyte-38.jpg",
    "https://indexdublin.com/wp-content/uploads/2023/09/ArmandVanHelden08_09_2023_Index_Killian_Whyte-3.jpg",
    "https://indexdublin.com/wp-content/uploads/2023/09/ArmandVanHelden08_09_2023_Index_Killian_Whyte-25.jpg",
    "https://indexdublin.com/wp-content/uploads/2023/09/ArmandVanHelden08_09_2023_Index_Killian_Whyte-2.jpg",
    "https://indexdublin.com/wp-content/uploads/2023/09/ArmandVanHelden08_09_2023_Index_Killian_Whyte-13.jpg",
    "https://indexdublin.com/wp-content/uploads/2023/09/ArmandVanHelden08_09_2023_Index_Killian_Whyte-12.jpg",
    "https://indexdublin.com/wp-content/uploads/2023/09/ArmandVanHelden08_09_2023_Index_Killian_Whyte-101.jpg",
    "https://indexdublin.com/wp-content/uploads/2023/09/ArmandVanHelden08_09_2023_Index_Killian_Whyte-1.jpg",
    "https://indexdublin.com/wp-content/uploads/2023/09/Tommyholohan09_09_2023_Index_Killian_Whyte-9.jpg",
    "https://indexdublin.com/wp-content/uploads/2023/09/Tommyholohan09_09_2023_Index_Killian_Whyte-75.jpg",
    "https://indexdublin.com/wp-content/uploads/2023/09/Tommyholohan09_09_2023_Index_Killian_Whyte-6.jpg",
    "https://indexdublin.com/wp-content/uploads/2023/09/Tommyholohan09_09_2023_Index_Killian_Whyte-57.jpg",
    "https://indexdublin.com/wp-content/uploads/2023/09/Tommyholohan09_09_2023_Index_Killian_Whyte-46.jpg",
    "https://indexdublin.com/wp-content/uploads/2023/09/Tommyholohan09_09_2023_Index_Killian_Whyte-45.jpg",
    "https://indexdublin.com/wp-content/uploads/2023/09/Tommyholohan09_09_2023_Index_Killian_Whyte-42.jpg",
    "https://indexdublin.com/wp-content/uploads/2023/09/Tommyholohan09_09_2023_Index_Killian_Whyte-40.jpg",
    "https://indexdublin.com/wp-content/uploads/2023/09/Tommyholohan09_09_2023_Index_Killian_Whyte-4.jpg",
    "https://indexdublin.com/wp-content/uploads/2023/09/Tommyholohan09_09_2023_Index_Killian_Whyte-38.jpg",
    "https://indexdublin.com/wp-content/uploads/2023/09/Tommyholohan09_09_2023_Index_Killian_Whyte-3.jpg",
    "https://indexdublin.com/wp-content/uploads/2023/09/Tommyholohan09_09_2023_Index_Killian_Whyte-20.jpg",
    "https://indexdublin.com/wp-content/uploads/2023/09/Tommyholohan09_09_2023_Index_Killian_Whyte-11.jpg",
    "https://indexdublin.com/wp-content/uploads/2023/09/Tommyholohan09_09_2023_Index_Killian_Whyte-12.jpg",
  ];
  return (
    <main className="min-h-screen select-none bg-zinc-950 text-white">
      <h1 className="flex justify-center font-Archivo text-[7rem] pt-16">GALLERY</h1>
      <div className="grid grid-cols-3 gap-8 p-12 px-12">
        {imageUrls.map((imageUrl, index) => (
          <div key={index} className="w-full aspect-w-1 aspect-h-1">
            <img src={imageUrl} alt={`Image ${index + 1}`} className="object-cover w-full h-full" />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Gallery;
