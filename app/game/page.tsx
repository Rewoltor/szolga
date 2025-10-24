"use client";

import React, { useState } from "react";

export default function WordCollectionGame() {
  const [words, setWords] = useState<string[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [showList, setShowList] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = () => {
    const trimmedInput = currentInput.trim();
    if (!trimmedInput) return;

    const isDuplicate = words.some((w) => w.toLowerCase() === trimmedInput.toLowerCase());
    if (isDuplicate) {
      setErrorMessage("This word has already been entered!");
      setTimeout(() => setErrorMessage(""), 3000);
      return;
    }

    setWords((prev) => [...prev, trimmedInput]);
    setCurrentInput("");
    setErrorMessage("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSubmit();
  };

  const handleList = () => setShowConfirmation(true);

  const confirmList = () => {
    const shuffled = [...words].sort(() => Math.random() - 0.5);
    setWords(shuffled);
    setShowList(true);
    setShowConfirmation(false);
  };

  const cancelList = () => setShowConfirmation(false);

  const handleReset = () => {
    setWords([]);
    setCurrentInput("");
    setShowList(false);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Word Collection Game</h1>

        {!showList ? (
          <div>
            <div className="mb-6 text-center">
              <p className="text-gray-600 mb-2">Words collected: <span className="font-bold text-purple-600">{words.length}</span></p>
            </div>

            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter your word..."
                  className="w-full px-6 py-4 pr-20 border-2 border-gray-300 rounded-2xl focus:border-purple-500 focus:outline-none text-lg placeholder:text-gray-400"
                  autoFocus
                />

                <button
                  onClick={handleSubmit}
                  aria-label="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-xl transition duration-200 shadow-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              {errorMessage && (
                <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  {errorMessage}
                </div>
              )}

              <button
                onClick={handleList}
                className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition duration-200"
              >
                List All Words
              </button>

              {showConfirmation && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                  <div className="bg-white rounded-xl p-6 max-w-sm w-full">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Confirm</h3>
                    <p className="text-gray-600 mb-6">Are you sure you want to reveal all words? This will randomize the order.</p>
                    <div className="flex gap-3">
                      <button
                        onClick={cancelList}
                        className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded-lg transition duration-200"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={confirmList}
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-lg transition duration-200"
                      >
                        Yes, List Them
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">All Words:</h2>
            <div className="bg-gray-50 rounded-lg p-4 mb-4 max-h-96 overflow-y-auto">
              {words.length === 0 ? (
                <p className="text-gray-500 text-center">No words collected yet</p>
              ) : (
                <ul className="space-y-2">
                  {words.map((word, index) => (
                    <li key={index} className="bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                      <span className="font-semibold text-purple-600">#{index + 1}</span> {word}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button
              onClick={handleReset}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition duration-200"
            >
              Start New Game
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
