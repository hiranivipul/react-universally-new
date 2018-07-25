import React, { Component } from "react";
import Helmet from "react-helmet";
// import qwest from "qwest";
import InfiniteScroll from "react-infinite-scroller";
// import AsyncLoader from "../Services/AsyncLoader";
import axios from "axios";
import AsyncLoader from "../Services/AsyncLoader";
import Rating from "react-rating";

const api = {
  baseUrl: "http://192.168.1.35/laravel/laravel_api/api/"
  // baseUrl: "https://api.soundcloud.com",
  // client_id: "caf73ef1e709f839664ab82bef40fa96"
};

class AsyncLazyLoad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [],
      hasMoreItems: true,
      nextHref: null,
      offset: 0
    };
  }

  loadItems(page) {
    let that = this;

    let url = api.baseUrl + "all-data";
    if (this.state.nextHref) {
      url = this.state.nextHref;
    }

    axios.get(url, {
      params: {
        limit: 48,
        offset: this.state.offset
      }
    }).then(function(resp) {
      resp = resp.data;
      console.log(resp);
      if (resp) {
        let tracks = that.state.tracks;
        resp.data.map((track) => {
          tracks.push(track);
        });

        if ((resp.meta.offset + resp.meta.limit) < resp.meta.total) {
          resp.meta.offset = (resp.meta.offset + resp.meta.limit) > resp.meta.total ? resp.meta.total : (resp.meta.offset + resp.meta.limit);
          that.setState({
            offset: resp.meta.offset,
            tracks: tracks,
            nextHref: resp.next_href
          });
        } else {
          that.setState({
            hasMoreItems: false
          });
        }
      }
    });
  }

  static handleRate(rate, id) {
    console.log(rate + " - " + id);
  }

  render() {
    const loader = <AsyncLoader key={1}/>;

    let items = [];
    this.state.tracks.map((track, i) => {
      items.push(
        <div className='col col-md-2' key={i}>
          <a href={track.permalink_url} target="_blank">
            <img src={track.artwork_url} width="150" height="150"/>
            <p
              className="title">{track.id} {" - "} {track.title.length > 20 ? track.title.substr(0, 20) + "..." : track.title}</p>
            <span>
            <Rating emptySymbol="fa fa-star-o fa-2x" fullSymbol="fa fa-star fa-2x" initialRating={track.rating}
                    onChange={rate => AsyncLazyLoad.handleRate(rate, track.id)}
            />
          </span>
          </a>
        </div>
      );
    });

    return (
      <div>
        <Helmet>
          <title>Counter</title>
        </Helmet>
        <div>
          <InfiniteScroll pageStart={0} loadMore={this.loadItems.bind(this)} hasMore={this.state.hasMoreItems}
                          loader={loader}>
            <div className="tracks">
              {items}
            </div>
          </InfiniteScroll>
        </div>

      </div>
    );
  }
}

export default AsyncLazyLoad;
