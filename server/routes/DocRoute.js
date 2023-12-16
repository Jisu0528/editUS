const {
  createDocument,
  getDocuments,
  updateDocument
} = require("../controllers/DocController");

const router = require("express").Router();

router.post("/createDocument", createDocument);
router.get("/getDocuments/:roomId", getDocuments);
router.put("/updateDocument/:docId", updateDocument);

module.exports = router;