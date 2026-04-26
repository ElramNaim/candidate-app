import { filterCandidates } from "./filterCandidates";
import { Candidate, Filters } from "../types/candidate";

const mockCandidates: Candidate[] = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    position: "Frontend",
    status: "New",
    yearsOfExperience: 3,
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    position: "Backend",
    status: "Hired",
    yearsOfExperience: 5,
  },
  {
    id: 3,
    name: "Carol White",
    email: "carol@example.com",
    position: "Fullstack",
    status: "Interview",
    yearsOfExperience: 1,
  },
  {
    id: 4,
    name: "David Brown",
    email: "david@example.com",
    position: "Frontend",
    status: "New",
    yearsOfExperience: 7,
  },
];

const emptyFilters: Filters = {
  name: "",
  position: "",
  status: "",
  yearsOfExperience: "",
};

describe("filterCandidates", () => {
  it("returns all candidates when no filters are applied", () => {
    const result = filterCandidates(mockCandidates, emptyFilters);
    expect(result).toHaveLength(4);
  });

  it("filters by name (case-insensitive)", () => {
    const result = filterCandidates(mockCandidates, {
      ...emptyFilters,
      name: "alice",
    });
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("Alice Johnson");
  });

  it("returns empty array when name matches nothing", () => {
    const result = filterCandidates(mockCandidates, {
      ...emptyFilters,
      name: "xyz",
    });
    expect(result).toHaveLength(0);
  });

  it("filters by partial name match", () => {
    const result = filterCandidates(mockCandidates, {
      ...emptyFilters,
      name: "son",
    });
    expect(result).toHaveLength(1);
  });

  it("filters by position", () => {
    const result = filterCandidates(mockCandidates, {
      ...emptyFilters,
      position: "Frontend",
    });
    expect(result).toHaveLength(2);
  });

  it("returns all when position is empty string", () => {
    const result = filterCandidates(mockCandidates, {
      ...emptyFilters,
      position: "",
    });
    expect(result).toHaveLength(4);
  });

  it("filters by status", () => {
    const result = filterCandidates(mockCandidates, {
      ...emptyFilters,
      status: "New",
    });
    expect(result).toHaveLength(2);
  });

  it("filters by Hired status", () => {
    const result = filterCandidates(mockCandidates, {
      ...emptyFilters,
      status: "Hired",
    });
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("Bob Smith");
  });

  it("filters by minimum years of experience", () => {
    const result = filterCandidates(mockCandidates, {
      ...emptyFilters,
      yearsOfExperience: "5",
    });
    expect(result).toHaveLength(2);
  });

  it("returns all when yearsOfExperience is empty string", () => {
    const result = filterCandidates(mockCandidates, {
      ...emptyFilters,
      yearsOfExperience: "",
    });
    expect(result).toHaveLength(4);
  });

  it("returns empty when min years exceeds all candidates", () => {
    const result = filterCandidates(mockCandidates, {
      ...emptyFilters,
      yearsOfExperience: "10",
    });
    expect(result).toHaveLength(0);
  });

  it("combines name + position filters", () => {
    const result = filterCandidates(mockCandidates, {
      ...emptyFilters,
      name: "David",
      position: "Frontend",
    });
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("David Brown");
  });

  it("combines position + status filters", () => {
    const result = filterCandidates(mockCandidates, {
      ...emptyFilters,
      position: "Frontend",
      status: "New",
    });
    expect(result).toHaveLength(2);
  });

  it("combines all four filters", () => {
    const result = filterCandidates(mockCandidates, {
      name: "David",
      position: "Frontend",
      status: "New",
      yearsOfExperience: "5",
    });
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("David Brown");
  });

  it("returns empty when combined filters match nothing", () => {
    const result = filterCandidates(mockCandidates, {
      name: "Alice",
      position: "Backend",
      status: "",
      yearsOfExperience: "",
    });
    expect(result).toHaveLength(0);
  });
});
