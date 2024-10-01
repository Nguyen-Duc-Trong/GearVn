import authRouter from "./modules/auth/auth.routes.js";
export const Server = (app) => {
  app.use("/api/v1/auth", authRouter);
  app.all("*", (req, res, next) => {
    next(new AppError("Endpoint was not found", 404));
  });
};
