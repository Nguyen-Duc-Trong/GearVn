import categoryRouter from "./modules/category/category.routes.js";

export function server(app) {
  app.use("/api/v1/categories", categoryRouter);
}
