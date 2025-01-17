import { Router } from "express";
import AuthMiddleware from "../middleware/auth.middleware.js";
import multer from "multer";
import {
  addGroupImage,
  addMember,
  createGroup,
  deleteGroup,
  deleteGroupImage,
  getGroup,
  getGroups,
  handleAttendance,
} from "../controllers/group.controller.js";
import AdminsMiddleware from "../middleware/admins.middleware.js";

const router = Router();
const upload = multer({ dest: "uploads/groups" });

router.post("/", AuthMiddleware, AdminsMiddleware, createGroup);

router.post("/add-member", AuthMiddleware, AdminsMiddleware, addMember);

router.post("/attendance", AuthMiddleware, AdminsMiddleware, handleAttendance);

router.post(
  "/group-image",
  AuthMiddleware,
  upload.single("group-image"),
  addGroupImage
);
router.get("/get-groups", AuthMiddleware, AdminsMiddleware, getGroups);

router.get("/:id", AuthMiddleware, AdminsMiddleware, getGroup);

router.delete("/:id", AuthMiddleware, AdminsMiddleware, deleteGroup);

router.delete(
  "/remove-group-image/:id",
  AuthMiddleware,
  AdminsMiddleware,
  deleteGroupImage
);

export default router;
