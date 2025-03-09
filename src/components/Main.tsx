import small from "/src/assets/main_small.png";
import large from "/src/assets/main_large.png";
import { Outlet } from "react-router";

export default function Main() {
  return (
    <>
      <div className="main__container">
        <div className="text-main__container">
          <div className="title-main__container">
            <h1>Эксклюзивная и нестандартная мебель для дома</h1>
          </div>

          <div className="subtitle-main__container">
            <p>
              Мы можем произвести любую мебель для вашего проекта и найти
              производственное решение любой задумки.
            </p>
          </div>

          <div className="smallImg-main__container">
            <img src={small} />
          </div>
        </div>

        <div className="order-project-main__container">
          <a href="/order">Заказать проект</a>

          <div className="largeImg-main__container">
            <img src={large} />
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
}
