import { toast } from "react-toastify";

const loadScript = async (url) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;

    script.onload = () => {
      resolve(true);
    };

    script.onerror = () => {
      resolve(false);
    };

    document.body.appendChild(script);
  });
};

const handleCheckout = async (selectedAddress, totalPrice) => {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
  console.log(res);
  if (!res) {
    toast.error("Razorpay SDK failed to load, please check your connection.");
    return;
  }
  console.log(process.env.REACT_APP_RAZORPAY_KEY);
  const razorpayOptions = {
    key: process.env.REACT_APP_RAZORPAY_KEY,
    amount: totalPrice * 100,
    currency: "INR",
    name: "ORGANICO",
    description: "Congratulations, you are investing in your health!",
    image:
      "https://res.cloudinary.com/dspqnsoy1/image/upload/v1685856534/favicon-removebg-preview_wnsmtb.png",
    handler: function (response) {
      toast.success("Payment successful!", response);
    },
    prefill: {
      name: selectedAddress.name,
      contact: selectedAddress.phoneNumber,
      address: selectedAddress.address,
    },
    notes: {
      address: selectedAddress.address,
    },
    theme: {
      color: "#438967",
      background: "#FFFFFF",
      display_name: "ORGANICO",
    },
    modal: {
      escape: false,
      backdrop_close: true,
      handle_back: true,
    },
  };

  const razorpayInstance = new window.Razorpay(razorpayOptions);
  razorpayInstance.open();
};

export { handleCheckout };
