import { Router } from "express";

const subscriptionsRouter = Router();

subscriptionsRouter.get("/", (req, res) => {res.send("Get all subsriptions api working !")});
subscriptionsRouter.get("/:id", (req, res) => {});
subscriptionsRouter.post("/", (req, res) => {});
subscriptionsRouter.put("/:id", (req, res) => {});
subscriptionsRouter.delete("/:id", (req, res) => {});
subscriptionsRouter.get("/user/:id", (req, res) => {});
subscriptionsRouter.delete("/:id/cancel", (req, res) => {});
subscriptionsRouter.get("/upcoming-renewals", (req, res) => {});

export default subscriptionsRouter;
