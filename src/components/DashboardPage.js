import axios from "axios";
import react, { useState, useEffect } from "react";
import "./page.css";
import arrow from "./projectimages/arrow.png";

const DashboardPage = () => {
  const [postList, setPostList] = useState([]);
  const [pageList, setPageList] = useState([]);

  const [numberOfPosts, setNumberOfPosts] = useState("");
  const [numberOfPages, setNumberOfPages] = useState("");
  const [numberOfAuthor, setNumberOfAuthor] = useState("");
  const [numberOftags, setNumberOfTags] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://ghost-blog.ipxp.in/ghost/api/v4/content/posts/?key=8196190b08906dda0ebf6e6f5d"
      )
      .then(function (response) {
        console.log("Posts Data", response.data.posts);
        console.log("Posts count", response.data.posts.length);
        setNumberOfPosts(response.data.posts.length);

        setPostList(response.data.posts);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get(
        "https://ghost-blog.ipxp.in/ghost/api/v4/content/authors/?key=8196190b08906dda0ebf6e6f5d"
      )
      .then(function (response) {
        console.log("authors data", response.data.authors);
        console.log("author count", response.data.authors.length);
        setNumberOfAuthor(response.data.authors.length);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get(
        "https://ghost-blog.ipxp.in/ghost/api/v4/content/pages/?key=8196190b08906dda0ebf6e6f5d"
      )
      .then(function (response) {
        console.log("pages data", response.data.pages);
        console.log("pages count", response.data.pages.length);
        setNumberOfPages(response.data.pages.length);

        // setPageList(response.data.pages)
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get(
        "https://ghost-blog.ipxp.in/ghost/api/v4/content/tags/?key=8196190b08906dda0ebf6e6f5d"
      )
      .then(function (response) {
        console.log("tags data", response.data);
        console.log("tags count", response.data.tags.length);
        setNumberOfTags(response.data.tags.length);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  return (
    <div>
      <div className="row mt-5 ">
        <div className="col-xl-2 col-lg-2 col-md-5 col-10 mt-5  mx-auto  card-background pt-4 pb-4">
          <p className="text-center title-text">Total Number of Posts</p>
          <p className="text-center title-text-count mt-5">{numberOfPosts}</p>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-5 col-10 mt-5 mx-auto  card-background pt-4 pb-4">
          <p className="text-center title-text">Total Number of Pages</p>
          <p className="text-center title-text-count mt-5">{numberOfPages}</p>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-5 col-10 mt-5 mx-auto  card-background pt-4 pb-4">
          <p className="text-center title-text">Total Number of Tags</p>
          <p className="text-center title-text-count mt-5">{numberOftags}</p>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-5 col-10 mt-5 mx-auto  card-background pt-4 pb-4">
          <p className="text-center title-text">Total Number of Author</p>
          <p className="text-center title-text-count mt-5">{numberOfAuthor}</p>
        </div>
      </div>

      <p className="text-center mt-5 main-heading-text pt-5">
        Top 5 Recent Posts
      </p>
      <div className="row ">
        {postList &&
          postList.slice(0, 5).map((item) => (
            <div
              className="col-xl-3 col-lg-5 col-md-5 col-10 mx-auto  mt-5 card-background"
              style={{ maxWidth: "500px", minWidth: "300px" }}
            >
              <div className="row">
                <div className="col-xl-12 mb-3">
                  <img
                    src={item.feature_image}
                    className="img-fluid p-2"
                    style={{
                      display: "flex",
                      margin: "auto",
                      borderRadius: "30px",
                    }}
                  ></img>
                  <div className="col-xl-11  mx-auto mt-2 post-title-text">
                    <p className="text-center">{item.title}</p>
                  </div>
                  <div className="col-xl-11  mx-auto mt-2 post-description-text">
                    <p className="text-center">
                      {" "}
                      {item.meta_description !== null ? (
                        item.meta_description.slice(0, 200)
                      ) : (
                        <></>
                      )}{" "}
                    </p>
                  </div>
                  <div className="col-xl-11  mx-auto mt-2">
                    {" "}
                    <a
                      href={item.url}
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      <p className="text-center post-link-text">
                        Click to know more{" "}
                        <img
                          style={{ height: "35px", width: "35px" }}
                          src={arrow}
                        ></img>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DashboardPage;
