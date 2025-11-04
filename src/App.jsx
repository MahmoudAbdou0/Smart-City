import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import RoutesConfig from "./RoutesConfig";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RoutesConfig />
      <ReactQueryDevtools initialIsOpen={false} />
      <ToastContainer position="top-right" autoClose={3000} />
    </QueryClientProvider>
  );
}

export default App;
