import { Outlet } from "react-router";

export default function About() {
  return (
    <>
      <div className="about__container">

        <div className="title-about__container">
          <h2>Более 5 лет создаем мебель для вашего комфорта</h2>
        </div>

        <div className="text-about__container">
            
          <div className="description-about__conatainer">
            <p>
              Мы — команда профессионалов, которые могут произвести любую мебель
              для вашего проекта, а также найти производственное решение любой
              задумки.
            </p>

            <p>
              Наша основная цель — реализовывать самые смелые задумки, и делать
              это качественно и аккуратно.
            </p>

            <p>
              В качестве материалов мы используем натуральные — стекло, дерево,
              бетон, камень, металл и эпоксидную смолу.
            </p>
          </div>

          <div className="statictic-about__container">
            <div>
              <h3>1 год</h3>
              <p>гарантии на всю продукцию</p>
            </div>

            <div>
              <h3>300+</h3>
              <p>выполненных проектов</p>
            </div>

            <div>
              <h3>15 дней</h3>
              <p>срок производства</p>
            </div>

          </div>

        </div>

      </div>

      <Outlet />
    </>
  );
}
