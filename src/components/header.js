import React, { Component } from "react";
import { Link } from "react-router-dom";

class header extends Component {
  render() {
    return (
      <div>
        <div className="searchBar">
          <div className="logo">
            <button className="btn pl-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-menu-button-wide"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v2A1.5 1.5 0 0 1 14.5 5h-13A1.5 1.5 0 0 1 0 3.5v-2zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-13z" />
                <path d="M2 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm10.823.323l-.396-.396A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
              </svg>
            </button>
            <Link className={`nav-link ${this.props.navHome}`} to="/">
              <button className="btn pl-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-house"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                  />
                </svg>
              </button>
            </Link>
            <Link className={`nav-link ${this.props.navExplore}`} to="/explore">
              <button className="btn pl-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-compass"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                  <path d="M6.94 7.44l4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" />
                </svg>
              </button>
            </Link>
            <img
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
          <div className="search">
            <form action>
              <input type="text" />
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>
            </form>
          </div>
          <div className="icons">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-mic-fill"
                viewBox="0 0 16 16"
              >
                <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                <path
                  fillRule="evenodd"
                  d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"
                />
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-upload"
                viewBox="0 0 16 16"
              >
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-app"
                viewBox="0 0 16 16"
              >
                <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-bell"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default header;
