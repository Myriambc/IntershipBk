import { NextFunction, RequestHandler, Response, Request } from "express";
import catchAsync from "../errorHandler/catchAsync";
import HttpError from "../errorHandler/ClientError";
import ModeleRepository from "../database/repository/modele.repo";
import Modele from "../database/model/modele.model";

export const getModeles: RequestHandler = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const modele = await ModeleRepository.findAll();
    if (!modele) return next(new HttpError("can not get modeles", 500));
    res.status(200).json({
      status: "success",
      code: 200,
      payload: modele,
    });
  }
);

export const createModele: RequestHandler = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const modele = (await ModeleRepository.createModele(req.body)) as Modele;
    if (!modele) return next(new HttpError("can not create modele", 500));
    res.status(201).json({
      status: "success",
      code: 201,
      payload: modele,
    });
  }
);
