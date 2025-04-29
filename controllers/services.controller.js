const Service = require('../models/service.model.js'); // Assuming the Service model exists
const sendEmail = require('../utils/sendEmail'); // Assuming you have a utility to send emails

// Request a Service Quote
exports.requestQuote = async (req, res) => {
  const { serviceType, description, customerName, customerEmail, customerPhone } = req.body;

  if (!serviceType || !description || !customerName || !customerEmail || !customerPhone) {
    return res.status(400).json({ message: 'Tất cả các trường đều là bắt buộc' });
  }

  try {
    // Save service quote request to database (assuming a Service model exists)
    const serviceQuote = new Service({
      serviceType,
      description,
      customerName,
      customerEmail,
      customerPhone,
      status: 'Pending',
    });

    await serviceQuote.save();

    // Send confirmation email (optional)
    const emailMessage = `
      Chúng tôi đã nhận được yêu cầu báo giá của bạn. 
      Loại dịch vụ: ${serviceType} 
      Mô tả: ${description}
    `;
    sendEmail(customerEmail, 'Yêu cầu báo giá của bạn', emailMessage);

    return res.status(201).json({ message: 'Yêu cầu báo giá đã được gửi thành công!' });
  } catch (error) {
    console.error('Error processing service quote:', error);
    return res.status(500).json({ message: 'Có lỗi xảy ra, vui lòng thử lại sau!' });
  }
};

// Submit Service Feedback
exports.submitFeedback = async (req, res) => {
  const { rating, comments, serviceId } = req.body;

  if (!rating || !comments || !serviceId) {
    return res.status(400).json({ message: 'Tất cả các trường đều là bắt buộc' });
  }

  try {
    // Find the service that the feedback is related to (assuming Service model has a feedback property)
    const service = await Service.findById(serviceId);
    if (!service) {
      return res.status(404).json({ message: 'Dịch vụ không tồn tại' });
    }

    // Add feedback to the service (you might want to store feedback separately in a feedback model)
    service.feedback.push({ rating, comments });
    await service.save();

    // Send thank you email for feedback
    const emailMessage = `
      Cảm ơn bạn đã gửi phản hồi cho dịch vụ của chúng tôi. 
      Đánh giá: ${rating} 
      Bình luận: ${comments}
    `;
    sendEmail(service.customerEmail, 'Cảm ơn vì phản hồi', emailMessage);

    return res.status(200).json({ message: 'Phản hồi của bạn đã được gửi thành công!' });
  } catch (error) {
    console.error('Error submitting service feedback:', error);
    return res.status(500).json({ message: 'Có lỗi xảy ra, vui lòng thử lại sau!' });
  }
};
