import Saison, { SaisonModel } from "../model/saison.model";

export default class SaisonRepo {
  public static async findAll(): Promise<Saison[]> {
    return await SaisonModel.find({}).lean<Saison[]>();
  }
  public static async createSaison(saision: {
    label: string;
  }): Promise<Saison | null> {
    return await SaisonModel.create(saision);
  }
}
