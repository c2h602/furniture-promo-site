import { Outlet } from "react-router";
import project1 from "/src/assets/project1.png";
import project2 from "/src/assets/project2.png";
import project3 from "/src/assets/project3.png";
import project4 from "/src/assets/project4.png";
import project5 from "/src/assets/project5.png";
import project6 from "/src/assets/project6.png";
import project7 from "/src/assets/project7.jpg";
import project8 from "/src/assets/project8.jpeg";

export default function Projects() {
  return (
    <>
      <div className="projects__container">
        <div className="title-projects__container">
          <h2>Проекты</h2>
        </div>

        <div className="projects-img">
            <img src={project1}/>
            <img src={project2}/>
            <img src={project3}/>
            <img src={project4}/>
            <img src={project5}/>
            <img src={project6}/>
            <img src={project7}/>
            <img src={project8}/>

            
        </div>
      </div>

      <Outlet />
    </>
  );
}
