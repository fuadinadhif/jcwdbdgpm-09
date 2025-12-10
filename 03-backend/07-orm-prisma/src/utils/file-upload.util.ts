import cloudinary from "../configs/cloudinary.config.js";
import fs from "fs/promises";
import { AppError } from "../errors/app.error.js";

async function uploadToCloudinary(filePath: string) {
  try {
    const uploadResult = await cloudinary.uploader.upload(filePath);

    return uploadResult.secure_url;
  } finally {
    await fs.unlink(filePath);
  }
}

export async function uploadSingle(filePath: string) {
  return await uploadToCloudinary(filePath);
}

export function uploadArray(filePaths: string[]) {
  return Promise.all(
    filePaths.map((path: string) => {
      return uploadToCloudinary(path);
    })
  );
}

/*
{
  thumbnail: [filePath1, filePath2, filePath3],
  featured: [filePath1, filePath2]
}
*/
export async function uploadFields(fields: Record<string, string[]>) {
  const result: Record<string, string[]> = {};

  for (const fieldName in fields) {
    const filePaths = fields[fieldName];
    if (!filePaths) throw new AppError(400, "File paths is missing");

    result[fieldName] = await uploadArray(filePaths);
  }

  return result;
}
