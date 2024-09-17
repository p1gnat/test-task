"use client";
import { useStore } from "@/store/useStore";
import Link from "next/link";
import { ReactNode } from "react";
import "@/styles/globals.scss";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { name } = useStore();

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
          <h1 className="header-name">
            {name || localStorage.getItem("name")
              ? name || localStorage.getItem("name")
              : ""}
          </h1>
          <p className="circle">
            <span>
              {name || localStorage.getItem("name")
                ? (name ? name.toString() : localStorage.getItem("name"))
                    ?.charAt(0)
                    .toUpperCase()
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
