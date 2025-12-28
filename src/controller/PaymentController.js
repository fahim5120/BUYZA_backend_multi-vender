const OrderService = require("../service/OrderService");
const PaymentService = require("../service/PaymentService");
const SellerReportService = require("../service/SellerReportService");
const { getSellerById } = require("../service/sellerService");
const TransactionService = require("../service/TransactionService");


const paymentSuccessHandler = async (req, res) => {
  const { paymentId } = req.params;
  const { paymentLinkId } = req.query;

  try {
    // Get the user from JWT token
    const user = await req.user;

    const paymentOrder = await PaymentService.getPaymentOrderByPaymentLinkId(
      paymentLinkId
    );

    const paymentSuccess = await PaymentService.proceedPaymentOrder(
      paymentOrder,
      paymentId,
      paymentLinkId
    );

    if (paymentSuccess) {
      for (let orderId of paymentOrder.orders) {
        const order = await OrderService.findOrderById(orderId);

        // Create transaction for the order
        await TransactionService.createTransaction(order);

        // Get seller and update seller report
        const seller = await getSellerById(order.seller);
        const sellerReport = await SellerReportService.getSellerReport(seller);

        // Update the seller's report
        sellerReport.totalOrders += 1;
        sellerReport.totalEarnings += order.totalSellingPrice;
        sellerReport.totalSales += order.orderItems.length;

        const updatedReport = await SellerReportService.updateSellerReport(sellerReport);
        console.log("updated report: " + updatedReport)
      }
      // const cart=await c
     

      return res.status(201).json({
        message: "Payment successful",
      });
    } else {
      return res.status(400).json({
        message: "Payment failed",
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  paymentSuccessHandler,
};
