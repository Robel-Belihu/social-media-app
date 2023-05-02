import { useState, useRef } from "react";
import "./App.css";
import { AuthPage } from "./components/AuthPage";
import Cookies from "universal-cookie/cjs/Cookies";
import { Chatroom } from "./components/Chatroom";

const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);
  const [isInside, setIsInside] = useState(false);

  const roomInputRef = useRef(null);

  if (!isAuth) {
    return (
      <div>
        <AuthPage setIsAuth={setIsAuth} />
      </div>
    );
  }
  return (
    <div>
      {room ? (
        <div>
          <Chatroom room={room} />
        </div>
      ) : (
        <div className="min-h-screen bg-orange-600 py-6 flex flex-col justify-center sm:py-12">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
              <div className="max-w-md mx-auto">
                <div>
                  <h1 className="text-2xl font-semibold">
                    Enter your chatroom
                  </h1>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="relative">
                      <input
                        autocomplete="off"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        type="text"
                        ref={roomInputRef}
                      />
                      <label
                        for="text"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        --
                      </label>
                    </div>
                    <div className="relative"></div>
                    <div className="relative">
                      <button
                        className="bg-orange-600 text-white rounded-md px-2 py-1"
                        onClick={() => setRoom(roomInputRef.current.value)}
                      >
                        Enter Chatroom
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
