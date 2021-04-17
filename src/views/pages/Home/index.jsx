import React, {useEffect} from "react"
import {getMockData} from "actions/mockAction";
import {connect} from "react-redux";

const Home = (props) => {
  useEffect(() => {
    props.getMockData()
    }
  ,[])

  return (
    <>
      <div>This is home page</div>
      <div> This is a comment by user: {props.data.userId}</div>
      <div> This comment is {props.data.complete? "" : "not"} complete</div>
      <div> Comment's title: {props.data.title}</div>
    </>
  )
}

export default connect(
  ({mock}) => ({
    data: mock.mockData,
  }),
  {
    getMockData
  }
)(Home);