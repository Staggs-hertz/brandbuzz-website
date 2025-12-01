import React from "react";

const Map = () => {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden px-4 sm:px-12 lg:px-24 xl:px-40 py-11 mb-5">
      {/* I used Google Maps Embed option to get the HTML iframe of the specified location and put it in the React component */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d11731.06774527455!2d23.30574134597267!3d42.68747901147012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s85%20Bul.%20Vitosha%20Sofia%2C%20C%201000!5e0!3m2!1sen!2sng!4v1764591749213!5m2!1sen!2sng"
        className="w-full h-full border-0"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
