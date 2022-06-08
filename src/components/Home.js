import "../styles/Home.css";
import { useNavigate } from "react-router-dom";
import codeImg from "../assets/13706.png";
import inboxImg from "../assets/inbox.png";
import storybooksImg from "../assets/storybooks.png";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div>
        <h1 className="title">SBT Client App</h1>
        <div className="container-row">
          <div className="container-column">
            <img className="icon" src={inboxImg} alt="" />
            <p>
              View a sample inbox and direct chat that shows off the versatility
              of SBT web components!
            </p>
            <button onClick={() => navigate("/inbox")}>Inbox</button>
          </div>
          <div className="container-column">
            <img className="icon" src={codeImg} alt="" />
            <p>
              View the source code for this sample project on Github to use in
              your own application.
            </p>
            <button
              onClick={() =>
                window.open(
                  "https://github.com/cdubowdeveloper/SBT2.0-Demo-React"
                )
              }
            >
              Source Code
            </button>
          </div>
          <div className="container-column">
            <img className="icon" src={storybooksImg} alt="" />
            <p>
              View sample stories and their code in Storybooks to help you build
              UI components.
            </p>
            <button
              onClick={() =>
                window.open(
                  "https://developers.solutionsbytext.com/docs/t2c2.0mfe/storybook-static/index.html?path=/story/t2c-2-0-introduction--page"
                )
              }
            >
              Storybooks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
