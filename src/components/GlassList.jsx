import React, { Component } from "react";
import ImgList from "./ImgList";

export class GlassList extends Component {
  state = {
    glassImg: "./img/glassesImage/v2.png",
    glassName: "GUCCI G8759H",
    glassCost: 50,
  };

  handleClick = (version) => {
    let urlImg = "";
    let name = "";
    let cost = 0;

    switch (version) {
      case "v1":
        urlImg = "./img/glassesImage/v1.png";
        name = "GUCCI G8850U";
        cost = 30;
        break;
      case "v3":
        urlImg = "./img/glassesImage/v3.png";
        name = "DIOR D6700HQ";
        cost = 40;
        break;
      case "v4":
        urlImg = "./img/glassesImage/v4.png";
        name = "DIOR D6005U";
        cost = 35;
        break;
      case "v5":
        urlImg = "./img/glassesImage/v5.png";
        name = "PRADA P8750";
        cost = 32;
        break;
      case "v6":
        urlImg = "./img/glassesImage/v6.png";
        name = "PRADA P9700";
        cost = 36;
        break;
      case "v7":
        urlImg = "./img/glassesImage/v7.png";
        name = "FENDI F8750";
        cost = 29;
        break;
      case "v8":
        urlImg = "./img/glassesImage/v8.png";
        name = "FENDI F8500";
        cost = 37;
        break;
      case "v9":
        urlImg = "./img/glassesImage/v9.png";
        name = "FENDI F4300";
        cost = 45;
        break;
      default:
        urlImg = "./img/glassesImage/v2.png";
        name = "GUCCI G8759H";
        cost = 50;
        break;
    }
    this.setState({
        glassImg : urlImg,
        glassName : name,
        glassCost : cost,
    })
  };

  render() {
    return (
      <div className="container row">
        <ImgList glass = {this.state}/>
        <section className="glasses__list mt-4 d-flex justify-content-around flex-wrap col-7">
          <div className="col-3">
            <button className="btn btn-outline-secondary" onClick={()=> {this.handleClick('v1')}}>
              <img
                src="./img/glassesImage/v1.png"
                alt="hinh"
                style={{ width: 100, borderRadius: 20 }}
              />
            </button>
          </div>
          <div className="col-3">
            <button className="btn btn-outline-secondary" onClick={()=> {this.handleClick('v2')}}>
              <img
                src="./img/glassesImage/v2.png"
                alt="hinh"
                style={{ width: 100, borderRadius: 20 }}
              />
            </button>
          </div>
          <div className="col-3">
            <button className="btn btn-outline-secondary" onClick={()=> {this.handleClick('v3')}}>
              <img
                src="./img/glassesImage/v3.png"
                alt="hinh"
                style={{ width: 100, borderRadius: 20 }}
              />
            </button>
          </div>
          <div className="col-3">
            <button className="btn btn-outline-secondary" onClick={()=> {this.handleClick('v4')}}>
              <img
                src="./img/glassesImage/v4.png"
                alt="hinh"
                style={{ width: 100, borderRadius: 20 }}
              />
            </button>
          </div>
          <div className="col-3">
            <button className="btn btn-outline-secondary" onClick={()=> {this.handleClick('v5')}}>
              <img
                src="./img/glassesImage/v5.png"
                alt="hinh"
                style={{ width: 100, borderRadius: 20 }}
              />
            </button>
          </div>
          <div className="col-3">
            <button className="btn btn-outline-secondary" onClick={()=> {this.handleClick('v6')}}>
              <img
                src="./img/glassesImage/v6.png"
                alt="hinh"
                style={{ width: 100, borderRadius: 20 }}
              />
            </button>
          </div>
          <div className="col-3">
            <button className="btn btn-outline-secondary" onClick={()=> {this.handleClick('v7')}}>
              <img
                src="./img/glassesImage/v7.png"
                alt="hinh"
                style={{ width: 100, borderRadius: 20 }}
              />
            </button>
          </div>
          <div className="col-3">
            <button className="btn btn-outline-secondary" onClick={()=> {this.handleClick('v8')}}>
              <img
                src="./img/glassesImage/v8.png"
                alt="hinh"
                style={{ width: 100, borderRadius: 20 }}
              />
            </button>
          </div>
          <div className="col-3">
            <button className="btn btn-outline-secondary" onClick={()=> {this.handleClick('v9')}}>
              <img
                src="./img/glassesImage/v9.png"
                alt="hinh"
                style={{ width: 100, borderRadius: 20 }}
              />
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default GlassList;
