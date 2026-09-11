import source from "../../content/career.json";

import { careerSchema } from "./career-schema";

const record = careerSchema.parse(source);
const currentRole = record.chapters
  .flatMap((chapter) => chapter.roles)
  .find((role) => role.id === record.currentRoleId);

if (!currentRole) {
  throw new Error("The current role must belong to a career chapter.");
}

const career = {
  ...record,
  currentRole,
};

export type Career = typeof career;

export function getCareer(): Career {
  return career;
}
