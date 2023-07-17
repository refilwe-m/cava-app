import { BrowserRouter } from "react-router-dom";
import { MainRoute } from "./routing";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Toaster position="top-center" />
        <BrowserRouter>
          <MainRoute />
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
