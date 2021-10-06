import axios from "axios";
import react, { useState, useEffect } from "react";
import "./page.css";
import LinkTo from "./projectimages/LinkTo.png";

const LinksPage = () => {
  const [postList, setPostList] = useState([]);
  const [urlCount, setUrlCount] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://ghost-blog.ipxp.in/ghost/api/v4/content/posts/?key=8196190b08906dda0ebf6e6f5d"
      )
      .then(function (response) {
        console.log(
          "Posts Data",
          response.data.posts.map((item) => item.url)
        );
        console.log("Posts Data", response.data.posts);
        setUrlCount(response.data.posts.length);

        setPostList(response.data.posts);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  return (
    <div>
      <div className="row">
        <div className="col-xl-11  mx-auto card-background p-5 mt-5">
          <p className="text-center main-heading-text mb-5">Links Page</p>
          <div className="row">
            <div
              className="col-xl-3  posts-card-style"
              style={{ maxHeight: "150px", maxWidth: "300px" }}
            >
              <p className="title-text text-center">Total number of links</p>
              <p className="text-center title-text-count mt-4">{urlCount}</p>
            </div>
            <div className="col-xl-3  mx-auto posts-card-style">
              <p className="title-text text-center">Internal Links</p>

              <div className="row">
                {postList &&
                  postList.map((item) => (
                    <>
                      <div className="col-xl-10 ">
                        <p>
                          {item.url.slice(0, 27) ==
                          "https://ghost-blog.ipxp.in/" ? (
                            <p className="post-description-text underline-style p-2">
                              {item.title}
                            </p>
                          ) : (
                            <></>
                          )}
                        </p>
                      </div>
                      <div className="col-xl-2 ">
                        <p>
                          {item.url.slice(0, 27) ==
                          "https://ghost-blog.ipxp.in/" ? (
                            <a href={item.url} target="_blank">
                              <img
                                src={LinkTo}
                                style={{ height: "25px", width: "25px" }}
                              ></img>
                            </a>
                          ) : (
                            <></>
                          )}
                        </p>
                      </div>
                    </>
                  ))}
              </div>
            </div>
            <div className="col-xl-3  mx-auto posts-card-style">
              <p className="title-text text-center">Extrenal Links</p>

              <div className="row">
                {postList &&
                  postList.map((item) => (
                    <>
                      <div className="col-xl-10 ">
                        <p>
                          {item.url.slice(0, 27) ==
                          !"https://ghost-blog.ipxp.in/" ? (
                            item.title
                          ) : (
                            <></>
                          )}
                        </p>
                      </div>
                      <div className="col-xl-2 ">
                        <p>
                          {item.url.slice(0, 27) ==
                          !"https://ghost-blog.ipxp.in/" ? (
                            <a href={item.url} target="_blank">
                              <img
                                src={LinkTo}
                                style={{ height: "25px", width: "25px" }}
                              ></img>
                            </a>
                          ) : (
                            <></>
                          )}
                        </p>
                      </div>
                    </>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinksPage;
