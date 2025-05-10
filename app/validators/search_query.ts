import vine from "@vinejs/vine";

export const createSearchQueryValidator = vine.compile(
  vine.object({
    name: vine.string().trim(),
    minPrice: vine.number().positive(),
    maxPrice: vine.number().positive(),
    regionId: vine.number().positive(),
    cityId: vine.number().positive(),
    districtId: vine.number().positive(),
    email: vine.string().email(),
  }),
);

export const updateSearchQueryValidator = vine.compile(
  vine.object({
    name: vine.string().trim().optional(),
    minPrice: vine.number().positive().optional(),
    maxPrice: vine.number().positive().optional(),
    regionId: vine.number().positive().optional(),
    cityId: vine.number().positive().optional(),
    districtId: vine.number().positive().optional(),
    email: vine.string().email().optional(),
  }),
);
