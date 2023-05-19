import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  //Dairy_Substitutes
  {
    _id: "e9ee4987-c91c-4499-9ec2-3294299cc7b8",
    title: "Coconut Milk Powder 100% Vegan & Pure",
    description:
      "The Ultimate Dairy Substitute for Your Health Transformation Journey!No Added Sugar or Flavour | Maltodextrin-Free.",
    imgUrl:
      "https://res.cloudinary.com/dspqnsoy1/image/upload/v1684207345/Ecom%20App-NEOG/Dairy%20Substitutes/Preview-1CoconutMilkPowder_700x_qw4uu4.webp",
    rating: "4",
    totalReviews: 200,
    price: "900",
    originalPrice: "1500",
    categoryName: "Dairy_Substitutes",
    isOutOfStock: true,
    isTrending: true,
  },
  {
    _id: "8902e2a8-3eff-41af-a88d-21b268f579c3",
    title: "Cacao Powder-Raw & Organic ",
    description:
      "All time favourite for Home-made, Dairy-free Chocolate Lovers! Healthier substitute for commonly used cocoa powder. Contains more calcium than dairy milk!",
    imgUrl:
      "https://res.cloudinary.com/dspqnsoy1/image/upload/v1684126075/Ecom%20App-NEOG/Dairy%20Substitutes/Preview-1CacaoPowder_700x_rjno1o.webp",
    rating: "5",
    totalReviews: 400,
    price: "310",
    originalPrice: "1000",
    categoryName: "Dairy_Substitutes",
    isOutOfStock: false,
    isTrending: false,
  },
  {
    _id: "09701fc7-a1ea-4847-97f2-b00433d0f81b",
    title: "Cacao Nibs-No Additives ",
    description:
      "Everyone’s favorite, healthiest & dairy-free alternative to sweetened chocolate chips! Packed with dense nutrition, this chocolaty superfood has a crunchy texture and intense natural cacao flavor & aroma to help you satisfy your choco cravings.",
    imgUrl:
      "https://res.cloudinary.com/dspqnsoy1/image/upload/v1684125921/Ecom%20App-NEOG/Dairy%20Substitutes/Preview-1CacaoNibs_700x_ctiju7.webp",
    rating: "3",
    totalReviews: 600,
    price: "400",
    originalPrice: "1800",
    categoryName: "Dairy_Substitutes",
    isOutOfStock: false,
    isTrending: false,
  },
  {
    _id: "afae4222-8b70-4ef6-8349-ef63957ff2f8",
    title: "Pintola Almond Butter",
    description:
      "A perfect alternative to commonly used dairy butter with 100% Almonds & Nothing Else!",
    imgUrl:
      "https://res.cloudinary.com/dspqnsoy1/image/upload/v1684207781/Ecom%20App-NEOG/Dairy%20Substitutes/Preview-1AlmondButter_700x_cjlsdx.webp",
    rating: "5",
    totalReviews: 800,
    price: "700",
    originalPrice: "2000",
    categoryName: "Dairy_Substitutes",
    isOutOfStock: false,
    isTrending: false,
  },
  {
    _id: "2d4422c4-e305-4cd5-b136-a5146c8c1223",
    title: "Pintola Peanut Butter Creamy",
    description:
      "A perfect alternative to commonly used dairy butter with 100% Peanuts & Nothing Else!",
    imgUrl:
      "https://res.cloudinary.com/dspqnsoy1/image/upload/v1684207912/Ecom%20App-NEOG/Dairy%20Substitutes/Preview-1PeanutButter_b1443aa9-1589-4274-aa34-7fe74057d412_700x_wu7wxh.webp",
    rating: "5",
    totalReviews: 500,
    price: "800",
    originalPrice: "4000",
    categoryName: "Dairy_Substitutes",
    isOutOfStock: false,
    isTrending: false,
  },

  //Tea_Coffee_Replacements
  {
    _id: "e601297d-3b90-4be8-939a-cd5e7cb0d357",
    title: "No Coffee Powder Prepared using Chickpeas",
    description:
      "A perfect substitute for Caffeinated Coffee that resembles any other coffee in Taste & Aroma. Healthy & Easy to prepare and magical for those who wish to give up Tea or Coffee addiction",
    imgUrl:
      "https://res.cloudinary.com/dspqnsoy1/image/upload/v1684209106/Ecom%20App-NEOG/tea-coffe-replacment/Preview-1NoCoffeeCoffeePowder_50915ac7-dae3-4253-b89e-8bc88c0a98eb_700x_sysosg.webp",
    rating: "4",
    totalReviews: 200,
    price: "200",
    originalPrice: "1900",
    categoryName: "Tea_Coffee_Replacements",
    isOutOfStock: false,
    isTrending: false,
  },
  {
    _id: "dd5f50ee-31bf-4e45-bd62-e93559e17069",
    title: "Chamomile Tea",
    description:
      "The healthiest alternative to easily give up Tea or Coffee addiction! Best for mental relaxation & menstrual pain relief.",
    imgUrl:
      "https://res.cloudinary.com/dspqnsoy1/image/upload/v1684209297/Ecom%20App-NEOG/tea-coffe-replacment/Preview-1ChamomileDiredFlowersandTea_700x_hwyci4.webp",
    rating: "2",
    totalReviews: 4000,
    price: "200",
    originalPrice: "1900",
    categoryName: "Tea_Coffee_Replacements",
    isOutOfStock: true,
    isTrending: false,
  },
  {
    _id: "95e6bfc1-af5d-4374-914f-cf9e99d2f20d",
    title: "Lemongrass Rose Tea without Stevia",
    description:
      "The healthiest alternative to easily give up Tea or Coffee addiction to help you begin your Health Transformation journey! Ensures sound sleep and good digestion",
    imgUrl:
      "https://res.cloudinary.com/dspqnsoy1/image/upload/v1684209406/Ecom%20App-NEOG/tea-coffe-replacment/Preview-1LemongrassRoseHerbalTea_700x_xtqusj.webp",
    rating: "1",
    totalReviews: 300,
    price: "99",
    originalPrice: "1000",
    categoryName: "Tea_Coffee_Replacements",
    isOutOfStock: true,
    isTrending: false,
  },
  {
    _id: "51119d77-6f36-4780-8df1-d37ca0a0615c",
    title: "Tulsi Moringa Tea-Organic",
    description:
      "The healthiest alternative to easily give up Tea or Coffee addiction to help you begin your Health Transformation journey! Prefect for relieving cough, cold, fever, stress & overcoming tiedness.",
    imgUrl:
      "https://res.cloudinary.com/dspqnsoy1/image/upload/v1684209528/Ecom%20App-NEOG/tea-coffe-replacment/Preview-1TulsiMoringaTeaandCup_700x_w63yei.webp",
    rating: "4",
    totalReviews: 2000,
    price: "99",
    originalPrice: "1000",
    categoryName: "Tea_Coffee_Replacements",
    isOutOfStock: false,
    isTrending: false,
  },
  {
    _id: "033ede86-9104-473b-8f66-042ed4acfd8c",
    title: "Curry Thyme Tea",
    description:
      "The healthiest alternative to easily give up Tea or Coffee addiction to help you begin your Health Transformation journey! Aids digestion, helps in detoxification and relieves stress.",
    imgUrl:
      "https://res.cloudinary.com/dspqnsoy1/image/upload/v1684209683/Ecom%20App-NEOG/tea-coffe-replacment/Preview-1CurryThymeTea_700x_tk4xhc.webp",
    rating: "4",
    totalReviews: 3200,
    price: "95",
    originalPrice: "500",
    categoryName: "Tea_Coffee_Replacements",
    isOutOfStock: false,
    isTrending: false,
  },
  //Nuts_And_Seeds
  {
    _id: "bbc4fbd9-b5e5-4fed-aeaf-f78a4792005a",
    title: "Flax Seeds",
    description:
      "A plant-based source of healthy fats without any chemical preservatives. Purely organic & raw seeds grown naturally.",
    imgUrl:
      "https://res.cloudinary.com/dspqnsoy1/image/upload/v1684209874/Ecom%20App-NEOG/nuts%20and%20seeds/Preview-1FlaxSeeds_700x_v7gl5w.webp",
    rating: "4",
    totalReviews: 1000,
    price: "100",
    originalPrice: "900",
    categoryName: "Nuts_And_Seeds",
    isOutOfStock: false,
    isTrending: false,
  },
  {
    _id: "58bd1d47-121e-4d96-b9c2-8582cb719cb3",
    title: "Sunflower Seeds",
    description:
      "A plant-based source of healthy fats without any chemical preservatives. Purely organic & raw seeds grown naturally. The finest quality seeds are packed hygienically after hand-picking.",
    imgUrl:
      "https://res.cloudinary.com/dspqnsoy1/image/upload/v1684210065/Ecom%20App-NEOG/nuts%20and%20seeds/Preview-1SunFlowerSeeds_700x_zoaykf.webp",
    rating: "3",
    totalReviews: 4500,
    price: "300",
    originalPrice: "800",
    categoryName: "Nuts_And_Seeds",
    isOutOfStock: true,
    isTrending: false,
  },
  {
    _id: "41a30ecc-b768-4697-b6c1-4bd8df0aacb8",
    title: "Cashew Nuts Whole",
    description:
      "A natural & authentically procured plant-based source of healthy fats! Filled with Mother Nature’s love & essential nutrition, these energy bites are delicious & handpicked carefully before packing.",
    imgUrl:
      "https://res.cloudinary.com/dspqnsoy1/image/upload/v1684033066/Ecom%20App-NEOG/nuts%20and%20seeds/Preview-1Cashews_700x_dyonvb.webp",
    rating: "4",
    totalReviews: 2500,
    price: "500",
    originalPrice: "1500",
    categoryName: "Nuts_And_Seeds",
    isOutOfStock: false,
    isTrending: false,
  },
  {
    _id: "c10c593a-1d1a-48bf-b0ed-1ec5c688e5c1",
    title: "Raw Kashmiri Badaam Giri ",
    description:
      "A naturally grown & authentically procured plant-based source of healthy fats cultivated organically in the Kashmir region of India. High in nutrition, these nuts are fresh & delectable for use in satvic dishes.",
    imgUrl:
      "https://res.cloudinary.com/dspqnsoy1/image/upload/v1684210296/Ecom%20App-NEOG/nuts%20and%20seeds/Preview-1Almonds_700x_d2iota.webp",
    rating: "5",
    totalReviews: 4000,
    price: "1100",
    originalPrice: "5000",
    categoryName: "Nuts_And_Seeds",
    isOutOfStock: false,
    isTrending: false,
  },
  {
    _id: "f40be9a8-621e-44df-ad2e-ed86b6e6229e",
    title: "Raisins Golden - Dried Grapes",
    description:
      "Superior-Quality Mother Nature’s Candy in its Naturally Pure & Unsweetened form! These soft & tiny delectable pieces are loaded with dense nutrition & energy",
    imgUrl:
      "https://res.cloudinary.com/dspqnsoy1/image/upload/v1684210395/Ecom%20App-NEOG/nuts%20and%20seeds/Preview-1RaisinsGolden_700x_lndkib.webp",
    rating: "4",
    totalReviews: 2000,
    price: "350",
    originalPrice: "5500",
    categoryName: "Nuts_And_Seeds",
    isOutOfStock: false,
    isTrending: false,
  },
  //Plastic_Alternatives
  {
    _id: "943b7f7d-7503-4309-a7a5-dbab8a1442d8",
    title: "Stainless Steel Straws",
    description:
      "A perfect Nature-friendly alternative to Plastic Straws! It helps you enjoy a guilt-free conscious by saying NO to single-use plastic and doing your bit to reduce the plastic waste burden from Mother Earth.",
    imgUrl:
      "https://res.cloudinary.com/dspqnsoy1/image/upload/v1684210507/Ecom%20App-NEOG/Plastic%20subtitutes/Preview-1SteelStrawswithCleaningBrushes_33050455-26d0-40e9-8928-7d702cae197d_700x_fjulhv.webp",
    rating: "5",
    totalReviews: 4000,
    price: "400",
    originalPrice: "500",
    categoryName: "Plastic_Alternatives",
    isOutOfStock: false,
    isTrending: true,
  },
  {
    _id: "e9594141-1249-4a5e-a036-d7b770675c4e",
    title: "Neem Wood Comb - 100% Pure",
    description:
      "A Natural Repair for Your Hair! Being plant-based, these wooden combs biodegrade entirely. Their soft edges are gentle for hair, and these combs are excellent for hair health due to their beneficial properties.",
    imgUrl:
      "https://res.cloudinary.com/dspqnsoy1/image/upload/v1684210696/Ecom%20App-NEOG/Plastic%20subtitutes/Preview-1NeemWoodComb_700x_cupghu.webp",
    rating: "4",
    totalReviews: 2000,
    price: "150",
    originalPrice: "1000",
    categoryName: "Plastic_Alternatives",
    isOutOfStock: false,
    isTrending: true,
  },
  {
    _id: "1fe452c5-8ce8-44b9-b3bd-810b05004287",
    title: "Soap Case - Dual Holder Handmade",
    description:
      "A perfect, space-saving, eco-friendly & biodegradable alternative to plastic soap cases! It comes up with a double holder to accommodate two bars simultaneously. Do your bit to reduce the plastic waste burden from Mother Earth by consciously choosing an environment-safe soap dish.",
    imgUrl:
      "https://res.cloudinary.com/dspqnsoy1/image/upload/v1684210856/Ecom%20App-NEOG/Plastic%20subtitutes/Preview-2NeemWoodSoapCaseDualHolderwithHolder_400x_ioq1ub.webp",
    rating: "4",
    totalReviews: 3500,
    price: "400",
    originalPrice: "800",
    categoryName: "Plastic_Alternatives",
    isOutOfStock: false,
    isTrending: false,
  },
  {
    _id: "8893070d-d786-4a78-9f44-0460eb0cff1f",
    title: "Grocery Bag",
    description:
      "Premium-Quality cotton bag with huge carrying capacity to help you say NO to multiple plastic bags while buying fruits & vegetables, leading to considerable plastic savings.",
    imgUrl:
      "https://res.cloudinary.com/dspqnsoy1/image/upload/v1684210954/Ecom%20App-NEOG/Plastic%20subtitutes/Preview-3GroceryBagwithDimensions_700x_sv5jhk.webp",
    rating: "5",
    totalReviews: 2100,
    price: "700",
    originalPrice: "900",
    categoryName: "Plastic_Alternatives",
    isOutOfStock: true,
    isTrending: false,
  },
  {
    _id: "33f9f40a-519e-413b-874a-59f7e9195485",
    title: "Toothbrushes - Set of 4 ",
    description:
      "Perfectly Designed for Natural Dental Care! 100% Plastic-free & Plant-based brushes with completely biodegradable bristles made up of corn starch, bamboo fiber & castor oil. The best alternative to commonly used plastic toothbrushes!",
    imgUrl:
      "https://res.cloudinary.com/dspqnsoy1/image/upload/v1684211113/Ecom%20App-NEOG/Plastic%20subtitutes/soft-pure-natural-eco-friendly-biodegradable-wooden-toothbrush-229_d1i49g.jpg",
    rating: "5",
    totalReviews: 2200,
    price: "150",
    originalPrice: "300",
    categoryName: "Plastic_Alternatives",
    isOutOfStock: false,
    isTrending: false,
  },
];
