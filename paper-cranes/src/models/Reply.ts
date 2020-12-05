/*
 * Created by Jimmy Lan
 * Creation Date: 2020-12-05
 * Description: Describes a reply entry to some paper crane.
 */

import mongoose, { Schema, Document, Model } from "mongoose";
import { UserDocument } from "./User";

interface ReplyProps {
  sender: UserDocument;
  content: string;
  isWishToConnect?: boolean;
}

export interface ReplyDocument extends Document {
  sender: UserDocument;
  content: string;
  isWishToConnect: boolean;
}

interface ReplyModel extends Model<ReplyDocument> {
  build(props: ReplyProps): ReplyDocument;
}

const replySchema = new Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    isWishToConnect: Boolean,
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

const build = (props: ReplyProps) => {
  return new Reply(props);
};
replySchema.static("build", build);

const Reply = mongoose.model<ReplyDocument, ReplyModel>("reply", replySchema);

export { Reply };
