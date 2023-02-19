import * as React from "react";

interface Props {
  services: any[];
};

export type State = {
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

  render() {
    return (
      <div className="left-0 top-0">
        <div className="flex w-full h-screen relative justify-center items-center">
        This is a test!!!
        </div>
      </div>
    );
  }
}

export default Carousel;
