import { PhotoProvider } from "react-photo-view";
import FormComponent from "./components/form";
import { GlobalStyled } from "./styles/globalStyled";

import 'react-photo-view/dist/react-photo-view.css';

function App() {
  return (
    <PhotoProvider>
      <GlobalStyled />
      <FormComponent />
    </PhotoProvider>
  );
}

export default App;
