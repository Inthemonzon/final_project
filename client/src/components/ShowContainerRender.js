import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ShowContainerRender({ user }) {
    const [show, setShow] = useState({});
    const { id } = useParams();
    const [isLoaded, setIsLoaded] = useState(false);
  
    useEffect(() => {
      fetch(`/shows/${id}`).then((r) => {
        if (r.ok) {
          r.json().then((show) => {
            setShow(show);
            setIsLoaded(true);
          });
        }
      });
    }, [id]);
  
    const { title, genre, description, image_url } = show;
  
    return (
      <>
        {/* {errors.length > 0? errors.map((error) => <p>{error}</p>) : null} */}
        {isLoaded ? (
          <div className="show">
            <article>
              <h1>{title}</h1>
              <div className="ui divider" />
              <small>
                <h4>{genre}</h4>
              </small>
              <small>
                <h4>{description}</h4>
              </small>
              <div className="ui divider" />
              <div className="image">
                <img
                 src={image_url}
                 alt="image"
                 style={({ height: "60%" }, { width: "60%" })}
                />
            </div>
              <Link to={"/"}>
                <button className="show-button">Back to List</button>
              </Link>
            </article>
          </div>
        ) : (
          <div className="show">
            <h1 style={{ color: "red" }}>
              Please Signup or Login to see show details.{" "}
            </h1>
          </div>
        )}
      </>
    );
  }
  
  export default ShowContainerRender;