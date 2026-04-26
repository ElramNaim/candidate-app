import { SelectChangeEvent } from "@mui/material";
import { Filters, FiltersBarProps } from "../types/candidate";

export const useFilterbar = ({
  filters,
  onChange,
  onReset,
}: FiltersBarProps) => {
  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updated = { ...filters, [e.target.name]: e.target.value };
    if (e.target.name === "name" && e.target.value.trim() === "") {
      updated.position = "";
      updated.status = "";
    }
    onChange(updated);
  };

  const handleSelect = (e: SelectChangeEvent, field: keyof Filters) => {
    const updated = { ...filters, [field]: e.target.value };
    if (field === "position" && e.target.value === "") {
      updated.status = "";
    }
    onChange(updated);
  };

  return { handleText, handleSelect };
};
