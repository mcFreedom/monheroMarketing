import React from "react";
import PropTypes from "prop-types";

const VideoPreview = () => {
  return (
    <div className="iphonePreview relative flex">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 30"
        style={{ position: "absolute" }}
      >
        <clipPath
          id="screenMask"
          className="clipPath"
          // clipPathUnits="objectBoundingBox"
          // transform="scale(0.82, 0.82) translate(16 14)"
        >
          <path
            d="M0,235.813237 C0,451.021677 0,666.230118 0,881.438558 L1.26377187,887.97303 L3.37504205,895.707534 L6.81933187,901.057711 L10.7168798,906.640026 L14.6577077,910.828729 L19.6403997,914.379252 L25.2982576,917.618159 L31.6226253,920.014289 L36.7674201,921.903652 L382.527285,921.903652 L391.410752,921.903652 L400.473326,917.618159 L407.256089,912.674635 L413.187845,906.640026 L417.628061,901.057711 L420.820604,895.707534 L423.471782,890.570699 L424.69618,884.541801 L424.69618,36.9879962 L421.923465,28.9714101 L418.951521,22.3460323 L413.187845,14.6530533 L407.256089,9.60740267 L402.520141,5.76746597 L393.913803,2.11907245 L389.782519,1.07768242 L387.156362,0 L335.761294,0 L331.908252,2.11907245 L331.908252,12.915051 L329.486742,19.8146379 L326.296036,24.2423098 L321.527619,28.9714101 L315.394205,33.1339458 L308.303075,34.2680831 L113.977478,34.2680831 L106.682707,30.9574104 L102.280238,27.284822 L97.2648315,21.0183356 L94.9028016,15.7781174 L93.2847658,12.915051 L93.2847658,3.68065343 L89.2714321,0 L38.377401,0 L26.5884223,3.68065343 L19.6403997,8.16881257 L12.8194921,12.915051 L6.81933187,21.0183356 L2.31889329,28.9714101 L0,38.5052198 L0,235.813237 Z"
            id="Path"
          ></path>
        </clipPath>
      </svg>
      <div className="w-full h-full iphoneBackground z-10" />
      <video
        className="absolute pt-2 pl-2 videoPlayer rounded"
        controls
        muted
        autoPlay
        loop
      >
        <source src="app_preview.mp4" type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>
  );
};

VideoPreview.propTypes = {};

export default VideoPreview;
