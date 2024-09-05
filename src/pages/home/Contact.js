// import React from "react";
// import ContactImage from "../../assets/bg2.jpg";
// import ContactIcon from "../../assets/contacticon.svg";

// function Contact() {
//   return (
//       <div className="p-5 px-20 h-[80vh] flex justify-center w-[80vw] ma items-center relative">
//         <img
//           src={ContactImage}
//           className="absolute z-[-34] right-4  rounded-l-md h-[inherit] w-[50vw]"
//         />

//         <div className="bg-transparentbackground rounded-lg h-[inherit] p-5 w-[70vw]">
//           <h1 className="text-primaryColor font-bold md:text-5xl mb-5">
//             Contact Us
//           </h1>
 
//           <form action="" className="flex flex-col gap-3">
//             <div className="flex justify-between gap-3">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 className="text-textColor flex-[.5] p-2 rounded-md outline-none border border-transparent focus:border-primaryColor"
//               />
//               <input
//                 type="email"
//                 placeholder="Email-Address"
//                 className="text-textColor flex-[.5] p-2 rounded-md outline-none border border-transparent focus:border-primaryColor"
//               />
//             </div>
//             <input
//               type="text"
//               name=""
//               id=""
//               placeholder="Subject"
//               className="text-textColor p-2 rounded-md outline-none border border-transparent focus:border-primaryColor"
//             />
//             <textarea
//               name=""
//               id=""
//               placeholder="Message"
//               className="text-textColor p-2 rounded-md outline-none border border-transparent focus:border-primaryColor h-[30vh]"
//             ></textarea>
//             <button className="btn1">Send Message</button>
//           </form>
//         </div>
//       </div>
//   );
// }

// export default Contact;


import React from "react";
import ContactImage from "../../assets/bg2.jpg";
import ContactIcon from "../../assets/contacticon.svg";

function Contact() {
  return (
    <div className="p-5 md:px-20 px-4 h-auto md:h-[80vh] flex flex-col md:flex-row justify-center items-center relative w-full md:w-[80vw] mx-auto">
      <img
        src={ContactImage}
        className="absolute z-[-34] right-4 md:relative md:z-0 rounded-l-md h-[30vh] md:h-[inherit] w-[100%] md:w-[50vw] object-cover"
      />

      <div className="bg-transparentbackground rounded-lg p-5 w-full md:w-[70vw] h-auto md:h-[inherit] flex flex-col justify-center items-center md:items-start">
        <h1 className="text-primaryColor font-bold text-3xl md:text-5xl mb-5 text-center md:text-left">
          Contact Us
        </h1>

        <form action="" className="flex flex-col gap-3 w-full">
          <div className="flex flex-col md:flex-row justify-between gap-3">
            <input
              type="text"
              placeholder="Name"
              className="text-textColor flex-[.5] p-2 rounded-md outline-none border border-transparent focus:border-primaryColor w-full md:w-auto"
            />
            <input
              type="email"
              placeholder="Email-Address"
              className="text-textColor flex-[.5] p-2 rounded-md outline-none border border-transparent focus:border-primaryColor w-full md:w-auto"
            />
          </div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Subject"
            className="text-textColor p-2 rounded-md outline-none border border-transparent focus:border-primaryColor w-full"
          />
          <textarea
            name=""
            id=""
            placeholder="Message"
            className="text-textColor p-2 rounded-md outline-none border border-transparent focus:border-primaryColor h-[20vh] md:h-[30vh] w-full"
          ></textarea>
          <button className="btn1 w-full md:w-auto self-center md:self-start">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
