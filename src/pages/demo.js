import React, { Component } from "react"
import DemoChart from "../components/demochart"
import { range as d3Range } from "d3"

class Demo extends Component  {
    state = { 
        data: d3Range(10).map(Math.random),
        currentIndex: null
    }
     
    addData = () => this.setState({
        data: [...this.state.data, Math.random()]
    })

    setCurrentIndex = currentIndex => this.setState({
        currentIndex
    })

    render() {
        const { data, currentIndex } = this.state

        return (
            <div>
                <h1>d3 chart demo</h1>
                <button
                    label={"Button"}
                    onClick={this.addData}
                />
                <p>
                    {data.length} datapoints
                    <br />
                    <small>{currentIndex !== null ? data[currentIndex] : "-"}</small>
                </p>
                <svg width="100%" height="500">
                    <DemoChart
                        data={data}
                        width={500}
                        height={250}
                        x={0}
                        y={0}
                        highlightBar={this.setCurrentIndex}
                        highlightedBar={currentIndex}
                    />
                </svg>
            </div>
        )
    }
}

export default Demo