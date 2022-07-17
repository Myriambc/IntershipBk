import { NextFunction, RequestHandler, Response, Request } from "express";
import catchAsync from "../errorHandler/catchAsync";
import HttpError from "../errorHandler/ClientError";
import FamilleRepository from "../database/repository/famille.repo";
import Famille from "../database/model/famille.model";

export const getFamilles: RequestHandler = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const famille = await FamilleRepository.findAll();
    if (!famille) return next(new HttpError("can not get familles", 500));
    res.status(200).json({
      status: "success",
      code: 200,
      payload: famille,
    });
  }
);

export const createFamille: RequestHandler = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const famille = (await FamilleRepository.createFamille(
      req.body
    )) as Famille;
    if (!famille) return next(new HttpError("can not create famille", 500));
    res.status(201).json({
      status: "success",
      code: 201,
      payload: famille,
    });
  }
);
