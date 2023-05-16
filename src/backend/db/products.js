import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  //Dairy_Substitutes
  {
    _id: uuid(),
    title: "Coconut Milk Powder 100% Vegan & Pure",
    description:
      "The Ultimate Dairy Substitute for Your Health Transformation Journey!No Added Sugar or Flavour | Maltodextrin-Free.",
    imgUrl:
      "https://res.cloudinary.com/dspqnsoy1/image/upload/v1684207345/Ecom%20App-NEOG/Dairy%20Substitutes/Preview-1CoconutMilkPowder_700x_qw4uu4.webp",
    rating: "4",
    totalReviews: 2,
    price: "900",
    categoryName: "Dairy_Substitutes",
    isOutOfStock: false,
  },
  {
    _id: uuid(),
    title: "Cacao Powder-Raw & Organic ",
    description:
      "All time favourite for Home-made, Dairy-free Chocolate Lovers! Healthier substitute for commonly used cocoa powder. Contains more calcium than dairy milk!",
    imgUrl:
      "https://res.cloudinary.com/dspqnsoy1/image/upload/v1684126075/Ecom%20App-NEOG/Dairy%20Substitutes/Preview-1CacaoPowder_700x_rjno1o.webp",
    rating: "5",
    totalReviews: 40,
    price: "310",
    categoryName: "Dairy_Substitutes",
    isOutOfStock: false,
  },
  {
    _id: uuid(),
    title: "Cacao Nibs-No Additives ",
    description:
      "Everyone’s favorite, healthiest & dairy-free alternative to sweetened chocolate chips! Packed with dense nutrition, this chocolaty superfood has a crunchy texture and intense natural cacao flavor & aroma to help you satisfy your choco cravings.",
    imgUrl:
      "https://res.cloudinary.com/dspqnsoy1/image/upload/v1684125921/Ecom%20App-NEOG/Dairy%20Substitutes/Preview-1CacaoNibs_700x_ctiju7.webp",
    rating: "3",
    totalReviews: 60,
    price: "400",
    categoryName: "Dairy_Substitutes",
    isOutOfStock: false,
  },
  {
    _id: uuid(),
    title: "Pintola Almond Butter",
    description:
      "A perfect alternative to commonly used dairy butter with 100% Almonds & Nothing Else!",
    imgUrl:
      "https://res.cloudinary.com/dspqnsoy1/image/upload/v1684207781/Ecom%20App-NEOG/Dairy%20Substitutes/Preview-1AlmondButter_700x_cjlsdx.webp",
    rating: "5 ",
    totalReviews: 200,
    price: "700",
    categoryName: "Dairy_Substitutes",
    isOutOfStock: false,
  },
  {
    _id: uuid(),
    title: "Pintola Peanut Butter Creamy",
    description:
      "A perfect alternative to commonly used dairy butter with 100% Peanuts & Nothing Else!",
    imgUrl:
      "https://res.cloudinary.com/dspqnsoy1/image/upload/v1684207912/Ecom%20App-NEOG/Dairy%20Substitutes/Preview-1PeanutButter_b1443aa9-1589-4274-aa34-7fe74057d412_700x_wu7wxh.webp",
    rating: "5",
    totalReviews: 2,
    price: "800",
    categoryName: "Dairy_Substitutes",
    isOutOfStock: false,
  },

  //Tea_Coffee_Replacements
  {
    _id: uuid(),
    title: "No Coffee Powder Prepared using Chickpeas",
    description:
      "A perfect substitute for Caffeinated Coffee that resembles any other coffee in Taste & Aroma. Healthy & Easy to prepare and magical for those who wish to give up Tea or Coffee addiction",
    imgUrl:
      "https://res.cloudinary.com/dspqnsoy1/image/upload/v1684209106/Ecom%20App-NEOG/tea-coffe-replacment/Preview-1NoCoffeeCoffeePowder_50915ac7-dae3-4253-b89e-8bc88c0a98eb_700x_sysosg.webp",
    rating: "4",
    totalReviews: 200,
    price: "200",
    categoryName: "Tea_Coffee_Replacements",
    isOutOfStock: false,
  },
  {
    _id: uuid(),
    title: "Chamomile Tea",
    description:
      "The healthiest alternative to easily give up Tea or Coffee addiction! Best for mental relaxation & menstrual pain relief.",
    imgUrl:
      "https://res.cloudinary.com/dspqnsoy1/image/upload/v1684209297/Ecom%20App-NEOG/tea-coffe-replacment/Preview-1ChamomileDiredFlowersandTea_700x_hwyci4.webp",
    rating: "2",
    totalReviews: 40,
    price: "200",
    categoryName: "Tea_Coffee_Replacements",
    isOutOfStock: false,
  },
  {
    _id: uuid(),
    title: "Lemongrass Rose Tea without Stevia",
    description:
      "The healthiest alternative to easily give up Tea or Coffee addiction to help you begin your Health Transformation journey! Ensures sound sleep and good digestion",
    imgUrl:
      "https://res.cloudinary.com/dspqnsoy1/image/upload/v1684209406/Ecom%20App-NEOG/tea-coffe-replacment/Preview-1LemongrassRoseHerbalTea_700x_xtqusj.webp",
    rating: "1",
    totalReviews: 30,
    price: "99",
    categoryName: "Tea_Coffee_Replacements",
    isOutOfStock: false,
  },
  {
    _id: uuid(),
    title: "Tulsi Moringa Tea-Organic",
    description:
      "The healthiest alternative to easily give up Tea or Coffee addiction to help you begin your Health Transformation journey! Prefect for relieving cough, cold, fever, stress & overcoming tiedness.",
    imgUrl:
      "https://res.cloudinary.com/dspqnsoy1/image/upload/v1684209528/Ecom%20App-NEOG/tea-coffe-replacment/Preview-1TulsiMoringaTeaandCup_700x_w63yei.webp",
    rating: "4",
    totalReviews: 2,
    price: "99",
    categoryName: "Tea_Coffee_Replacements",
    isOutOfStock: false,
  },
  {
    _id: uuid(),
    title: "Curry Thyme Tea",
    description:
      "The healthiest alternative to easily give up Tea or Coffee addiction to help you begin your Health Transformation journey! Aids digestion, helps in detoxification and relieves stress.",
    imgUrl:
      "https://res.cloudinary.com/dspqnsoy1/image/upload/v1684209683/Ecom%20App-NEOG/tea-coffe-replacment/Preview-1CurryThymeTea_700x_tk4xhc.webp",
    rating: "4",
    totalReviews: 32,
    price: "95",
    categoryName: "Tea_Coffee_Replacements",
    isOutOfStock: false,
  },
  //Nuts_And_Seeds
  {
    _id: uuid(),
    title: "Flax Seeds",
    description:
      "A plant-based source of healthy fats without any chemical preservatives. Purely organic & raw seeds grown naturally.",
    imgUrl:
      "https://res.cloudinary.com/dspqnsoy1/image/upload/v1684209874/Ecom%20App-NEOG/nuts%20and%20seeds/Preview-1FlaxSeeds_700x_v7gl5w.webp",
    rating: "4",
    totalReviews: 100,
    price: "100",
    categoryName: "Nuts_And_Seeds",
    isOutOfStock: false,
  },
  {
    _id: uuid(),
    title: "Sunflower Seeds",
    description:
      "A plant-based source of healthy fats without any chemical preservatives. Purely organic & raw seeds grown naturally. The finest quality seeds are packed hygienically after hand-picking.",
    imgUrl:
      "https://res.cloudinary.com/dspqnsoy1/image/upload/v1684210065/Ecom%20App-NEOG/nuts%20and%20seeds/Preview-1SunFlowerSeeds_700x_zoaykf.webp",
    rating: "3",
    totalReviews: 45,
    price: "180",
    categoryName: "Nuts_And_Seeds",
    isOutOfStock: false,
  },
  {
    _id: uuid(),
    title: "Cashew Nuts Whole",
    description:
      "A natural & authentically procured plant-based source of healthy fats! Filled with Mother Nature’s love & essential nutrition, these energy bites are delicious & handpicked carefully before packing.",
    imgUrl:
      "https://res.cloudinary.com/dspqnsoy1/image/upload/v1684033066/Ecom%20App-NEOG/nuts%20and%20seeds/Preview-1Cashews_700x_dyonvb.webp",
    rating: "4",
    totalReviews: 2,
    price: "500",
    categoryName: "Nuts_And_Seeds",
    isOutOfStock: false,
  },
  {
    _id: uuid(),
    title: "Raw Kashmiri Badaam Giri ",
    description:
      "A naturally grown & authentically procured plant-based source of healthy fats cultivated organically in the Kashmir region of India. High in nutrition, these nuts are fresh & delectable for use in satvic dishes.",
    imgUrl:
      "https://res.cloudinary.com/dspqnsoy1/image/upload/v1684210296/Ecom%20App-NEOG/nuts%20and%20seeds/Preview-1Almonds_700x_d2iota.webp",
    rating: "5",
    totalReviews: 400,
    price: "1100",
    categoryName: "Nuts_And_Seeds",
    isOutOfStock: false,
  },
  {
    _id: uuid(),
    title: "Raisins Golden - Dried Grapes",
    description:
      "Superior-Quality Mother Nature’s Candy in its Naturally Pure & Unsweetened form! These soft & tiny delectable pieces are loaded with dense nutrition & energy",
    imgUrl:
      "https://res.cloudinary.com/dspqnsoy1/image/upload/v1684210395/Ecom%20App-NEOG/nuts%20and%20seeds/Preview-1RaisinsGolden_700x_lndkib.webp",
    rating: "4",
    totalReviews: 200,
    price: "350",
    categoryName: "Nuts_And_Seeds",
    isOutOfStock: false,
  },
  //Plastic_Alternatives
  {
    _id: uuid(),
    title: "Stainless Steel Straws",
    description:
      "A perfect Nature-friendly alternative to Plastic Straws! It helps you enjoy a guilt-free conscious by saying NO to single-use plastic and doing your bit to reduce the plastic waste burden from Mother Earth.",
    imgUrl:
      "https://res.cloudinary.com/dspqnsoy1/image/upload/v1684210507/Ecom%20App-NEOG/Plastic%20subtitutes/Preview-1SteelStrawswithCleaningBrushes_33050455-26d0-40e9-8928-7d702cae197d_700x_fjulhv.webp",
    rating: "5",
    totalReviews: 400,
    price: "400",
    categoryName: "Plastic_Alternatives",
    isOutOfStock: false,
  },
  {
    _id: uuid(),
    title: "Neem Wood Comb - 100% Pure",
    description:
      "A Natural Repair for Your Hair! Being plant-based, these wooden combs biodegrade entirely. Their soft edges are gentle for hair, and these combs are excellent for hair health due to their beneficial properties.",
    imgUrl:
      "https://res.cloudinary.com/dspqnsoy1/image/upload/v1684210696/Ecom%20App-NEOG/Plastic%20subtitutes/Preview-1NeemWoodComb_700x_cupghu.webp",
    rating: "800",
    totalReviews: 200,
    price: "150",
    categoryName: "Plastic_Alternatives",
    isOutOfStock: false,
  },
  {
    _id: uuid(),
    title: "Soap Case - Dual Holder Handmade",
    description:
      "A perfect, space-saving, eco-friendly & biodegradable alternative to plastic soap cases! It comes up with a double holder to accommodate two bars simultaneously. Do your bit to reduce the plastic waste burden from Mother Earth by consciously choosing an environment-safe soap dish.",
    imgUrl:
      "https://res.cloudinary.com/dspqnsoy1/image/upload/v1684210856/Ecom%20App-NEOG/Plastic%20subtitutes/Preview-2NeemWoodSoapCaseDualHolderwithHolder_400x_ioq1ub.webp",
    rating: "4",
    totalReviews: 200,
    price: "400",
    categoryName: "Plastic_Alternatives",
    isOutOfStock: false,
  },
  {
    _id: uuid(),
    title: "Grocery Bag",
    description:
      "Premium-Quality cotton bag with huge carrying capacity to help you say NO to multiple plastic bags while buying fruits & vegetables, leading to considerable plastic savings.",
    imgUrl:
      "https://res.cloudinary.com/dspqnsoy1/image/upload/v1684210954/Ecom%20App-NEOG/Plastic%20subtitutes/Preview-3GroceryBagwithDimensions_700x_sv5jhk.webp",
    rating: "5",
    totalReviews: 200,
    price: "700",
    categoryName: "Plastic_Alternatives",
    isOutOfStock: false,
  },
  {
    _id: uuid(),
    title: "Toothbrushes - Set of 4 ",
    description:
      "Perfectly Designed for Natural Dental Care! 100% Plastic-free & Plant-based brushes with completely biodegradable bristles made up of corn starch, bamboo fiber & castor oil. The best alternative to commonly used plastic toothbrushes!",
    imgUrl:
      "https://res.cloudinary.com/dspqnsoy1/image/upload/v1684211113/Ecom%20App-NEOG/Plastic%20subtitutes/soft-pure-natural-eco-friendly-biodegradable-wooden-toothbrush-229_d1i49g.jpg",
    rating: "5",
    totalReviews: 200,
    price: "150",
    categoryName: "Plastic_Alternatives",
    isOutOfStock: false,
  },
];
