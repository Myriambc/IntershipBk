import LigneProduit, { LigneProduitModel } from "../model/ligneProduit.model";

export default class LigneProduitRepo {
  public static async findAll(): Promise<LigneProduit[]> {
    return await LigneProduitModel.find({}).lean<LigneProduit[]>();
  }
  public static async createLigneProduit(ligneProduit: {
    label: string;
    img: string;
  }): Promise<LigneProduit | null> {
    return await LigneProduitModel.create(ligneProduit);
  }
}
