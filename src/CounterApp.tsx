import { useState, useEffect, type ChangeEvent } from 'react';

export default function CounterApp() {
  // useState to store the count value
  const [count, setCount] = useState<number>(0);

  // useState to store the input as a string to avoid typing issues
  const [inputValue, setInputValue] = useState<string>('1');

  // useState to store the final increment value parsed from input
  const [incrementValue, setIncrementValue] = useState<number>(1);

  // useEffect watches inputValue and updates incrementValue accordingly
  useEffect(() => {
    const value = parseInt(inputValue, 10);
    if (!isNaN(value) && value > 0) {
      setIncrementValue(value);
    }
  }, [inputValue]);

  const handleIncrement = () => {
    setCount(prev => prev + incrementValue);
  };

  const handleDecrement = () => {
    if (count > 0) setCount(prev => prev - incrementValue);
  };

  const handleReset = () => {
    setCount(0);
  };

  // Handles raw input and updates string state
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // Dynamic color themes based on count value
  const getColors = () => {
    if (count < 0) return { text: 'text-red-600', bg: 'bg-pink-100' };
    if (count === 0) return { text: 'text-black', bg: 'bg-gray-100' };
    if (count < 5) return { text: 'text-blue-600', bg: 'bg-blue-100' };
    return { text: 'text-green-600', bg: 'bg-green-100' };
  };

  const { text, bg } = getColors();

  return (
    <div className={`min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 font-bold text-xl ${bg}`}>
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg p-6 sm:p-8 bg-white rounded-xl shadow-md flex flex-col gap-6 items-center">
        <h1 className="text-2xl sm:text-3xl text-gray-700">Counter App</h1>

        {/* Custom Increment Input */}
        <label className="w-full text-left text-sm sm:text-base font-semibold text-gray-600">
          Add Custom Increment:
          <input
            type="number"
            value={inputValue}
            onChange={handleInputChange}
            className="mt-1 w-full border px-3 py-2 rounded text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
            min={1}
          />
        </label>

        {/* Counter UI */}
        <div className="grid grid-cols-3 gap-3 p-4 bg-gray-50 rounded shadow w-full max-w-xs">
          <button
            className="bg-pink-100 hover:bg-pink-200 text-red-600 px-4 py-2 rounded text-lg"
            onClick={handleDecrement}
          >
            −
          </button>
          <span className={`flex items-center justify-center ${text} text-xl`}>{count}</span>
          <button
            className="bg-green-100 hover:bg-green-200 text-green-600 px-4 py-2 rounded text-lg"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>

        {/* Reset Button */}
        <button
          className="w-full bg-gray-300 hover:bg-gray-400 py-2 rounded text-base"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>

      {/* Footer */}
      <footer className="mt-6 text-sm sm:text-base text-gray-600 text-center">
        Made with <span className="text-red-500">❤️</span> by Sanya Shresta Jathanna
      </footer>
    </div>
  );
}
