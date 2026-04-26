import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  CircularProgress,
  Alert,
  Typography,
  Box,
} from "@mui/material";
import {
  CandidateFields,
  CandidatesTableProps,
  STATUS_COLORS,
} from "../types/candidate";

export const CandidatesTable = ({
  candidates,
  isLoading,
  isError,
}: CandidatesTableProps) => {
  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Alert severity="error" sx={{ mt: 2 }}>
        Failed to load candidates. Make sure JSON Server is running on port
        3001.
      </Alert>
    );
  }

  return (
    <TableContainer component={Paper} elevation={2}>
      <Table>
        <TableHead sx={{ backgroundColor: "black" }}>
          <TableRow>
            {CandidateFields.map((h) => (
              <TableCell key={h} sx={{ color: "#fff", fontWeight: 700 }}>
                {h}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {candidates.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} align="center">
                <Typography color="text.secondary" sx={{ py: 3 }}>
                  No candidates match the current filters.
                </Typography>
              </TableCell>
            </TableRow>
          ) : (
            candidates.map((c) => (
              <TableRow key={c.id} hover>
                <TableCell>{c.name}</TableCell>
                <TableCell>{c.email}</TableCell>
                <TableCell>{c.position}</TableCell>
                <TableCell>
                  <Chip
                    label={c.status}
                    color={STATUS_COLORS[c.status]}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  {c.yearsOfExperience} yr{c.yearsOfExperience !== 1 ? "s" : ""}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
