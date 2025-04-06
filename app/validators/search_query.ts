import vine from "@vinejs/vine";

export const createSearchQueryValidator = vine.compile(
  vine.object({
    name: vine.string().trim(),
    minPrice: vine.number().positive(),
    maxPrice: vine.number().positive(),
    locationId: vine.number(),
  }),
);
