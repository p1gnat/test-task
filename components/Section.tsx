"use client";

import useCalculator from "@/store/useStore"; // Zustand store import
import "@/styles/globals.scss"; // Styling import
import Image from "next/image";
import { useEffect } from "react";

export default function S1() {
  return (
    <section className="calculator">
      <section className="calculator-inner">
        <section className="calculator-content">
          <Ar1 />
          <Ar2 />
        </section>
      </section>
    </section>
  );
}

// Display component showing the current input and the operation
function Ar1() {
  const x = useCalculator((state) => state.x); // Current input value
  const p1 = useCalculator((state) => state.p1); // First operand
  const p2 = useCalculator((state) => state.p2); // Operation symbol

  return (
    <article className="calculator-article">
      <div className="calculator-article-container">
        <p className="calculator-text-small">
          {p1} {p2}
        </p>
        <p className="calculator-text-large">{x}</p>
      </div>
    </article>
  );
}

// Button section for input and operations
function Ar2() {
  const x1 = useCalculator((state) => state.x1);
  const x2 = useCalculator((state) => state.x2);
  const x3 = useCalculator((state) => state.x3);
  const x4 = useCalculator((state) => state.x4);
  const x5 = useCalculator((state) => state.x5);
  const x6 = useCalculator((state) => state.x6);
  const x7 = useCalculator((state) => state.x7);
  const x8 = useCalculator((state) => state.x8);
  const x9 = useCalculator((state) => state.x9);
  const x0 = useCalculator((state) => state.x0);
  const xm = useCalculator((state) => state.xm);
  const xa = useCalculator((state) => state.xa);
  const xc = useCalculator((state) => state.xc);
  const xce = useCalculator((state) => state.xce);
  const xpercent = useCalculator((state) => state.xpercent);
  const xp = useCalculator((state) => state.xp);
  const xmm = useCalculator((state) => state.xmm);
  const xd = useCalculator((state) => state.xd);
  const xz = useCalculator((state) => state.xz);
  const equal = useCalculator((state) => state.equal);

  // Keyboard event listener
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "1":
          x1();
          break;
        case "2":
          x2();
          break;
        case "3":
          x3();
          break;
        case "4":
          x4();
          break;
        case "5":
          x5();
          break;
        case "6":
          x6();
          break;
        case "7":
          x7();
          break;
        case "8":
          x8();
          break;
        case "9":
          x9();
          break;
        case "0":
          x0();
          break;
        case "+":
          xp();
          break;
        case "-":
          xmm();
          break;
        case "/":
          xd();
          break;
        case "*":
        case "x":
          xz();
          break;
        case "%":
          xpercent();
          break;
        case "=":
        case "Enter":
          equal();
          break;
        case ".":
          xa();
          break;
        case "Backspace":
          xce();
          break;
        case "Escape":
          xc();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    x1,
    x2,
    x3,
    x4,
    x5,
    x6,
    x7,
    x8,
    x9,
    x0,
    xm,
    xa,
    xc,
    xce,
    xpercent,
    xp,
    xmm,
    xd,
    xz,
    equal,
  ]);

  return (
    <section className="calculator-buttons">
      <button onClick={xc} className="calculator-button-top">
        C
      </button>
      <button onClick={xm} className="calculator-button-top">
        +/-
      </button>
      <button onClick={xpercent} className="calculator-button-top">
        %
      </button>
      <button onClick={xd} className="calculator-action-button">
        /
      </button>
      <button onClick={x7} className="calculator-button">
        7
      </button>
      <button onClick={x8} className="calculator-button">
        8
      </button>
      <button onClick={x9} className="calculator-button">
        9
      </button>
      <button onClick={xz} className="calculator-action-button">
        ×
      </button>
      <button onClick={x4} className="calculator-button">
        4
      </button>
      <button onClick={x5} className="calculator-button">
        5
      </button>
      <button onClick={x6} className="calculator-button">
        6
      </button>
      <button onClick={xmm} className="calculator-action-button">
        -
      </button>
      <button onClick={x1} className="calculator-button">
        1
      </button>
      <button onClick={x2} className="calculator-button">
        2
      </button>
      <button onClick={x3} className="calculator-button">
        3
      </button>
      <button onClick={xp} className="calculator-action-button">
        +
      </button>
      <button onClick={xa} className="calculator-button">
        .
      </button>
      <button onClick={x0} className="calculator-button">
        0
      </button>
      <button onClick={xce} className="calculator-button">
        <Image
          src="images/delete.svg"
          width="32"
          height="32"
          alt="delete"
        ></Image>
      </button>
      <button onClick={equal} className="calculator-action-button">
        =
      </button>
    </section>
  );
}
