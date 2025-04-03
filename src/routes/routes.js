import { Router } from "express";
import { join } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const router = Router();

router.get("/index", (req, res) => {
  const filePath = join(__dirname, "../pages/index.html");
  res.sendFile(filePath);
});

router.get("/login", (req, res) => {
  const filePath = join(__dirname, "../pages/login.html");
  res.sendFile(filePath);
});

router.get("/register", (req, res) => {
  const filePath = join(__dirname, "../pages/register.html");
  res.sendFile(filePath);
});

router.get("/forgot-password", (req, res) => {
  const filePath = join(__dirname, "../pages/forgot-password.html");
  res.sendFile(filePath);
});

router.get("/index", (req, res) => {
  const filePath = join(__dirname, "../pages/charts.html");
  res.sendFile(filePath);
});

export default router;
