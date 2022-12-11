import React from "react";
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";

const LoaderComponent = () => {
  return (
    <LoaderWrapper>
      <ClipLoader
        color={"var(--color-secondary)"}
        loading={true}
        // cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </LoaderWrapper>
  );
};

const LoaderWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 999;
`;

export default LoaderComponent;
