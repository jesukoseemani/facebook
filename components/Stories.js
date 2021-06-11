import React from "react";
import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Olowo Kosh",
    src: "https://res.cloudinary.com/okcodes/image/upload/v1623261002/IMG_20201222_153425_jk6of6.jpg",
    profile: "https://res.cloudinary.com/okcodes/image/upload/v1623262784/IMG-20201225-WA0015_hck7t6.jpg",
  },
  {
    name: "Ayo Kanyinsola",
    src: "https://res.cloudinary.com/okcodes/image/upload/v1623262603/IMG-20210320-WA0009_wpgdju.jpg",
    profile: "https://res.cloudinary.com/okcodes/image/upload/v1623262603/IMG-20210320-WA0009_wpgdju.jpg",
  },
  {
    name: "Tolu Caleb",
    src: "https://res.cloudinary.com/okcodes/image/upload/v1623262656/IMG-20210407-WA0002_t139m9.jpg",
    profile: "https://res.cloudinary.com/okcodes/image/upload/v1623355538/IMG-20201212-WA0017_mqbuk1.jpg",
  },
  {
    name: "Kanmi Titus",
    src: "https://res.cloudinary.com/okcodes/image/upload/v1623262816/IMG-20201007-WA0006_s0o2tm.jpg",
    profile: "https://res.cloudinary.com/okcodes/image/upload/v1623262816/IMG-20201007-WA0006_s0o2tm.jpg",
  },
  {
    name: "Averti Savvy",
    src: "https://res.cloudinary.com/okcodes/image/upload/v1623262562/IMG-20210608-WA0004_k7x0of.jpg",
    profile: "https://res.cloudinary.com/okcodes/image/upload/v1623262562/IMG-20210608-WA0004_k7x0of.jpg",
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard name={story.name} src={story.src} profile={story.profile} />
      ))}
    </div>
  );
}

export default Stories;
