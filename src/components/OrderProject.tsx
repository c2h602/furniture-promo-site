import { Outlet } from "react-router";
import { OrderForm } from "./OrderForm";
import appStore from "/src/assets/appStore.png";
import googlePlay from "/src/assets/googlePlay.png";
import orderProject from "/src/assets/orderProject.png";

export default function OrderProject() {
  return (
    <>
      <div className="order-project__container">
        
        <div className="img_order-project__container">
          <img src={orderProject} />
        </div>

        <div className="order-form-box">
          <div className="title_order-project__container">
            <h2>Хотите заказать проект?</h2>
            <p>Оставьте заявку, и мы вам перезвоним</p>
          </div>

          <OrderForm />

          <div className="app-link">
            <a href="#">
              <img src={appStore} />
            </a>

            <a href="#">
              <img src={googlePlay} />
            </a>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
}
