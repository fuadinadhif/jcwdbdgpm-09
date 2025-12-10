import { createLogger, format, transports } from "winston";

const logFormat = format.printf(({ timestamp, level, message }) => {
  return `[${timestamp}][${level}]: ${message}`;
});

export const logger = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp(),
    format.errors(),
    format.metadata({ fillExcept: ["message", "level", "timestamp"] }),
    format.json({ space: 2 })
  ),
  transports: [
    new transports.File({ level: "error", filename: "logs/error.log" }),
    new transports.File({ filename: "logs/combined.log" }),
  ],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new transports.Console({
      level: "debug",
      format: format.combine(format.colorize(), format.timestamp(), logFormat),
    })
  );
}
