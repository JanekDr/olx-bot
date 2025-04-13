import { BaseSchema } from "@adonisjs/lucid/schema";

export default class extends BaseSchema {
  protected tableName = "search_queries";

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn("location_id");
      table.integer("region_id").nullable();
      table.integer("city_id").nullable();
      table.integer("district_id").nullable();
    });
  }

  async down() {
    this.schema.alterTable("search_queries", (table) => {
      table.integer("location_id");
      table.dropColumn("region_id");
      table.dropColumn("city_id");
      table.dropColumn("district_id");
    });
  }
}
