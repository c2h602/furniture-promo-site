import { Outlet } from "react-router";
import { workPoints } from "../workPoints";

export default function Materials() {
  const pointList = workPoints.map((point) => (
    <div className="point-card" key={point.id}>
      <h3>{point.title}</h3>
      <p>{point.description}</p>
    </div>
  ));
  return (
    <>
      <div className="materials__container">

        <div className="title-materials__container">
          <h2>Как мы работаем</h2>
        </div>

        <div>
          <ul className="point-box">
            <p>Алгоритм работы с нами для удобства и понимания проекта</p>
            {pointList}
          </ul>
        </div>
      </div>

      <Outlet />
    </>
  );
}
