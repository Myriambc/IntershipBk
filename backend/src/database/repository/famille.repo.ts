import Famille, { FamilleModel } from "../model/famille.model";

export default class FamilleRepo {
  public static async findAll(): Promise<Famille[]> {
    return await FamilleModel.find({}).lean<Famille[]>();
  }
  public static async createFamille(famille: {
    label: string;
    img: string;
  }): Promise<Famille | null> {
    return await FamilleModel.create(famille);
  }
}
