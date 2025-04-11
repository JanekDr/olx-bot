import vine from "@vinejs/vine";

export const createSearchQueryValidator = vine.compile(
  vine.object({
    name: vine.string().trim(),
    minPrice: vine.number().positive(),
    maxPrice: vine.number().positive(),
    locationId: vine.number(),
  }),
);

export const updateSearchQueryValidator = vine.compile(
  vine.object({
    name: vine.string().trim().optional(),
    minPrice: vine.number().positive().optional(),
    maxPrice: vine.number().positive().optional(),
    locationId: vine.number().positive().optional(),
  }),
);
