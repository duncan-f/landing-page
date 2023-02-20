import * as React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

interface Props {
  services: any[];
};

type State = {
  currentSlide: number;
  paused: boolean;
};

class Carousel extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      currentSlide: 0,
      paused: false
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

  setCurrentSlide = (index: number) => {
    this.setState({ currentSlide: index });
  };

  render() {
    return (
      <div className="left-0 top-0">
        <div className="w-full h-screen relative">
          <AiOutlineLeft
            onClick={this.prevSlide}
            className="absolute left-10 text-3xl inset-y-1/2 text-white cursor-pointer"
          />

        {this.props.services.map((slide, index) => {
          return (
            <>
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
                  ? "absolute bottom-0 pt-5 text-center bg-slate-50/40 dark:bg-gray-900/40 w-full h-60 md:h-40"
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
            </>
          );
        })}

          <div className="absolute w-full flex justify-center bottom-20 md:bottom-6">
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
            className="absolute right-10 text-3xl inset-y-1/2 text-white cursor-pointer"
          />
        </div>
      </div>
    );
  }
}

export default Carousel;
