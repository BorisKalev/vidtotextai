export const plansMap = [
    {
      id: "basic",
      name: "Basic",
      description: "Get started with Verbto!",
      price: "9.99",
      items: ["3 Blog Posts", "3 Transcription"],
      paymentLink: "https://buy.stripe.com/14k2aU4bobeJ0Vi7ss",
      priceId:
        process.env.NODE_ENV === "development"
          ? "price_1PyEowP1BOIMEgJYvxyfy8bf"
          : "price_1Q0pnSP1BOIMEgJYCyfNlP1t",
    },
    {
      id: "pro",
      name: "Pro",
      description: "All Blog Posts, let’s go!",
      price: "19.99",
      items: ["Unlimited Blog Posts", "Unlimited Transcriptions"],
      paymentLink: "https://buy.stripe.com/bIYdTC9vI3MhfQc5kl",
      priceId:
        process.env.NODE_ENV === "development"
          ? "price_1PyEowP1BOIMEgJYzcIcR3pP"
          : "price_1Q0pnSP1BOIMEgJYWYbrvW2M",
    },
  ];


  export const ORIGIN_URL = 
    process.env.NODE_ENV === "development"
       ?"http://localhost:3000"
       :"https://verbto.boriskalev.com/"
  