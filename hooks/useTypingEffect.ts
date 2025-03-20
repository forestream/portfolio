import { useEffect, useRef, useState } from "react";

export default function useTypingEffect(
  frames: string[],
  interval: number,
  delay: number,
) {
  const [frame, setFrame] = useState("");
  const index = useRef<number>(0);
  const timer = useRef<number>(-1);
  const [isWaiting, setIsWaiting] = useState(delay !== 0);

  useEffect(() => {
    if (isWaiting && delay > 0) {
      setTimeout(() => {
        setIsWaiting(false);
      }, delay);
    } else {
      setIsWaiting(false);
    }
  }, [delay, isWaiting]);

  useEffect(() => {
    if (isWaiting) return;

    timer.current = window.setInterval(() => {
      setFrame(frames[index.current++]);
      if (index.current >= frames.length) {
        window.clearInterval(timer.current);
        index.current = 0;
        timer.current = -1;
      }
    }, interval);

    return () => clearInterval(timer.current);
  }, [frames, interval, isWaiting]);

  return { frame };
}
