import { model, Schema, Document, Types } from "mongoose";

export const DOCUMENT_NAME = "Modele";
export const COLLECTION_NAME = "modeles";

export default interface Modele extends Document {
  codeArticle: string;
  saision: string;
  ligneProduitId: Types.ObjectId;
  refArticle: string;
  colorCode: string;
  clientId: Types.ObjectId;
  label: string;
  img: string;
}

const schema = new Schema(
  {
    label: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    deletedAt: {
      type: Date,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const ModeleeModel = model<Modele>(
  DOCUMENT_NAME,
  schema,
  COLLECTION_NAME
);
