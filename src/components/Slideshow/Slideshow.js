import React, { Component } from "react"
import PrevButton from "./PrevButton"
import NextButton from "./NextButton"
import styled from "@emotion/styled"

const Slides = styled("div")``
const Slide = styled("div")`
  overflow: hidden;
  margin: 0;
  transition: opacity 0.5s ease;
  object-fit: cover;
`

const slides = [
  {
    image: "https://via.placeholder.com/720x400/5f3994/ffffff",
  },
  {
    image: "https://via.placeholder.com/720x400/479a5f/ffffff",
  },
  {
    image: "https://via.placeholder.com/720x400/3e5a64/ffffff",
  },
  {
    image: "https://via.placeholder.com/720x400/c572be/ffffff",
  },
]

class Slideshow extends Component {
  state = {
    slideIndex: 0,
    slideCount: slides.length - 1,
  }

  PrevSlide = () => {
    this.setState(state => ({
      slideIndex:
        state.slideIndex !== 0 ? state.slideIndex - 1 : state.slideCount,
    }))
  }

  NextSlide = () => {
    this.setState(state => ({
      slideIndex:
        state.slideIndex !== state.slideCount ? state.slideIndex + 1 : 0,
    }))
  }

  render() {
    return (
      <>
        <Slides>
          {slides.map((slide, index) => (
            <Slide
              key={index}
              style={{
                opacity: this.state.slideIndex === index ? 1 : 0,
                height: this.state.slideIndex === index ? "auto" : 0,
              }}
            >
              <img src={slide.image} alt="" />
            </Slide>
          ))}
        </Slides>
        <PrevButton onClickHandler={this.PrevSlide} />
        <NextButton onClickHandler={this.NextSlide} />
      </>
    )
  }
}

export default Slideshow
