import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IkfuDSG3M5jaDdemlj7rxQTJHb2hELiqP2CbtEc8QUsdm5Py3dkdlpzVl6ngY4bqhoA3l9jv0XoBr5QLL9RZtZZ00KvoRJ4Vv";
  const onToken = (token) => {
    console.log(token);
    alert("Successfull");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Shop App"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your Total Is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
