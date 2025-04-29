// Giả lập câu trả lời của chatbot (có thể thay bằng tích hợp AI thực)
const generateResponse = (message) => {
  if (!message) return "Tôi không hiểu. Bạn có thể nói rõ hơn không?";
  if (message.toLowerCase().includes('bảo trì')) return "Bạn muốn đặt lịch bảo trì đúng không?";
  if (message.toLowerCase().includes('giá')) return "Bạn muốn yêu cầu báo giá cho dịch vụ nào?";
  return "Xin chào! Tôi là trợ lý ảo, bạn cần hỗ trợ gì?";
};

let lastResponse = '';

/**
 * @desc Nhận tin nhắn từ người dùng và phản hồi
 * @route POST /api/chatbot
 */
const sendMessage = (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ message: 'Vui lòng nhập nội dung tin nhắn' });
  }

  // Tạo phản hồi
  const response = generateResponse(message);
  lastResponse = response;

  res.status(200).json({ response });
};

/**
 * @desc Trả lại phản hồi cuối cùng (tuỳ chọn)
 * @route GET /api/chatbot/response
 */
const getLastResponse = (req, res) => {
  res.status(200).json({ response: lastResponse || "Chưa có phản hồi nào." });
};

module.exports = {
  sendMessage,
  getLastResponse,
};
