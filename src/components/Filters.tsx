import {
  Box,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Tooltip,
  IconButton,
} from "@mui/material";
import FilterListOffIcon from "@mui/icons-material/FilterListOff";
import { FiltersBarProps, POSITIONS, STATUSES } from "../types/candidate";
import { useFilterbar } from "../hooks/useFilterbar";

export const FiltersBar = ({ filters, onChange, onReset }: FiltersBarProps) => {
  const isPositionDisabled = filters.name.trim() === "";
  const isStatusDisabled = filters.position === "";

  const { handleSelect, handleText } = useFilterbar({
    filters,
    onChange,
    onReset,
  });

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        flexWrap: "wrap",
        alignItems: "center",
        mb: 3,
        p: 2,
        background: "#f9fafb",
        borderRadius: 2,
        border: "1px solid #e0e0e0",
      }}
    >
      <TextField
        label="Name"
        name="name"
        value={filters.name}
        onChange={handleText}
        size="small"
        sx={{ minWidth: 180 }}
        placeholder="Search by name..."
      />

      <Tooltip
        title={
          isPositionDisabled ? "Fill in a name first to enable this filter" : ""
        }
        arrow
      >
        <span>
          <FormControl
            size="small"
            sx={{ minWidth: 160 }}
            disabled={isPositionDisabled}
          >
            <InputLabel>Position</InputLabel>
            <Select
              value={filters.position}
              label="Position"
              onChange={(e) => handleSelect(e, "position")}
            >
              <MenuItem value="">
                <em>All</em>
              </MenuItem>
              {POSITIONS.map((p) => (
                <MenuItem key={p} value={p}>
                  {p}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </span>
      </Tooltip>
      <Tooltip
        title={
          isStatusDisabled
            ? "Select a position first to enable this filter"
            : ""
        }
        arrow
      >
        <span>
          <FormControl
            size="small"
            sx={{ minWidth: 160 }}
            disabled={isStatusDisabled}
          >
            <InputLabel>Status</InputLabel>
            <Select
              value={filters.status}
              label="Status"
              onChange={(e) => handleSelect(e, "status")}
            >
              <MenuItem value="">
                <em>All</em>
              </MenuItem>
              {STATUSES.map((s) => (
                <MenuItem key={s} value={s}>
                  {s}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </span>
      </Tooltip>

      <TextField
        label="Years of Exp."
        name="yearsOfExperience"
        type="number"
        value={filters.yearsOfExperience}
        onChange={handleText}
        size="small"
        sx={{ minWidth: 160 }}
        slotProps={{ htmlInput: { min: 0 } }}
      />

      <Tooltip title="Reset all filters" arrow>
        <IconButton onClick={onReset} color="default" size="medium">
          <FilterListOffIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};
