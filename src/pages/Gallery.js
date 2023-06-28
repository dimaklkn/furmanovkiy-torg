import React from "react";
import { useGlobalContext } from "../context";
import CardList from "../components/CardList";

export default function Home() {
  const { picture, setPicture } = useGlobalContext();
  return (
    <>
      <main>
        <CardList />
        <div
          className="popup-media events-result"
          style={{ display: picture ? "block" : "none" }}
        >
          <span onClick={() => setPicture(null)}>&times;</span>
          <img src={picture} alt="fullIMage" />
        </div>
      </main>
    </>
  );
}
