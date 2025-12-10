import express from "express";
import { fileUpload } from "../middlewares/file-upload.middleware.js";
import { uploadArrayController, uploadFieldsController, uploadSingleController, } from "../controllers/image.controller.js";
const router = express.Router();
const upload = fileUpload();
router
    .route("/single")
    .post(upload.single("singleImage"), uploadSingleController);
router.route("/array").post(upload.array("arrayImage"), uploadArrayController);
router.route("/fields").post(upload.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "featured", maxCount: 5 },
]), uploadFieldsController);
export default router;
//# sourceMappingURL=image.route.js.map