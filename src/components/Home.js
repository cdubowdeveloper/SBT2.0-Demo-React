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
            <img className="icon" src={inboxImg} />
            <p>
              View a sample inbox and direct chat that shows off the versatility
              of SBT web components!
            </p>
            <button onClick={() => navigate("/inbox")}>Inbox</button>
          </div>
          <div className="container-column">
            <img className="icon" src={codeImg} />
            <p>
              View the source code for this sample project on Github to use in
              your own application.
            </p>
            <button onClick={() => navigate("/inbox")}>Source Code</button>
          </div>{" "}
          <div className="container-column">
            <img className="icon" src={storybooksImg} />
            <p>
              View sample stories and their code in Storybooks to help you build
              UI components.
            </p>
            <button onClick={() => navigate("/inbox")}>Storybooks</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
