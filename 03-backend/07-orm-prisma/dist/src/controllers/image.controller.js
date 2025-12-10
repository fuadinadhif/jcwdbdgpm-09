import {} from "express";
import { AppError } from "../errors/app.error.js";
import { prisma } from "../configs/prisma.config.js";
import { uploadSingle, uploadArray, uploadFields, } from "../utils/file-upload.util.js";
export async function uploadSingleController(req, res, next) {
    try {
        if (!req.file) {
            throw new AppError(400, "No file provided");
        }
        const secureUrl = await uploadSingle(req.file.path);
        const result = await prisma.image.create({ data: { url: secureUrl } });
        res.status(201).json({ message: "Upload single image success", result });
    }
    catch (error) {
        next(error);
    }
}
export async function uploadArrayController(req, res, next) {
    try {
        // files = [Express.Multer.File, Express.Multer.File, Express.Multer.File]
        const files = req.files;
        if (!files) {
            throw new AppError(400, "No files provided");
        }
        const filePaths = files.map((file) => file.path);
        const secureUrls = (await uploadArray(filePaths));
        const results = await Promise.all(secureUrls.map(async (url) => prisma.image.create({ data: { url } })));
        res
            .status(201)
            .json({ message: "Uplaod array of images success", results });
    }
    catch (error) {
        next(error);
    }
}
export async function uploadFieldsController(req, res, next) {
    try {
        const files = req.files;
        if (!files) {
            throw new AppError(400, "No files provided");
        }
        const fields = {};
        for (const key in files) {
            fields[key] = files[key].map((file) => file.path);
        }
        const fieldsOfSecureUrls = await uploadFields(fields);
        const results = {};
        for (const fieldName in fieldsOfSecureUrls) {
            results[fieldName] = await Promise.all(fieldsOfSecureUrls[fieldName].map(async (url) => prisma.image.create({ data: { url } })));
        }
        res
            .status(201)
            .json({ message: "Upload fields of images success", results });
    }
    catch (error) {
        next(error);
    }
}
//# sourceMappingURL=image.controller.js.map