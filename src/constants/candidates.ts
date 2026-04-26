import { CandidateStatus, Filters } from "../types/candidate";

export const POSITIONS = ["Frontend", "Backend", "Fullstack", "DevOps"];
export const STATUSES: CandidateStatus[] = ["New", "Interview", "Hired"];
export const CANDIDATE_FIELDS = [
  "Name",
  "Email",
  "Position",
  "Status",
  "Years of Exp.",
];

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

export const DEFAULT_FILTERS: Filters = {
  name: "",
  position: "",
  status: "",
  yearsOfExperience: "",
};
