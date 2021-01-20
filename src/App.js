import React from "react";
import "./style.css";
import "antd/dist/antd.css";
import { connect } from "react-redux";
//
import IMEIgen from "./component/item/IMEIgen";

function App({imeiReducer}) {
  console.log(imeiReducer)
  return <IMEIgen />;
}
const mapStateToProps = state => {
  return {
    imeiReducer: state.imeiReducer
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
