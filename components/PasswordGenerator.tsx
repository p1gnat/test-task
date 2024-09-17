"use client";

import { useState } from "react";
import { generatePasswords } from "../utils/generatePassword";
import { usePasswordStore } from "@/store/useStore";
import "@/styles/globals.scss";
import Image from "next/image";

export default function PasswordGenerator() {
  const {
    passwordLength,
    useBigLetters,
    useSmallLetters,
    useNumbers,
    useSpecialSymbols,
    avoidRepetition,
    setPasswordLength,
    toggleBigLetters,
    toggleSmallLetters,
    toggleNumbers,
    toggleSpecialSymbols,
    toggleAvoidRepetition,
  } = usePasswordStore();

  const [passwords, setPasswords] = useState<string[]>([
    "Ожидаю...",
    "Ожидаю...",
    "Ожидаю...",
    "Ожидаю...",
    "Ожидаю...",
  ]);
  const [error, setError] = useState<string>("");
  const [len, setLen] = useState<number>(12);

  const handleGenerate = () => {
    const newPasswords = generatePasswords(
      passwordLength,
      useBigLetters,
      useSmallLetters,
      useNumbers,
      useSpecialSymbols,
      avoidRepetition
    );
    setPasswords(newPasswords);
  };

  const handleLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const length = parseInt(inputValue, 10);
    if (length <= 100 && length > 0) {
      setLen(length);
      setPasswordLength(length);
      setError("");
    } else if (length > 100) {
      setLen(length);
      setPasswordLength(100);
      setError("");
    } else if (!length) {
      setLen(0);
      setPasswordLength(10);
      setError("Длина должна быть числом или больше 0");
    }
  };

  const copyToClipboard = (password: string) => {
    navigator.clipboard.writeText(password);
  };

  return (
    <>
      <div className="gen-diver-mains">
        <div className="gen-main">
          <h1 className="gen-h1">Генератор паролей:</h1>
          <div className="gen-div">
            <label className="gen-label">Длина пароля: </label>
            <input
              type="text"
              value={len}
              onChange={handleLengthChange}
              placeholder="Напиши длину"
              className="gen-length-input"
            />
            {error && (
              <p style={{ color: "red" }} className="gen-label">
                {error}
              </p>
            )}
            <label className="gen-label">
              <input
                type="checkbox"
                checked={useBigLetters}
                onChange={toggleBigLetters}
                className="gen-checkbox-input"
              />
              Использовать прописные буквы
            </label>
            <label className="gen-label">
              <input
                type="checkbox"
                checked={useSmallLetters}
                onChange={toggleSmallLetters}
                className="gen-checkbox-input"
              />
              Использовать строчные буквы
            </label>
            <label className="gen-label">
              <input
                type="checkbox"
                checked={useNumbers}
                onChange={toggleNumbers}
                className="gen-checkbox-input"
              />
              Использовать цифры
            </label>
            <label className="gen-label">
              <input
                type="checkbox"
                checked={useSpecialSymbols}
                onChange={toggleSpecialSymbols}
                className="gen-checkbox-input"
              />
              Использовать символы: %, *, ), ?, @, #, $, ~
            </label>
            <label className="gen-label">
              <input
                type="checkbox"
                checked={avoidRepetition}
                onChange={toggleAvoidRepetition}
                className="gen-checkbox-input"
              />
              Избегать повторения символов
            </label>
          </div>

          <button onClick={handleGenerate} className="gen-button">
            Сгенерировать пароль
          </button>
        </div>
        <div className="gen-password-box">
          {passwords.map((password, index) => (
            <section key={index} className="gen-password-section">
              <p className="gen-password-name">{password}</p>
              <button
                onClick={() => copyToClipboard(password)}
                className="gen-password-copy"
              >
                <Image
                  src="images/copy.svg"
                  width="24"
                  height="24"
                  alt="copy"
                ></Image>
              </button>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
