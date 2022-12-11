import React, { FormEvent, useState } from "react";
import styled from "styled-components";
import Button from "../button";

const FormComponent = () => {
  const [prompt, setPrompt] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    try {
      e.preventDefault();

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept-Type": "Application/json",
        },
        body: JSON.stringify({ prompt }),
      };

      const response = fetch("http://localhost:5000/api/openai/generate", options);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="prompt">Enter the word</Label>
          <Input
            type="text"
            id="prompt"
            placeholder="Enter here"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </FormGroup>

        <Button type="submit">Generate image</Button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  width: 100wh;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-primary);
`;
const Form = styled.form`
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
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
  max-width: 300px;
  width: 100%;
`;

export default FormComponent;
