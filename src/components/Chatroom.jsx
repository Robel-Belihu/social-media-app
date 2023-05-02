import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase.config";

export function Chatroom({ room }) {
  const [newMessage, setNewMessage] = useState("");

  const messagesRef = collection(db, "messages");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newMessage === "") return;
    console.log(newMessage);

    await addDoc(messagesRef, {
      name: newMessage,
      sentAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room,
    });
    setNewMessage("");
  };

  return (
    <div class=" bg-blue-200">
      <form
        onSubmit={handleSubmit}
        className="container h-screen flex justify-center items-start"
      >
        <div className="relative">
          <div className="absolute top-4 left-3">
            <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
          </div>
          <input
            type="text"
            className="h-14 w-96 pl-10 pr-20 mt-4 rounded-lg z-0 focus:shadow focus:outline-none"
            placeholder="Type a text ..."
            onChange={(e) => setNewMessage(e.target.value)}
            value={newMessage}
          />
          <div className="absolute top-2 right-2">
            <button
              type="submit"
              className="h-10 w-20 text-white rounded-lg bg-red-500 hover:bg-red-600"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
