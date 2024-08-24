import { useState, useEffect } from 'react';
import './App.css';

type Circle = {
  number: number;
  top: string;
  left: string;
  clicked: boolean;
};

function App() {
  const [points, setPoints] = useState(0);
  const [circles, setCircles] = useState<Circle[]>([]);
  const [time, setTime] = useState<number>(0);
  const [nextNumber, setNextNumber] = useState<number>(1);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [result, setResult] = useState<string>("LET'S PLAY");

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;

    if (circles.length > 0 && !gameOver) {
      interval = setInterval(() => setTime((prev) => prev + 0.1), 100);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [circles, gameOver]);

  const createCircles = () => {
    const positions = Array.from({ length: points }).map((_, index) => ({
      number: index + 1,
      top: `${Math.random() * 80}%`,
      left: `${Math.random() * 80}%`,
      clicked: false,
    }));
    setCircles(positions);
    setTime(0);
    setNextNumber(1);
    setGameOver(false);
    setResult("LET'S PLAY");
  };

  const handleCircleClick = (number: number) => {
    if (gameOver) return;

    if (number === nextNumber) {
      setCircles((prevCircles) =>
        prevCircles.map((circle) =>
          circle.number === number ? { ...circle, clicked: true } : circle
        )
      );
      setNextNumber((prev) => prev + 1);
      if (nextNumber === points) {
        setGameOver(true);
        setResult("All Cleared");
      }
    } else {
      setGameOver(true);
      setResult("Game over");
    }
  };

  const handleStart = () => {
    createCircles();
  };

  const handleDelete = () => {
    setPoints(0);
    setCircles([]);
    setTime(0);
    setNextNumber(1);
    setGameOver(false);
    setResult("LET'S PLAY");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">{result}</h1>
        <div className="flex items-end space-x-6 mb-6">
          <div className="flex flex-col items-center">
            <label className="text-lg font-medium text-gray-700 mb-2">Points:</label>
            <input
              type="number"
              value={points}
              onChange={(e) => setPoints(parseInt(e.target.value) || 0)}
              min="1"
              className="border border-gray-300 p-3 w-24 text-center rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col items-center">
            <label className="text-lg font-medium text-gray-700 mb-2">Time:</label>
            <input
              type="text"
              value={time.toFixed(1)}
              readOnly
              className="border border-gray-300 p-3 w-24 text-center rounded-lg shadow-md bg-gray-200"
            />
          </div>
          <button
            onClick={handleStart}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition ease-in-out duration-300"
          >
            Start
          </button>
          <button
            onClick={handleDelete}
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-lg transition ease-in-out duration-300"
          >
            Delete
          </button>
        </div>
        <div className="relative w-80 h-80 bg-white border border-gray-300 rounded-lg shadow-lg flex justify-center items-center mt-8">
          {circles.map((circle) => (
            <div
              key={circle.number}
              className={`absolute w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer ${circle.clicked ? 'hidden' : ''}`}
              style={{ top: circle.top, left: circle.left }}
              onClick={() => handleCircleClick(circle.number)}
            >
              <span className="text-white text-xs font-semibold">{circle.number}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
