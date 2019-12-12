import React from "react"
import styled from "@emotion/styled"
import Pie from "./pie"
// import Bar from "./bar"
import { Slider } from "antd"
import "antd/dist/antd.css"

const Container = styled.div`
  text-align: center;
`

const PlotContainer = styled.div`
  text-align: center;
  height: 60%;
`
const SliderContainer = styled.div`
  width: 100vh;
  align-items: center;
  justify-content: end;
  flex-direction: row;
`

const OuterContainer = styled.div`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 78vh;
`

const NameHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 0;
`

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          id: "stylus",
          label: "stylus",
          value: 45,
          color: "hsl(186, 70%, 50%)",
        },
        {
          id: "rust",
          label: "rust",
          value: 32,
          color: "hsl(303, 70%, 50%)",
        },
        {
          id: "haskell",
          label: "haskell",
          value: 28,
          color: "hsl(244, 70%, 50%)",
        },
        {
          id: "go",
          label: "go",
          value: 52,
          color: "hsl(224, 70%, 50%)",
        },
        {
          id: "sass",
          label: "sass",
          value: 1,
          color: "hsl(33, 70%, 50%)",
        },
      ],
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(val, id) {
    console.log("-->", val)

    this.setState(state => ({
      data: state.data.map((dat, index) => {
        if (index === id) {
          return { ...dat, value: val }
        }
        return dat
      }),
    }))
  }

  render() {
    console.log(this.state)
    return (
      <OuterContainer>
        <Container>
          <NameHeader>{"donuts :)"}</NameHeader>
        </Container>
        <>
          <br /> <br />
          <PlotContainer>
            <Pie data={this.state.data} />
            {/* <Bar data={this.state.data} /> */}
          </PlotContainer>
        </>
        <SliderContainer>
          <Slider
            key="0"
            defaultValue={this.state.data[0].value}
            min={0}
            max={100}
            step={1}
            onChange={value => this.handleChange(value, 0)}
          />
          <Slider
            key="1"
            step={1}
            min={0}
            max={100}
            defaultValue={this.state.data[1].value}
            onChange={value => this.handleChange(value, 1)}
          />
          <Slider
            key="2"
            step={1}
            min={0}
            max={100}
            defaultValue={this.state.data[2].value}
            onChange={value => this.handleChange(value, 2)}
          />
          <Slider
            key="3"
            step={1}
            min={0}
            max={100}
            defaultValue={this.state.data[3].value}
            onChange={value => this.handleChange(value, 3)}
          />
          <Slider
            key="4"
            step={1}
            min={0}
            max={100}
            defaultValue={this.state.data[4].value}
            onChange={value => this.handleChange(value, 4)}
          />
        </SliderContainer>
      </OuterContainer>
    )
  }
}

export default Main
