// import React, { Component, Fragment } from "react";
// import ReactDOM from "react-dom";
// import ShadertoyReact from "shadertoy-react";
// import styled from "styled-components";

// import VIDEO_SAMPLE from "/assets/video.mp4";
// import IMAGE_SAMPLE from './assets/noise.jpg';

// const fragmentShader = `
// void mainImage( out vec4 fragColor, in vec2 fragCoord )
// {
//   vec2 uv = fragCoord.xy / iResolution.xy;
//   float noise = texture(iChannel0, uv + iTime * 0.1).r * 0.05;
//   float r = texture(iChannel1, uv).r; // shift r channel
//   vec2 gb = texture(iChannel1, uv + noise).gb;
//   fragColor = vec4(r, gb, 1.);
// }`;

// const LoadingScreen = styled.div`
//   opacity: ${({ isLoaded }) => (isLoaded ? "0" : "1")};
//   transition: opacity 1000ms;
//   position: absolute;
//   transform: translate(-50%, -50%);
//   left: 50%;
//   top: 50%;
//   font-size: 30px;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: white;
//   z-index: 5;
// `;

// export default class Textures extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoaded: false
//     };
//   }

//   render() {
//     const { isLoaded } = this.state;
//     return (
//       <Fragment>
//         <LoadingScreen isLoaded={isLoaded}>Loading Textures</LoadingScreen>
//         <ShadertoyReact
//           fs={fragmentShader}
//           textures={[{ url: IMAGE_SAMPLE }, { url: VIDEO_SAMPLE }]}
//           onDoneLoadingTextures={() => this.setState({ isLoaded: true })}
//         />
//       </Fragment>
//     );
//   }
// }
