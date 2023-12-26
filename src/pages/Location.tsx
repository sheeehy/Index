const Location = () => {
  return (
    <main className="min-h-screen select-none  bg-zinc-950">
      <h1 className="flex justify-center font-Archivo text-[7rem] text-white pt-16 ">LOCATION</h1>
      <h2 className="flex justify-center font-Archivo text-2xl pt-8 text-white">13–14 Liberty Lane, Dublin 2, D08 NF86</h2>
      <div className="flex justify-center py-12 grayscale brightness-50">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2382.3665782165363!2d-6.268758523240586!3d53.33669387228647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670f681280e3e9%3A0x20940a86fd7f4b!2sIndex%20Dublin!5e0!3m2!1sen!2sie!4v1703621148770!5m2!1sen!2sie"
          width="1000"
          height="500"
          allowFullScreen // Updated attribute name
          loading="lazy"
        ></iframe>
      </div>
      <h2 className="flex justify-center font-Archivo text-2xl pt-8 text-white">Below is our venue map, for full club opening and set times, see our socials.</h2>
      <img className="mx-auto block py-12 w-1/2" src="https://indexdublin.com/wp-content/uploads/2023/09/Print-AW-scaled.jpg" alt="Venue Map" />
    </main>
  );
};

export default Location;
