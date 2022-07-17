import { NextFunction, RequestHandler, Response, Request } from "express";
import catchAsync from "../errorHandler/catchAsync";
import HttpError from "../errorHandler/ClientError";
import SaisonRepository from "../database/repository/saison.repo";
import Saison from "../database/model/saison.model";

export const getSaisons: RequestHandler = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const saison = await SaisonRepository.findAll();
    if (!saison) return next(new HttpError("can not get saisons", 500));
    res.status(200).json({
      status: "success",
      code: 200,
      payload: saison,
    });
  }
);

export const createSaison: RequestHandler = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const saison = (await SaisonRepository.createSaison(req.body)) as Saison;
    if (!saison) return next(new HttpError("can not create saison", 500));
    res.status(201).json({
      status: "success",
      code: 201,
      payload: saison,
    });
  }
);
