import fs from "fs/promises";

export async function readJson(path: string) {
  const data = await fs.readFile(path, "utf-8");
  return JSON.parse(data);
}

export async function writeJson(path: string, data: any[]) {
  await fs.writeFile(path, JSON.stringify(data, null, 2));
}
