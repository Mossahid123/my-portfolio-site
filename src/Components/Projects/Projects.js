import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Pages/Shared/Loading/Loading";
import "./Projects.css";

const Projects = () => {
  const { projectId } = useParams();
  const url = "/projects.json";
  const { data: details, isLoading } = useQuery([projectId, "prodetails"], () =>
    fetch(url).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  const detail = details.find((detail) => detail.id.toString() === projectId);

  return (
    <div className="full-section">
      <h2>Project Detail Information</h2>
      <div className="full-div">
        <div className="image">
          <img src={detail.image} alt="" />
        </div>
        <div className="info">
          <h1>{detail.title}</h1>
          <p>{detail.description}</p>
          <div className="link">
            <a href={detail.demo} target="blank" className="btn">
              {" "}
              Live Site
            </a>
            <a href={detail.client} target="blank" className="btn">
              {" "}
              Client Site
            </a>
            <a href={detail.server} target="blank" className="btn">
              {" "}
              Server Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
