export type UserRole = "ADMIN" | "LEARNER";
export type UserStatus = "ACTIVE" | "INACTIVE" | "DELETED";

export interface AuthenticatedUser {
  id: string;
  employeeNumber: string;
  name: string;
  email: string;
  organizationId: string | null;
  position: string | null;
  role: UserRole;
  status: UserStatus;
}

export interface OrganizationRecord {
  id: string;
  name: string;
  parentId: string | null;
  depth: number;
  status: "ACTIVE" | "INACTIVE";
}

export interface OrganizationNode extends OrganizationRecord {
  children: OrganizationNode[];
}
