import { NextFunction, RequestHandler, Response, Request } from "express";
import catchAsync from "../errorHandler/catchAsync";
import HttpError from "../errorHandler/ClientError";
import LigneProduitRepository from "../database/repository/ligneProduit.repo";
import LigneProduit from "../database/model/ligneProduit.model";

export const getLigneProduits: RequestHandler = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const ligneProduit = await LigneProduitRepository.findAll();
    if (!ligneProduit)
      return next(new HttpError("can not get ligneProduits", 500));
    res.status(200).json({
      status: "success",
      code: 200,
      payload: ligneProduit,
    });
  }
);

export const createLigneProduit: RequestHandler = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const ligneProduit = (await LigneProduitRepository.createLigneProduit(
      req.body
    )) as LigneProduit;
    if (!ligneProduit)
      return next(new HttpError("can not create ligneProduit", 500));
    res.status(201).json({
      status: "success",
      code: 201,
      payload: ligneProduit,
    });
  }
);
