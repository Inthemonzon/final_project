import ShowContainerRender from "./ShowContainerRender";
import { useState, useEffect } from "react";
import { useParams, Link, withRouter } from "react-router-dom"
import Rating from "./Rating";


function ShowContainer(props) {
  const [activeShows, setActiveShows] = useState([]);
  const { showId } = props.id || {};
  const [getUser, setUser] = useState({});
  const [rating, setRating] = useState(null);


  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setUser(data)

          fetch("/shows?id=" + data.id).then((response) => {
            if (response.ok) {
              response.json().then((shows) => {
                console.log(shows)
                setActiveShows(shows);
              });
            }
          });
        });
      }
    });
  }, []);

  function handleDeleteClick() {
    fetch(`shows`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((r) => r.json());
  }

  function RenderMyShows() {
    console.log(props)
    return (
      <main className="show">
        <h2>My Shows</h2>
        {activeShows?.map((eachShow) => (
          <div>
            <h3>
              <Link to={`/shows/${eachShow.id}`}> {eachShow.title} </Link>
            </h3>
            <img src={eachShow.image_url} />
            <p>Genre: {eachShow.genre}</p>
            <p>Description: {eachShow.description}</p>
            <div className="ui divider" />
            <Rating />
            {/* <button onClick={handleDeleteClick}>Remove Show</button> */}
          </div>
        ))}
      </main>
    );
  }

  return (
    <div>
      <>
      {showId ? (
        <ShowContainerRender />
      ) : (
        <RenderMyShows />
      )}
      </>
    </div>
  );
}

export default withRouter(ShowContainer);