const { PaymentsClient } = require('@google-pay/button-react');

exports.createPaymentIntent = async (req, res) => {
  try {
    const { amount } = req.body;

    const paymentsClient = new PaymentsClient({ environment: 'TEST' });

    const paymentDataRequest = {
      apiVersion: 2,
      apiVersionMinor: 0,
      allowedPaymentMethods: [
        {
          type: 'CARD',
          parameters: {
            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
            allowedCardNetworks: ['MASTERCARD', 'VISA'],
          },
          tokenizationSpecification: {
            type: 'PAYMENT_GATEWAY',
            parameters: {
              gateway: 'example',
              gatewayMerchantId: 'exampleGatewayMerchantId',
            },
          },
        },

      ],
      transactionInfo: {
        totalPriceStatus: 'FINAL',
        totalPrice: amount.toString(),
        currencyCode: 'INR',
      },
      merchantInfo: {
        merchantName: 'Example Merchant',
      },
    };

    const paymentData = await paymentsClient.loadPaymentData(paymentDataRequest);
    res.status(200).json({ paymentData });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ message: 'Failed to create payment intent', error });
  }
};
