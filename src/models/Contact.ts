
import mongoose, { Schema, type Model } from "mongoose";

export interface IContact {
  name: string;
  email: string;
  company?: string;
  service: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

const ContactSchema = new Schema<IContact>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 100,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 254,
    },
    company: {
      type: String,
      trim: true,
      maxlength: 100,
      default: "",
    },
    service: {
      type: String,
      required: true,
      enum: [
        "digital-transformation",
        "data-engineering",
        "salesforce-solutions",
        "it-solutions-staffing",
        "application-managed-services",
        "enterprise-resource-planning",
        "other",
      ],
    },
    message: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
      maxlength: 2000,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Contact: Model<IContact> =
  (mongoose.models.Contact as Model<IContact> | undefined) ??
  mongoose.model<IContact>("Contact", ContactSchema);

export default Contact;
