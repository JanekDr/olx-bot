import { BaseCommand } from "@adonisjs/core/ace";
import type { CommandOptions } from "@adonisjs/core/types/ace";

import OlxOffer from "../app/types/olx_offers.js";

export default class SynchronizeOlx extends BaseCommand {
  static commandName = "synchronize:olx";
  static description = "";

  static options: CommandOptions = {
    startApp: true,
  };

  async run() {
    const { default: SearchQuery } = await import("#models/search_query");
    const queries = await SearchQuery.query();

    for (const query of queries) {
      const params = new URLSearchParams();
      if (query.regionId) {
        params.append("region_id", query.regionId.toString());
      }
      if (query.cityId) {
        params.append("city_id", query.cityId.toString());
      }
      if (query.districtId) {
        params.append("district_id", query.districtId.toString());
      }
      if (query.minPrice) {
        params.append("filter_float_price:from", query.minPrice.toString());
      }
      if (query.maxPrice) {
        params.append("filter_float_price:to", query.maxPrice.toString());
      }
      params.append("limit", "3");

      const url = `https://www.olx.pl/api/v1/offers?category_id=1307&${params.toString()}`;
      this.logger.info(`Fetching offers for query: ${query.name} from ${url}`);
      const response = await fetch(url);
      const data = (await response.json()) as { data: OlxOffer[] };
      for (const offer of data.data) {
        this.logger.info(offer.title);
      }
    }
  }
}
