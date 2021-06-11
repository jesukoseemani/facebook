import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import React from "react";
import Contact from "./Contact";

function Widgets() {
  const contacts = [
    { src: "https://res.cloudinary.com/okcodes/image/upload/v1623262784/IMG-20201225-WA0015_hck7t6.jpg", name: "Olowo Kosh" },
    { src: "https://res.cloudinary.com/okcodes/image/upload/v1623262603/IMG-20210320-WA0009_wpgdju.jpg", name: "Ayo Kanyinsola" },
    { src:  "https://res.cloudinary.com/okcodes/image/upload/v1623355538/IMG-20201212-WA0017_mqbuk1.jpg", name: "Tolu Caleb" },
    { src: "https://res.cloudinary.com/okcodes/image/upload/v1623262816/IMG-20201007-WA0006_s0o2tm.jpg", name: "Kanmi Titus" },
    { src: "https://res.cloudinary.com/okcodes/image/upload/v1623262562/IMG-20210608-WA0004_k7x0of.jpg", name: "Averti Savvy" },
    { src: "https://res.cloudinary.com/okcodes/image/upload/v1623261447/56097b8815df4148aa1939f741b81f51_uxzvxs.jpg", name: "Dr. Jojo" },
    { src: "https://res.cloudinary.com/okcodes/image/upload/v1623262737/IMG-20201231-WA0052_fc3ckk.jpg", name: "Caleb Vida" },
  ];

  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>

      {contacts.map((contact) => (
        <Contact key={contact.src} src={contact.src} name={contact.name} />
      ))}
    </div>
  );
}

export default Widgets;
