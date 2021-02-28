import React, { Component } from "react";
import axios from "axios";

class homepage_body extends Component {
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
    const videos = this.state.videos.map((item, index) => {
      return (
        <div className="video">
          <div className="thumbnail">
            <img src={item.image_url} alt="" />
          </div>
          <div className="details">
            <div className="author">
              <img src={item.profile_pict_url} alt="" />
            </div>
            <div className="text">
              <h3>{item.title}</h3>
              <a href="#">{item.channel_name}</a>
              <span>{item.views}</span>
              <span>{item.created}</span>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <div className="mainBody">
          <div className="videos">
            <div className="videosGrid">{videos}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default homepage_body;
