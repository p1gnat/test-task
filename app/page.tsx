"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "../styles/globals.scss";
import { useStore } from "../store/useStore";

type Input = {
  name: string;
};

export default function Home() {
  const router = useRouter();
  const { handleSubmit, register } = useForm<Input>();
  const { setName } = useStore();

  const onSubmit: SubmitHandler<Input> = (data, event) => {
    const submitter = (event?.nativeEvent as SubmitEvent)
      ?.submitter as HTMLButtonElement | null;

    if (data.name) {
      setName(data.name);
      if (typeof window !== "undefined") {
        localStorage.setItem("name", data.name);
      }
    }

    if (submitter) {
      if (submitter.name === "calculator") {
        router.push("/calculator");
      } else if (submitter.name === "password") {
        router.push("/password");
      }
    }
  };

  const onClick = () => {
    return router.push("/password");
  };

  return (
    <div className="home-main">
      <div className="home-border">
        <div className="home-image" onClick={onClick}>
          <Image
            src="/images/close.svg"
            alt="Нажмите чтобы пропустить форму и продолжить"
            width="24"
            height="24"
          />
        </div>

        <h1 className="home-h1">Начать</h1>
        <form className="home-form" onSubmit={handleSubmit(onSubmit)}>
          <label className="home-label">Напишите ваше имя</label>
          <input
            type="text"
            placeholder="Ваше имя"
            className="home-input"
            {...register("name")}
          />
          <div className="form-buttons">
            <button type="submit" className="home-submit" name="calculator">
              Открыть калькулятор
            </button>
            <button type="submit" className="home-submit" name="password">
              Открыть генератор
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
