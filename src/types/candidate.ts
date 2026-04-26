export type Status = "New" | "Interview" | "Hired";

export interface Candidate {
  id: number;
  name: string;
  email: string;
  position: string;
  status: Status;
  yearsOfExperience: number;
}

export interface Filters {
  name: string;
  position: string;
  status: string;
  yearsOfExperience: string;
}
