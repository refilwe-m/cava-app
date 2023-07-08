import { BrowserRouter } from "react-router-dom";
import { MainRoute } from "./routing";

function App() {
  return (
    <>
      {/* <Toaster position="top-center" /> */}
      <BrowserRouter>
        <MainRoute />
      </BrowserRouter>
    </>
  );
}

export default App;
