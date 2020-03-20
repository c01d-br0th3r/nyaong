import React from "react";
import { api } from "../api";
import HomePresenter from "./HomePresenter";

class Home extends React.Component {
  state = {
    info: [],
    isLoading: true,
    img: [],
    error: "",
    imgLoading: true,
    breedID: "abys",
    id: 0
  };

  handleChange = event => {
    const select = event.target;
    const itemID = select.options[select.selectedIndex].id;
    const id = select.options[select.selectedIndex].index;
    this.setState({ breedID: itemID, imgLoading: true, id });
  };

  componentDidUpdate = async () => {
    const { imgLoading, breedID } = this.state;
    if (imgLoading) {
      try {
        const img = [];
        for (let i = 0; i < 9; i++) {
          const d = await api.getImage(breedID);
          img.push(d.data[0].url);
        }
        this.setState({ img });
      } catch {
        this.setState({ error: "Can't Load Images." });
      } finally {
        this.setState({ imgLoading: false });
      }
    }
  };

  componentDidMount = async () => {
    try {
      const { data } = await api.getInfo();
      this.setState({ info: data });
    } catch {
      this.setState({ error: "Error!" });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    console.log(this.state);
    const { isLoading, info, img, id, imgLoading } = this.state;
    return (
      <HomePresenter
        isLoading={isLoading}
        info={info}
        onChange={this.handleChange}
        images={img}
        idx={id}
        imgLoading={imgLoading}
      />
    );
  }
}

export default Home;
