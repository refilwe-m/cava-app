import { BrowserRouter } from "react-router-dom";
import { MainRoute } from "./routing";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <BrowserRouter>
        <MainRoute />
      </BrowserRouter>
    </>
  );
}

export default App;
