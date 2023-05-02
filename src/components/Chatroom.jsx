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
    <div className="">
      <form onSubmit={handleSubmit} className="form flex flex-col w-3/5 m-6">
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="type you message"
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
        />
        <button
          type="submit"
          className="bg-orange-600 hover:bg-orange-400 text-white font-bold py-2 px-5 mt-3 rounded focus:outline-none focus:shadow-outline"
        >
          Send
        </button>
      </form>
    </div>
  );
}
