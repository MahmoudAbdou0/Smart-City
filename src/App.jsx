import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import RoutesConfig from "./RoutesConfig";
import Background from "./components/Background";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative min-h-screen">
        {/* الخلفية وراء المحتوى */}
        <Background />

        {/* المحتوى فوق الخلفية */}
        <div className="relative z-10">
          <RoutesConfig />
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
      <ToastContainer position="top-right" autoClose={3000} />
    </QueryClientProvider>
  );
}

export default App;
