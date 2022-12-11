import React from "react";
import styled from "styled-components";
import { PhotoView } from "react-photo-view";
import { dataProps } from "../form";

interface props {
  data: dataProps[];
}

const Gallery = ({ data }: props) => {
  return (
    <ImageWrapper>
      {data &&
        data?.length > 0 &&
        data?.map((img, index) => (
          <PhotoView key={index} src={img?.url}>
            <Image src={img?.url} alt="" />
          </PhotoView>
        ))}
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
const Image = styled.img`
  width: 100%;
  max-width: 200px;
  cursor: pointer;
`;

export default Gallery;
