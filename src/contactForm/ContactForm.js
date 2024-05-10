import React from "react";

const ContactForm = () => {
  return (
    <div className="md:flex md:gap-96">
     <div class="md:mt-52 md:ml-6">
    <h1 class="text-5xl">Get in touch with us</h1>
    <h5 class="text-3xl mt-4 mb-3">Send your enquiry now!</h5>
    <div class="mt-8">
        <form class="flex items-center justify-between bg-gray-300 rounded-full">
            <input class="bg-gray-300 rounded-3xl px-4 py-2 focus:outline-none text-black" placeholder="Enter email address" required type="email" name="email" />
            <button class="bg-btnColor text-white rounded-full px-4 py-2" type="submit">Request Demo</button>
        </form>
    </div>
</div>

      <div className="mr-0 md:text-center">
        <img
          src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmap_2_white.1bdb3808.png&w=1920&q=75"
          alt="img not Found"
        />
      </div>
    </div>
  );
};

export default ContactForm;
