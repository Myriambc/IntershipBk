import Modele, { ModeleModel } from "../model/modele.model";

export default class ModeleRepo {
  public static async findAll(): Promise<Modele[]> {
    return await ModeleModel.find({}).lean<Modele[]>();
  }
  public static async createModele(modele: {
    refArticle: string;
  }): Promise<Modele | null> {
    return await ModeleModel.create(modele);
  }
}
