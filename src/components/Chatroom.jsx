import React, { useState, useEffect } from "react";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { auth, db } from "../firebase.config";

export function Chatroom({ room }) {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesRef = collection(db, "messages");

  useEffect(() => {
    const queryMsg = query(messagesRef, where("room", "==", room));
    const unsubscribe = onSnapshot(queryMsg, (snapshot) => {
      let texts = [];
      snapshot.forEach((snap) => {
        texts.push({ ...snap.data(), id: snap.id });
      });
      setMessages(texts);
    });
    return () => unsubscribe();
  }, []);

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
    <div class="bg-blue-200">
      <div className="md:items-center md:justify-center md:border-2xl">
        <form
          onSubmit={handleSubmit}
          className="container h-screen flex justify-center items-center"
        >
          <div className="flex">
            <h2>{Chatroom}</h2>
            <div className="border-2">
              {messages.map((message) => (
                <h2>{message.name}</h2>
              ))}
              <div className="flex w-full items-center">
                <input
                  type="text"
                  className="h-14 w-96 pl-10 pr-20 mt-4 rounded-l-lg z-0 focus:shadow focus:outline-none"
                  placeholder="Type a text ..."
                  onChange={(e) => setNewMessage(e.target.value)}
                  value={newMessage}
                />

                <button
                  type="submit"
                  className="text-white text-xl h-14 pl-10 pr-20 mt-4 rounded-r-lg z-0 bg-orange-600 hover:bg-orange-400"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
