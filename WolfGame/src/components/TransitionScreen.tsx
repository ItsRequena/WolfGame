import { useEffect, useState } from "react";
import lobo_logo from '../assets/logo_lobo.png'
import "../styles/TransitionScreen.css";

type TransitionScreenProps = {
  duration?: number;
};

export function TransitionScreen({duration = 1000}: TransitionScreenProps) {
  const [active, setActive] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    active && (
      <div className="transition-container">
        <img src={lobo_logo} alt="Transition" className="transition-image" />
      </div>
    )
  );
}
