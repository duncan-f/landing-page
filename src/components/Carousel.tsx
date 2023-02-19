import React, { Component } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai/index.js";
import Swipe from "react-easy-swipe";

type MainProps = {
  props: any[];
};

type MainState = {
  currentSlide: number;
  paused: boolean;
};

class Carousel extends React.Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props);
    this.state = {
      currentSlide: 0,
      paused: false,
    };
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.paused === false) {
        let newSlide =
          this.state.currentSlide === this.props.services.length - 1
            ? 0
            : this.state.currentSlide + 1;
        this.setState({ currentSlide: newSlide });
      }
    }, 5000);
  }

  nextSlide = () => {
    let newSlide =
      this.state.currentSlide === this.props.services.length - 1
        ? 0
        : this.state.currentSlide + 1;
    this.setState({ currentSlide: newSlide });
  };

  prevSlide = () => {
    let newSlide =
      this.state.currentSlide === 0
        ? this.props.services.length - 1
        : this.state.currentSlide - 1;
    this.setState({ currentSlide: newSlide });
  };

  setCurrentSlide = (index) => {
    this.setState({ currentSlide: index });
  };

  render() {
    return (
      <div className="left-0 top-0">
        <div className="w-full h-screen relative">
          <AiOutlineLeft
            onClick={this.prevSlide}
            className="absolute left-5 text-3xl inset-y-1/2 text-white cursor-pointer"
          />

          <Swipe onSwipeLeft={this.nextSlide} onSwipeRight={this.prevSlide}>
            {this.props.services.map((slide, index) => {
              return (
                <div className="flex items-center justify-center">
                <img
                  src={slide.frontmatter.heroImage}
                  alt={slide.frontmatter.title}
                  key={index}
                  className={
                    index === this.state.currentSlide
                      ? "w-full h-screen object-cover"
                      : "hidden"
                  }
                  onMouseEnter={() => {
                    this.setState({ paused: true });
                  }}
                  onMouseLeave={() => {
                    this.setState({ paused: false });
                  }}
                />
                <div className={
                  index === this.state.currentSlide
                  ? "absolute mx-auto bottom-20 text-center"
                  : "hidden"
                }>
                  <div className="mx-6 text-3xl font-oswald font-bold">
                    <a
                      className="no-underline hover:underline"
                      href={slide.url}
                    >
                      {slide.frontmatter.title}
                    </a>
                  </div>
                  {slide.frontmatter.description && (
                  <div className="mx-8 text-lg">
                    {slide.frontmatter.description}
                  </div>)}
                </div>
                </div>
              );
            })}
          </Swipe>

          <div className="absolute w-full flex justify-center bottom-6">
            {this.props.services.map((element, index) => {
              return (
                <div
                  className={
                    index === this.state.currentSlide
                      ? "h-2 w-2 bg-blue-700 rounded-full mx-2 mb-2 cursor-pointer"
                      : "h-2 w-2 bg-white rounded-full mx-2 mb-2 cursor-pointer"
                  }
                  key={index}
                  onClick={() => {
                    this.setCurrentSlide(index);
                  }}
                ></div>
              );
            })}
          </div>

          <AiOutlineRight
            onClick={this.nextSlide}
            className="absolute right-5 text-3xl inset-y-1/2 text-white cursor-pointer"
          />
        </div>
      </div>
    );
  }
}

export default Carousel;
