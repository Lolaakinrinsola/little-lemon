import React from "react";
import { Link, Navigate } from "react-router-dom";
import Card from "./Card";
import "./home.scss";
import header from "../image/mario.jpg";
import vector from "../image/Vector.png";
import RatingCard from "./RatingCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const rating=[
    {image:require("../image/r1.jpg"),name:'Kalie', text:'Great food, excellent service, cozy atmosphere. Will definitely return.', star:'⭐️⭐️⭐️⭐️'},
    {image:require("../image/r2.jpg"),name:'Robb', text:"Slow service, mediocre food, noisy atmosphere. Won't be back.", star:'⭐️'},
    {image:require("../image/r3.jpg"),name:'Aang', text:'Hidden gem with diverse menu, excellent cocktails, and stylish decor. Highly recommend.', star:'⭐️⭐️⭐️⭐️'},
    {image:require("../image/r4.jpg"),name:'Nick', text:'Mixed experience with hit-or-miss food, slow service, and dated decor.', star:'⭐️⭐️⭐️'},
  ]
  const cards = [
    {
      title: "Greek Salad",
      image: require("../image/greeksalad.jpg"),
      price: "$10",
      text: "The famous greek salad of cripsy chicago peppers, olives and our chicago style feta chees garnished with crunchy garlic and rosemary ",
    },
    { title: "Bruchetta", image: require("../image/restauranfood.jpg"), price: "$12", text: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil" },
    { title: "Lemon Dessert", image: require("../image/lemondessert.jpg"), price: "$13", text: "This comes straught from grandma's recipe book, every last ingredient has been sourced and is authentic as can be imagined" }
  ];

  const navigate = useNavigate();

  function onSubmit() {
    navigate("/reservations");
  }
  return (
    <div className="header">
      <header className="flex flex-col p-[2em] md:p-[5em] lg:px-[7em] gap-[3em]">
        <div>
          <h1 className="text-primary-20 text-[3em] font-mar">LITTLE LEMON</h1>
          <h2 className="text-highlight-10 text-[3em] font-mar">CHICAGO</h2>
          <p className="text-highlight-10 text-[1.6em]font-karla">
            Little lemon is a charming neighborhood bistro that serves simple
            food and classic cocktails in a lively but casual environment. The
            restaurant features a locally-soured menu with daily specials
          </p>
          <button
            onClick={onSubmit}
            className="text-highlight-10 bg-highlight-20 px-[1em] py-[.5em] rounded-[16px] hover:bg-primary-20 hover:text-highlight-10 mt-[2em]"
          >
            RESERVATION
          </button>
        </div>
        <div className="rounded-2xl">
          <img src={header} alt="" className="rounded-2xl" />
        </div>
      </header>

      <body className="justify-center items-center  grid ">
        <div className="specials p-[2em] md:px-[5em] lg:px-[7em]">
          <h2 className="font-bold text-[1.6em]">SPECIALS</h2>
          <div>
            <button
              onClick={onSubmit}
              className="text-highlight-10 bg-highlight-20 px-[1em] py-[.5em] rounded-[16px] hover:bg-primary-20 hover:text-highlight-10"
            >
              RESERVATION
            </button>
          </div>
        </div>
        <div id="menuCard" className="gap-[2em] m-auto justify-center">
          {cards.map((flavors) => (
              <Card
            title={flavors.title}
            image={flavors.image}
            text={flavors.text}
            price={flavors.price}
            />
            
          ))}
        </div>

        <div
          id="ratings"
          className="grid items-center justify-center py-[3em] md:py-[7em]"
        >
          <h1 className="font-mar font-normal text-[2em]">TESTIMONIALS</h1>
          <div
            id="ratingcard"
            className="gap-[2em] flex flex-wrap m-auto justify-center"
          >
            {rating.map((flavors) => (
              <RatingCard
            name={flavors.name}
            image={flavors.image}
            text={flavors.text}
            star={flavors.star}
            />
            
          ))}
          </div>
        </div>
        <header className="headerbody p-[2em] md:px-[7em] md:py-[5em] ">
          <div className=" flex flex-col justify-center">
            <h1 className="text-primary-10 text-[3em] font-mar">
              LITTLE LEMON
            </h1>
            <h2 className="text-highlight-20 text-[3em] font-mar">CHICAGO</h2>
            <p className="text-highlight-20 text-[1.6em]font-karla">
              Little lemon is a charming neighborhood bistro that serves simple
              food and classic cocktails in a lively but casual environment. The
              restaurant features a locally-soured menu with daily specials
            </p>
          </div>
          <div>
            <img src={vector} alt="" className="m-auto"/>
          </div>
        </header>
      </body>
    </div>
  );
};

export default Home;
