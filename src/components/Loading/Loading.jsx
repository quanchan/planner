import React from "react";
import Lottie from "react-lottie"
import * as loading from "../../assets/loading/8370-loading.json"



const LoadingScreen = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <div style={{height: "100vh", display: "flex", alignItems: "center"}} >
      <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  )
}

export default LoadingScreen;