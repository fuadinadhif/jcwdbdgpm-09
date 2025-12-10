import fs from "fs/promises";
import Handlebars from "handlebars";

export async function renderTemplate(
  templateName: string,
  context: Record<string, any>
) {
  const templateSource = await fs.readFile(
    `src/emails/templates/${templateName}.template.hbs`,
    "utf-8"
  );
  const template = Handlebars.compile(templateSource);
  const html = template(context);

  return html;
}
