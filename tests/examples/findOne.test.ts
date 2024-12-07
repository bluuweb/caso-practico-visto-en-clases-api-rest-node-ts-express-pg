import { describe, expect, it } from "vitest";

export const findOneById = async (id: number) => {
  if (id === 1) {
    return Promise.resolve({ id: 1, name: "John Doe" });
  }
  return Promise.reject(null);
};

describe("findOneById", () => {
  it("finds users with id 1", async () => {
    const id = 1;
    const user = await findOneById(id);

    expect(user).toEqual({ id: 1, name: "John Doe" });
  });

  it("does not find user with id 2", async () => {
    const id = 2;

    expect(findOneById(id)).rejects.toBe(null);
  });
});
