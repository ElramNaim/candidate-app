import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CandidatesPage } from "./components/CandidatesPage";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CandidatesPage />
    </QueryClientProvider>
  );
};
