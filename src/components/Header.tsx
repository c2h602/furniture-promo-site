import logo from "/src/assets/logo.png";

export default function Header() {
  return (
    <>
      <div className="header__container">

        <div className="logo">
          <a href="/">
            <img src={logo} />
          </a>
        </div>

        <div className="navigation">
          <a href="/about">О нас</a>
          <a href="/projects">Проекты</a>
          <a href="/materials">Материалы</a>
          <a href="/reviews">Отзывы</a>
        </div>

        <div className="phone_number">
          <a href="tel:+7(977)162-94-29">+7 (977) 162-94-29</a>
        </div>

      </div>
    </>
  );
}
