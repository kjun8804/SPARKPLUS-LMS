import type { AuthenticatedUser, OrganizationNode, OrganizationRecord, UserRole } from "../types.js";

export function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

export function isAllowedGoogleAccount(email: string, hostedDomain: string | undefined, allowedDomain: string) {
  const normalizedDomain = allowedDomain.trim().toLowerCase().replace(/^@/, "");
  const normalizedEmail = normalizeEmail(email);
  return normalizedEmail.endsWith(`@${normalizedDomain}`) && hostedDomain?.toLowerCase() === normalizedDomain;
}

export function hasRole(user: AuthenticatedUser, roles: UserRole[]) {
  return user.status === "ACTIVE" && roles.includes(user.role);
}

export function buildOrganizationTree(records: OrganizationRecord[]): OrganizationNode[] {
  const nodes = new Map<string, OrganizationNode>();
  for (const record of records) nodes.set(record.id, { ...record, children: [] });

  const roots: OrganizationNode[] = [];
  for (const record of records) {
    const node = nodes.get(record.id);
    if (!node) continue;
    const parent = record.parentId ? nodes.get(record.parentId) : undefined;
    if (parent) parent.children.push(node);
    else roots.push(node);
  }

  const sort = (items: OrganizationNode[]) => {
    items.sort((left, right) => (left.sortOrder ?? Number.MAX_SAFE_INTEGER) - (right.sortOrder ?? Number.MAX_SAFE_INTEGER)
      || left.name.localeCompare(right.name, "ko"));
    items.forEach((item) => sort(item.children));
  };
  sort(roots);
  return roots;
}
