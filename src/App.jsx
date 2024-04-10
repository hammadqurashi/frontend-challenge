import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.css";

import LatestNews from "./pages/LatestNews";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route exact path="/" element={<LatestNews />} />
        </Routes>
        {/* <Toaster position="bottom-left" reverseOrder={false} /> */}
      </Router>
    </QueryClientProvider>
  );
}

export default App;
