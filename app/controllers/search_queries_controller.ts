import type { HttpContext } from "@adonisjs/core/http";

import SearchQuery from "#models/search_query";
import {
  createSearchQueryValidator,
  updateSearchQueryValidator,
} from "#validators/search_query";

export default class SearchQueriesController {
  async store({ request, response }: HttpContext) {
    const data = await request.validateUsing(createSearchQueryValidator);
    const searchQuery = await SearchQuery.create(data);
    return response.created(searchQuery);
  }

  async index({ request, response }: HttpContext) {
    const page = request.input("page", 1) as number;
    const limit = 10;
    const searchQueries = await SearchQuery.query().paginate(page, limit);
    return response.json(searchQueries);
  }

  async show({ params }: HttpContext) {
    const searchQuery = await SearchQuery.findOrFail(params.id);
    return searchQuery;
  }

  async update({ params, request }: HttpContext) {
    const searchQuery = await SearchQuery.findOrFail(params.id);
    const data = await request.validateUsing(updateSearchQueryValidator);
    await searchQuery.merge(data).save();
    return searchQuery;
  }
}
