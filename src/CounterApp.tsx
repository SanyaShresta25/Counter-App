import { useState } from 'react';

export default function CounterApp() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('1');
  const [incrementValue, setIncrementValue] = useState(1);

  const handleIncrement = () => {
    setCount(prev => prev + incrementValue);
  };

  const handleDecrement = () => {
    if (count > 0) setCount(prev => prev - incrementValue);
  };

  const handleReset = () => {
    setCount(0);
  };

const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setInputValue(event.target.value);
};

  const handleSubmit = () => {
    const parsed = parseInt(inputValue, 10);
    if (!isNaN(parsed) && parsed > 0) {
      setIncrementValue(parsed);
    } else {
      alert('Please enter a valid positive number.');
    }
  };

  const getColors = () => {
    if (count < 0) return { text: 'text-red-600', bg: 'bg-pink-100' };
    if (count === 0) return { text: 'text-black', bg: 'bg-gray-100' };
    if (count < 5) return { text: 'text-blue-600', bg: 'bg-blue-100' };
    return { text: 'text-green-600', bg: 'bg-green-100' };
  };

  const { text, bg } = getColors();

  return (
    <div className={`min-h-screen flex flex-col justify-center items-center px-4 font-bold text-xl ${bg}`}>
      <div className="w-full max-w-sm p-6 bg-white rounded-xl shadow-md flex flex-col gap-6 items-center">
        <h1 className="text-3xl text-gray-700">Counter App</h1>

        {/* Input + Submit */}
        <div className="w-full">
          <label className="text-sm font-semibold text-gray-600">
            Custom Increment:
            <input
              type="number"
              value={inputValue}
              onChange={handleInputChange}
              className="mt-1 w-full border px-3 py-2 rounded text-base focus:ring-2 focus:ring-blue-400"
              min={1}
            />
          </label>
          <button
            onClick={handleSubmit}
            className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
          >
            Submit
          </button>
        </div>

        {/* Counter */}
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

        <button
          className="w-full bg-gray-300 hover:bg-gray-400 py-2 rounded text-base"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>

      <footer className="mt-6 text-sm text-gray-600 text-center">
        Made with <span className="text-red-500">❤️</span> by Sanya Shresta Jathanna
      </footer>
    </div>
  );
}
