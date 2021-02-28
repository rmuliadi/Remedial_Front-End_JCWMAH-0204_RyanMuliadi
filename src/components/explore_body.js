import React, { Component } from "react";
import axios from "axios";

class explore_body extends Component {
  state = {
    videos: [],
  };

  componentWillMount() {
    axios
      .get(
        "https://54c646b8-43a4-470f-aeae-7fc359b431ee.mock.pstmn.io/ujian_remed_api"
      )
      .then((result) => {
        this.setState({
          videos: result.data,
        });
      });
  }
  render() {
    const videos1 = this.state.videos.map((item, index) => {
      return (
        <div className="thumbnail">
          <img src={item.image_url} alt="" />
        </div>
      );
    });
    const videos2 = this.state.videos.map((item, index) => {
      return (
        <div className="details">
          <div className="text">
            <br />
            <h3>{item.title}</h3>
            <a href="#">{item.channel_name}</a>
            <span>{item.views}</span>
            <span>{item.created}</span>
            <span>{item.description}</span>
          </div>
        </div>
      );
    });
    return (
      <div>
        <div className="mainBody">
          <div className="videos">
            <div className="row">
              <div className="column1">
                <div className="videosGrid">
                  <div className="video">{videos1}</div>
                </div>
              </div>
              <div className="column2">
                <div className="videosGrid">
                  <div className="video">{videos2}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default explore_body;
