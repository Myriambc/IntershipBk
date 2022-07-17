import Client, { ClientModel } from "../model/client.model";

export default class ClientRepo {
  public static async findAll(): Promise<Client[]> {
    return await ClientModel.find({}).lean<Client[]>();
  }
  public static async createClient(client: {
    label: string;
  }): Promise<Client | null> {
    return await ClientModel.create(client);
  }
}
