"use client";
import { useEffect, useRef, useState } from "react";

const CANVAS_SIZE = 400;
const SCALE = 20;
const INITIAL_SNAKE = [
  { x: 8, y: 8 },
  { x: 7, y: 8 },
];
const INITIAL_DIRECTION = { x: 1, y: 0 };

type Position = { x: number; y: number };

export default function SnakeGame() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [snake, setSnake] = useState<Position[]>(INITIAL_SNAKE);
  const [food, setFood] = useState<Position>(randomFood());
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [isGameOver, setIsGameOver] = useState(false);

  function randomFood(): Position {
    return {
      x: Math.floor(Math.random() * (CANVAS_SIZE / SCALE)),
      y: Math.floor(Math.random() * (CANVAS_SIZE / SCALE)),
    };
  }

  useEffect(() => {
    const context = canvasRef.current?.getContext("2d");
    const interval = setInterval(() => {
      if (!context || isGameOver) return;

      const newSnake = [...snake];
      const head = { ...newSnake[0] };
      head.x += direction.x;
      head.y += direction.y;

      // Wall collision or self collision
      if (
        head.x < 0 || head.y < 0 ||
        head.x >= CANVAS_SIZE / SCALE || head.y >= CANVAS_SIZE / SCALE ||
        newSnake.some(segment => segment.x === head.x && segment.y === head.y)
      ) {
        setIsGameOver(true);
        return;
      }

      newSnake.unshift(head);

      if (head.x === food.x && head.y === food.y) {
        setFood(randomFood());
      } else {
        newSnake.pop();
      }

      setSnake(newSnake);

      // Draw
      context.fillStyle = "black";
      context.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

      context.fillStyle = "lime";
      newSnake.forEach(({ x, y }) =>
        context.fillRect(x * SCALE, y * SCALE, SCALE, SCALE)
      );

      context.fillStyle = "red";
      context.fillRect(food.x * SCALE, food.y * SCALE, SCALE, SCALE);
    }, 150);

    return () => clearInterval(interval);
  }, [snake, direction, food, isGameOver]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
          if (direction.y === 0) setDirection({ x: 0, y: -1 });
          break;
        case "ArrowDown":
          if (direction.y === 0) setDirection({ x: 0, y: 1 });
          break;
        case "ArrowLeft":
          if (direction.x === 0) setDirection({ x: -1, y: 0 });
          break;
        case "ArrowRight":
          if (direction.x === 0) setDirection({ x: 1, y: 0 });
          break;
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [direction]);

  const restart = () => {
    setSnake(INITIAL_SNAKE);
    setFood(randomFood());
    setDirection(INITIAL_DIRECTION);
    setIsGameOver(false);
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-8">
      <canvas
        ref={canvasRef}
        width={CANVAS_SIZE}
        height={CANVAS_SIZE}
        className="border border-gray-400 bg-black"
      />
      {isGameOver && (
        <div className="text-center">
          <p className="text-red-500 font-bold text-xl">Game Over</p>
          <button
            onClick={restart}
            className="mt-2 px-4 py-2 bg-green-600 text-white rounded"
          >
            Restart
          </button>
        </div>
      )}
    </div>
  );
}
