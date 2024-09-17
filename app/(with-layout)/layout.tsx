"use client";
import { useStore } from "@/store/useStore";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import "@/styles/globals.scss";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { name } = useStore();
  const [localName, setLocalName] = useState<string | null>(null);

  useEffect(() => {
    // Client-side only code
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setLocalName(storedName);
    }
  }, []);

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/">Название</Link>
            </li>
            <li>
              <Link href="/">Главная</Link>
            </li>
            <li>
              <Link href="/calculator">Калькулятор</Link>
            </li>
            <li>
              <Link href="/password">Пароли</Link>
            </li>
          </ul>
        </nav>
        <section className="header-section" onClick={() => {}}>
          <h1 className="header-name">{name || localName || ""}</h1>
          <p className="circle">
            <span>
              {name || localName
                ? (name || localName)?.charAt(0).toUpperCase()
                : ""}
            </span>
          </p>
        </section>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
