import React, { useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import { FiltersBar } from "./Filters";
import { CandidatesTable } from "./CandidatesTable";
import { useCandidates } from "../hooks/useCandidates";
import { Filters } from "../types/candidate";
import { DEFAULT_FILTERS } from "../constants/candidates";

export const CandidatesPage = () => {
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);
  const { filteredCandidates, isLoading, isError } = useCandidates(filters);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 3 }}>
        <Typography sx={{ variant: "h4", fontWeight: 700 }}>
          Candidates
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {filteredCandidates.length} result
          {filteredCandidates.length !== 1 ? "s" : ""} found
        </Typography>
      </Box>

      <FiltersBar
        filters={filters}
        onChange={setFilters}
        onReset={() => setFilters(DEFAULT_FILTERS)}
      />

      <CandidatesTable
        candidates={filteredCandidates}
        isLoading={isLoading}
        isError={isError}
      />
    </Container>
  );
};
