import mongoose from "mongoose";
export declare const Assignment: mongoose.Model<{
    title?: string | null | undefined;
    subject?: string | null | undefined;
    generatedContent?: any;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    title?: string | null | undefined;
    subject?: string | null | undefined;
    generatedContent?: any;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    title?: string | null | undefined;
    subject?: string | null | undefined;
    generatedContent?: any;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    title?: string | null | undefined;
    subject?: string | null | undefined;
    generatedContent?: any;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    title?: string | null | undefined;
    subject?: string | null | undefined;
    generatedContent?: any;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    title?: string | null | undefined;
    subject?: string | null | undefined;
    generatedContent?: any;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    title?: string | null | undefined;
    subject?: string | null | undefined;
    generatedContent?: any;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    title?: string | null | undefined;
    subject?: string | null | undefined;
    generatedContent?: any;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=Assignment.d.ts.map