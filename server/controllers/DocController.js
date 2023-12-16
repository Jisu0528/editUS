const Document = require("../models/DocModel");

module.exports.getDocuments = async (req, res) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // 허용할 도메인
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // 허용할 메서드
  res.header('Access-Control-Allow-Credentials', true); // 쿠키 전송을 허용할지 여부
  try {
    const { roomId } = req.params;
    const documents = await Document.find({room: roomId});
    res.json(documents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports.createDocument = async (req, res) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // 허용할 도메인
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // 허용할 메서드
  res.header('Access-Control-Allow-Credentials', true); // 쿠키 전송을 허용할지 여부
  try {
    const { title, content, room } = req.body;
    const newDoc = new Document({ title, content, room });
    const savedDoc = await newDoc.save();
    res.json({ success: true, savedDoc});
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports.updateDocument = async (req, res) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Credentials', true);

  try {
    const { docId } = req.params;
    const { title, content } = req.body;

    const updatedDoc = await Document.findByIdAndUpdate(
      docId,
      { $set: { title, content } },
      { new: true }
    );

    if (!updatedDoc) {
      return res.status(404).json({ success: false, message: "Document not found" });
    }

    res.json({ success: true, updatedDoc });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};