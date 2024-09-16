export const plansMap = [
    {
      id: "basic",
      name: "Basic",
      description: "Get started with Verbto!",
      price: "10",
      items: ["3 Blog Posts", "3 Transcription"],
      paymentLink: "https://buy.stripe.com/test_3csg0r4ti2gW9TW7ss",
      priceId:
        process.env.NODE_ENV === "development"
          ? "price_1PyEowP1BOIMEgJYvxyfy8bf"
          : "",
    },
    {
      id: "pro",
      name: "Pro",
      description: "All Blog Posts, let’s go!",
      price: "19.99",
      items: ["Unlimited Blog Posts", "Unlimited Transcriptions"],
      paymentLink: "https://buy.stripe.com/test_4gw01t9NC3l05DG5kl",
      priceId:
        process.env.NODE_ENV === "development"
          ? "price_1PyEowP1BOIMEgJYzcIcR3pP"
          : "",
    },
  ];
  