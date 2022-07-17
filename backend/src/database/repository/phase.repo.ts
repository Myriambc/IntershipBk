import Phase, { PhaseModel } from "../model/phase.model";

export default class PhaseRepo {
  public static async findAll(): Promise<Phase[]> {
    return await PhaseModel.find({}).lean<Phase[]>();
  }
  public static async createPhase(phase: {
    label: string;
  }): Promise<Phase | null> {
    return await PhaseModel.create(phase);
  }
}
