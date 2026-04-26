export type CandidateStatus = "New" | "Interview" | "Hired";

export interface Candidate {
  id: number;
  name: string;
  email: string;
  position: string;
  status: CandidateStatus;
  yearsOfExperience: number;
}

export const CandidateFields = [
  "Name",
  "Email",
  "Position",
  "Status",
  "Years of Exp.",
];

export interface Filters {
  name: string;
  position: string;
  status: string;
  yearsOfExperience: string;
}

export interface FiltersBarProps {
  filters: Filters;
  onChange: (filters: Filters) => void;
  onReset: () => void;
}

export enum StatusColor {
  Default = "default",
  Warning = "warning",
  Success = "success",
}
export const STATUS_COLORS: Record<CandidateStatus, StatusColor> = {
  New: StatusColor.Default,
  Interview: StatusColor.Warning,
  Hired: StatusColor.Success,
};

export interface CandidatesTableProps {
  candidates: Candidate[];
  isLoading: boolean;
  isError: boolean;
}

export const POSITIONS = ["Frontend", "Backend", "Fullstack", "DevOps"];
export const STATUSES = ["New", "Interview", "Hired"];
