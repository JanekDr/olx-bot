import { BaseSchema } from "@adonisjs/lucid/schema";

export default class extends BaseSchema {
  protected tableName = "search_queries";

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");

      table.string("name");

      table.float("min_price");
      table.float("max_price");

      table.integer("location_id");

      table.timestamp("refreshed_at");
      table.timestamp("created_at");
      table.timestamp("updated_at");
    });
  }

  async down() {
    this.schema.dropTable(this.tableName);
  }
}
