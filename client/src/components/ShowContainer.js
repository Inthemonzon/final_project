import ShowContainerRender from "./ShowContainerRender";
import { useState, useEffect } from "react";
import { useParams, Link, withRouter } from "react-router-dom"
import Rating from "./Rating";
import { borderBottom } from "@mui/system";


function ShowContainer(props) {
  const [activeShows, setActiveShows] = useState([]);
  const { showId } = props.id || {};
  const [getUser, setUser] = useState({});


  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setUser(data)

          fetch("/shows").then((response) => {
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
        <h2>Featured Shows</h2>
        {activeShows?.map((eachShow) => (
          <div className="showSection">
            <h3>
              <Link to={`/shows/${eachShow.id}`}> {eachShow.title} </Link>
            </h3>
            <img src={eachShow.image_url} />
            <p><b>Genre:</b> {(eachShow.genre).replaceAll(/[\"\[\]]/g, "")}</p>
            <p><b>Description:</b> {(eachShow.description).replaceAll(/\<p\>/g, "").replaceAll(/\<\/p\>/g, "").replaceAll(/\<b\>/g, "").replaceAll(/\<\/b\>/g, "")}</p>
            <div className="ui divider" />
            <Rating ratings={eachShow.ratings} />
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