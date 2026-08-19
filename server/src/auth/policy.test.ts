import { describe, expect, it } from "vitest";
import { buildOrganizationTree, isAllowedGoogleAccount } from "./policy.js";

describe("Google Workspace domain policy", () => {
  it("accepts only matching Sparkplus hosted-domain accounts", () => {
    expect(isAllowedGoogleAccount("jun.kang@sparkplus.co", "sparkplus.co", "sparkplus.co")).toBe(true);
    expect(isAllowedGoogleAccount("jun.kang@gmail.com", "gmail.com", "sparkplus.co")).toBe(false);
    expect(isAllowedGoogleAccount("attacker@sparkplus.co.example", "sparkplus.co.example", "sparkplus.co")).toBe(false);
    expect(isAllowedGoogleAccount("jun.kang@sparkplus.co", undefined, "sparkplus.co")).toBe(false);
  });
});

describe("organization hierarchy", () => {
  it("builds a nested organization tree without fixing the depth", () => {
    const tree = buildOrganizationTree([
      { id: "part", name: "개발파트", parentId: "team", depth: 3, status: "ACTIVE" },
      { id: "hq", name: "개발본부", parentId: null, depth: 1, status: "ACTIVE" },
      { id: "team", name: "부동산팀", parentId: "hq", depth: 2, status: "ACTIVE" },
    ]);

    expect(tree).toHaveLength(1);
    expect(tree[0]?.children[0]?.children[0]?.name).toBe("개발파트");
  });
});
