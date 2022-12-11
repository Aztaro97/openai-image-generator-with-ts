import React, { FormEvent, useState } from "react";
import styled from "styled-components";
import Button from "../button";
import Gallery from "../gallery";
import LoaderComponent from "../loader";

export interface dataProps {
  url: string;
}

const FormComponent = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [imageNumber, setImageNumber] = useState<number>(1);
  const [imageSize, setImageSize] = useState<string>("small");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<[dataProps]>([{ url: "" }]);

  const handleSubmit = (e: FormEvent) => {
    console.log({ prompt, imageNumber, imageSize });
    e.preventDefault();
    setIsLoading(true);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept-Type": "Application/json",
      },
      body: JSON.stringify({ prompt, imageNumber, imageSize }),
    };

    fetch("http://localhost:5000/api/openai/generate", options)
      .then((res) => res.json())
      .then((res) => {
        res.data;
        setIsLoading(false);
        setData(res.imageUrl);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

  const arrayNumber = [...Array<number>(10).keys()];

  return (
    <Container>
      {isLoading ? <LoaderComponent /> : null}
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="prompt">Enter the word</Label>
            <Input
              required
              type="text"
              id="prompt"
              placeholder="Enter here"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label>Select the number of image</Label>
            <Select
              id="numberImage"
              defaultValue={1}
              value={imageNumber}
              onChange={(e) => setImageNumber(parseInt(e.target.value))}
            >
              {arrayNumber.map((number, index) => (
                <option key={index} value={number + 1}>
                  {number + 1}
                </option>
              ))}
            </Select>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="imageSize">Select the size of image</Label>
            <Select
              id="imageSize"
              defaultValue="small"
              value={imageSize}
              onChange={(e) => setImageSize(e.target.value)}
            >
              <option value="small">small</option>
              <option value="medium">medium</option>
              <option value="large">large</option>
            </Select>
          </FormGroup>

          <Button type="submit">Generate image</Button>
        </Form>
        <Gallery data={data} />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100wh;
  min-height: 100vh;

  display: flex;
  /* align-items: center; */
  justify-content: center;
  background: var(--color-primary);

  padding: 4rem 1rem;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-bottom: 2rem;
`;
const Wrapper = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
`;
const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Label = styled.label`
  color: #fff;
  font-size: 1rem;
`;
const Input = styled.input`
  border: none;
  outline: none;
  padding: 0.5rem;
  border-radius: 5px;
  font-size: 1rem;
  width: 100%;
  border: 1px solid var(--color-primary);

  transition: all 0.3s ease-in-out;

  &:focus {
    border: 1px solid var(--color-secondary);
  }
`;
const Select = styled.select`
  border: none;
  outline: none;
  padding: 0.5rem;
  border-radius: 5px;
  font-size: 1rem;
  width: 100%;
  border: 1px solid var(--color-primary);

  transition: all 0.3s ease-in-out;

  &:focus {
    border: 1px solid var(--color-secondary-200);
  }
`;

export default FormComponent;
