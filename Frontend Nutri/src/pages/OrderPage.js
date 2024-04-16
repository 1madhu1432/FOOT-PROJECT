import React, { useState } from "react";
import "./order.css";

let breakfastMixesData = [
  {
    sno: 1,
    image: "./Frame 260 (2).png",
    price: 5.99,
    productName: "Ready Mix Dosa",
    productDetails: {
      image: "./Frame 44.png",
      description:
        "Provides a balanced combination of carbohydrates (Rice) and protein (Lentils) and helps in preparing a quick and healthy breakfast",
      ingredients:
        "Rice Flour (70%), Urad Dal Flour, Chana Dal Flour, Iodized salt, Acidity regulator (INS 296), and fenugreek seeds",
      preparationMethod:
        "Pour the contents from the pouch into the bowl and mix water to meet the consistency of the regular batter.",
      cookingTip: "10 mins continuous stirring is mandatory to get a good consistency of the batter and crisp dosa.",
      nutritionalInformation: {
        nutrients: [
          { name: "Energy", unit: "kcal", value: 320 },
          { name: "Protein", unit: "g", value: 11.0 },
          { name: "Carbohydrates", unit: "g", value: 63.0 },
          { name: "Total Sugar", unit: "g", value: 1.01 },
          { name: "Dietary Fiber", unit: "g", value: 7.49 },
          { name: "Total Fat", unit: "g", value: 5.1 },
          { name: "Trans fat", unit: "g", value: "Nil" },
          { name: "Cholesterol", unit: "mg", value: "Nil" },
          { name: "Potassium", unit: "mg", value: 358.48 },
          { name: "Iron", unit: "mg", value: 2.04 },
          { name: "Calcium", unit: "mg", value: 26.25 },
        ],
      },
    },
  },
  {
    sno: 2,
    image: "./Frame 260 (2).png",
    price: 5.99,
    productName: "Ready Mix Idli",
    productDetails: {
      image: "./Frame 44.png",
      description:
        "Provides a balanced combination of carbohydrates (Rice) and protein (Lentils) and helps in preparing a quick and healthy breakfast",
      ingredients: "Rice Flour (70%), Urad Dal Flour, Chana Dal Flour, Iodized salt, Acidity regulator (INS 296)",
      preparationMethod:
        "Pour the contents from the pouch into the bowl and mix water to meet the consistency of the regular batter. Spread the batter on the idli plate and steam it for 10 – 15 mins. Once removed, serve hot with chutney.",
      nutritionalInformation: {
        nutrients: [
          { name: "Energy", unit: "kcal", value: 315 },
          { name: "Protein", unit: "g", value: 10.7 },
          { name: "Carbohydrates", unit: "g", value: 64.0 },
          { name: "Total Sugar", unit: "g", value: 0.51 },
          { name: "Dietary Fiber", unit: "g", value: 10.31 },
          { name: "Total Fat", unit: "g", value: 0.72 },
          { name: "Trans fat", unit: "g", value: "Nil" },
          { name: "Cholesterol", unit: "mg", value: "Nil" },
          { name: "Potassium", unit: "mg", value: 324.22 },
          { name: "Iron", unit: "mg", value: 1.87 },
          { name: "Calcium", unit: "mg", value: 23.28 },
        ],
      },
    },
  },
  {
    sno: 3,
    image: "./Frame 260 (2).png",
    price: 5.99,
    productName: "Ready Mix Uttapam",
    productDetails: {
      image: "./Frame 44.png",
      description:
        "Provides a balanced combination of carbohydrates (Rice) and protein (Lentils) and helps in preparing a quick and healthy breakfast",
      ingredients:
        "Rice Flour, Urad Dal Flour, Chana Dal Flour, Iodized salt, Acidity regulator (INS 296), fenugreek seeds and Vegetables",
      preparationMethod:
        "Pour the contents from the pouch into the bowl and mix water to meet the consistency of the regular batter. Now it is ready for making tasty & fluffy Uttapam.",
      nutritionalInformation: {
        nutrients: [
          { name: "Energy", unit: "kcal", value: 370 },
          { name: "Protein", unit: "g", value: 10.6 },
          { name: "Carbohydrates", unit: "g", value: 70.0 },
          { name: "Total Sugar", unit: "g", value: 5.22 },
          { name: "Dietary Fiber", unit: "g", value: 7.08 },
          { name: "Total Fat", unit: "g", value: 2.6 },
          { name: "Trans fat", unit: "g", value: "Nil" },
          { name: "Cholesterol", unit: "mg", value: "Nil" },
          { name: "Potassium", unit: "mg", value: 212.26 },
          {
            name: "Iron",
            unit: "mg",

            value: 4.01,
          },
          { name: "Calcium", unit: "mg", value: 52.36 },
        ],
      },
    },
  },
  {
    sno: 4,
    image: "./Frame 260 (2).png",
    price: 5.99,
    productName: "Ready Mix Paniyaram",
    productDetails: {
      image: "./Frame 44.png",
      description:
        "Provides a balanced combination of carbohydrates (Rice) and protein (Lentils) and helps in preparing a quick and healthy breakfast",
      ingredients:
        "Rice Flour, Urad Dal Flour, Chana Dal Flour, Iodized salt, Acidity regulator (INS 296), fenugreek seeds and Vegetables",
      preparationMethod:
        "Pour the contents from the pouch into the bowl and mix water to meet the consistency of the regular batter. Now it is ready for making tasty & fluffy Paniyaram.",
      nutritionalInformation: {
        nutrients: [
          { name: "Energy", unit: "kcal", value: 375 },
          { name: "Protein", unit: "g", value: 10.0 },
          { name: "Carbohydrates", unit: "g", value: 73.9 },
          { name: "Total Sugar", unit: "g", value: 4.66 },
          { name: "Dietary Fiber", unit: "g", value: 7.78 },
          { name: "Total Fat", unit: "g", value: 1.1 },
          { name: "Trans fat", unit: "g", value: "Nil" },
          { name: "Cholesterol", unit: "mg", value: "Nil" },
          { name: "Potassium", unit: "mg", value: 279.11 },
          { name: "Iron", unit: "mg", value: 281 },
          { name: "Calcium", unit: "mg", value: 62.21 },
        ],
      },
    },
  },
  {
    sno: 5,
    image: "./Frame 260 (2).png",
    price: 5.99,
    productName: "Ready Mix Millet Dosa",
    productDetails: {
      image: "./Frame 44.png",
      description:
        "Provides a balanced combination of carbohydrates (Rice) and protein (Lentils) helps in preparing a quick and healthy breakfast. High in Protein and Fibre. Naturally Gluten Free.",
      ingredients:
        "White Rice Flour, Composite Millet Flour, Urad Dal Flour, Chana Dal Flour, Iodized salt, Acidity regulator (INS 296) & Fenugreek seeds",
      preparationMethod:
        "Pour the contents from the pouch into the bowl and mix water to meet the consistency of the regular batter.",
      cookingTip: "10 mins continuous stirring is mandatory to get a good consistency of the batter and crisp dosa.",
      nutritionalInformation: {
        nutrients: [
          { name: "Energy", unit: "kcal", value: 346 },
          { name: "Protein", unit: "g", value: 10.2 },
          { name: "Carbohydrates", unit: "g", value: 65.3 },
          { name: "Total Sugar", unit: "g", value: 1.32 },
          { name: "Dietary Fiber", unit: "g", value: 6.7 },
          { name: "Total Fat", unit: "g", value: 1.9 },
          { name: "Trans fat", unit: "g", value: "Nil" },
          { name: "Cholesterol", unit: "mg", value: "Nil" },
          { name: "Potassium", unit: "mg", value: 107.3 },
          { name: "Iron", unit: "mg", value: 3.56 },
          { name: "Calcium", unit: "mg", value: 38.76 },
        ],
      },
    },
  },
  {
    sno: 6,
    image: "./Frame 260 (2).png",
    price: 5.99,
    productName: "Ready Mix Millet Idli",
    productDetails: {
      image: "./Frame 44.png",
      description:
        "Provides a balanced combination of carbohydrates (Rice) and protein (Lentils) helps in preparing a quick and healthy breakfast. High in Protein and Fibre. Naturally Gluten Free.",
      ingredients:
        "White Rice Flour (70%), Composite Millet Flour, Urad Dal Flour, Chana Dal Flour, Iodized salt, Acidity regulator (INS 296)",
      preparationMethod:
        "Pour the contents from the pouch into the bowl and mix water to meet the consistency of the regular batter. Spread the batter on the idli plate and steam it for 10 – 15 mins. Once removed, serve hot with chutney.",
      nutritionalInformation: {
        nutrients: [
          { name: "Energy", unit: "kcal", value: 357 },
          { name: "Protein", unit: "g", value: 10.4 },
          { name: "Carbohydrates", unit: "g", value: 69.4 },
          { name: "Total Sugar", unit: "g", value: 3.06 },
          { name: "Dietary Fiber", unit: "g", value: 7.84 },
          { name: "Total Fat", unit: "g", value: 1.7 },
          { name: "Trans fat", unit: "g", value: "Nil" },
          { name: "Cholesterol", unit: "mg", value: "Nil" },
          { name: "Potassium", unit: "mg", value: 85.35 },
          { name: "Iron", unit: "mg", value: 8.13 },
          { name: "Calcium", unit: "mg", value: 35.4 },
        ],
      },
    },
  },
  {
    sno: 7,
    image: "./Frame 260 (2).png",
    price: 5.99,
    productName: "Ready Mix Millet Uttapam",
    productDetails: {
      image: "./Frame 44.png",
      description:
        "Provides a balanced combination of carbohydrates (Rice) and protein (Lentils) helps in preparing a quick and healthy breakfast. High in Protein and Fibre. Naturally Gluten Free.",
      ingredients:
        "White Rice Flour, Composite Millet Flour, Urad Dal Flour, Chana Dal Flour, Iodized salt, Acidity Regulator (INS 296), Fenugreek Seeds and Vegetables.",
      preparationMethod:
        "Pour the contents from the pouch into the bowl and mix water to meet the consistency of the regular batter. Now it is ready for making tasty & fluffy Uttapam.",
      nutritionalInformation: {
        nutrients: [
          { name: "Energy", unit: "kcal", value: 381 },
          { name: "Protein", unit: "g", value: 11.1 },
          { name: "Carbohydrates", unit: "g", value: 71.8 },
          { name: "Total Sugar", unit: "g", value: 5.13 },
          { name: "Dietary Fiber", unit: "g", value: 8.48 },
          { name: "Total Fat", unit: "g", value: 2.0 },
          { name: "Trans fat", unit: "g", value: "Nil" },
          { name: "Cholesterol", unit: "mg", value: "Nil" },
          { name: "Potassium", unit: "mg", value: 315.4 },
          { name: "Iron", unit: "mg", value: 3.84 },
          { name: "Calcium", unit: "mg", value: 62.27 },
        ],
      },
    },
  },
  {
    sno: 8,
    image: "./Frame 260 (2).png",
    price: 5.99,
    productName: "Ready Mix Millet Paniyaram",
    productDetails: {
      image: "./Frame 44.png",
      description:
        "Provides a balanced combination of carbohydrates (Rice) and protein (Lentils) helps in preparing a quick and healthy breakfast. High in Protein and Fibre. Naturally Gluten Free.",
      ingredients:
        "White Rice Flour, Composite Millet Flour, Urad Dal Flour, Chana Dal Flour, Iodized salt, Acidity Regulator (INS 296), Fenugreek Seeds and Vegetables.",
      preparationMethod:
        "Pour the contents from the pouch into the bowl and mix water to meet the consistency of the regular batter. Now it is ready for making tasty & fluffy Paniyaram/Ponganalu.",
      nutritionalInformation: {
        nutrients: [
          { name: "Energy", unit: "kcal", value: 381 },
          { name: "Protein", unit: "g", value: 11.1 },
          { name: "Carbohydrates", unit: "g", value: 71.8 },
          { name: "Total Sugar", unit: "g", value: 5.13 },
          { name: "Dietary Fiber", unit: "g", value: 8.48 },
          { name: "Total Fat", unit: "g", value: 2.0 },
          { name: "Trans fat", unit: "g", value: "Nil" },
          { name: "Cholesterol", unit: "mg", value: "Nil" },
          { name: "Potassium", unit: "mg", value: 315.4 },
          { name: "Iron", unit: "mg", value: 3.84 },
          { name: "Calcium", unit: "mg", value: 62.21 },
        ],
      },
    },
  },
  {
    sno: 10,
    image: "./Frame 260 (2).png",
    price: 5.99,
    productName: "Ready Mix Black Rice Idli",
    productDetails: {
      image: "./Frame 44.png",
      description:
        "Provides a balanced combination of carbohydrates (Rice) and protein (Lentils) helps in preparing a quick and healthy breakfast. High Protein and Fibre. Rich in Antioxidants. Naturally Gluten Free.",
      ingredients:
        "Rice Ravva, Black Rice Ravva, Urad Dal Flour, Chana Dal Flour, Iodized Salt, Acidity Regulator (INS 296) and Fenugreek Seed",
      preparationMethod:
        "Pour the contents from the pouch into the bowl and mix water to meet the consistency of the regular batter. Spread the batter on the idli plate and steam it for 10 – 15 mins. Once removed, serve hot with chutney.",
      nutritionalInformation: {
        nutrients: [
          { name: "Energy", unit: "kcal", value: 339 },
          { name: "Protein", unit: "g", value: 9.4 },
          { name: "Carbohydrates", unit: "g", value: 66.2 },
          { name: "Total Sugar", unit: "g", value: 2.54 },
          { name: "Dietary Fiber", unit: "g", value: 9.26 },
          { name: "Total Fat", unit: "g", value: 1.0 },
          { name: "Trans fat", unit: "g", value: "Nil" },
          { name: "Cholesterol", unit: "g", value: "Nil" },
          { name: "Potassium", unit: "mg", value: 65.3 },
          { name: "Iron", unit: "mg", value: 7.02 },
          { name: "Calcium", unit: "mg", value: 33.26 },
        ],
      },
    },
  },
  {
    sno: 11,
    image: "./Frame 260 (2).png",
    price: 5.99,
    productName: "Ready Mix Black Rice Uttapam",
    productDetails: {
      image: "./Frame 44.png",
      description:
        "Provides a balanced combination of carbohydrates (Rice) and protein (Lentils) and helps in preparing a quick and healthy breakfast. High Protein and Fibre. Rich in Antioxidants. Naturally Gluten Free.",
      ingredients:
        "White Rice Flour, Black Rice Flour, Urad Dal Flour, Chana Dal Flour, Iodized salt, Acidity Regulator (INS 296), Fenugreek seeds and Vegetables",
      preparationMethod:
        "Pour the contents from the pouch into the bowl and mix water to meet the consistency of the regular batter. Now it is ready for making tasty & fluffy Uttapam.",
      nutritionalInformation: {
        nutrients: [
          { name: "Energy", unit: "kcal", value: 373 },
          { name: "Protein", unit: "g", value: 10.2 },
          { name: "Carbohydrates", unit: "g", value: 80.67 },
          { name: "Total Sugar", unit: "g", value: 4.66 },
          { name: "Dietary Fiber", unit: "g", value: 10.26 },
          { name: "Total Fat", unit: "g", value: 1.4 },
          { name: "Trans fat", unit: "g", value: "Nil" },
          { name: "Cholesterol", unit: "g", value: "Nil" },
          { name: "Potassium", unit: "mg", value: 296.51 },
          { name: "Iron", unit: "mg", value: 3.01 },
          { name: "Calcium", unit: "mg", value: 58.27 },
        ],
      },
    },
  },
  {
    sno: 12,
    image: "./Frame 260 (2).png",
    price: 5.99,
    productName: "Ready Mix Black Rice Paniyaram",
    productDetails: {
      image: "./Frame 44.png",
      description:
        "Provides a balanced combination of carbohydrates (Rice) and protein (Lentils) and helps in preparing a quick and healthy breakfast. High Protein and Fibre. Rich in Antioxidants. Naturally Gluten Free.",
      ingredients:
        "White Rice Flour, Black Rice Flour, Urad Dal Flour, Chana Dal Flour, Iodized salt, Acidity Regulator (INS 296), Fenugreek seeds and Vegetables",
      preparationMethod:
        "Pour the contents from the pouch into the bowl and mix water to meet the consistency of the regular batter. Now it is ready for making tasty & fluffy Paniyaram/Ponganalu.",
      nutritionalInformation: {
        nutrients: [
          { name: "Energy", unit: "kcal", value: 373 },
          { name: "Protein", unit: "g", value: 10.2 },
          { name: "Carbohydrates", unit: "g", value: 70.4 },
          { name: "Total Sugar", unit: "g", value: 4.66 },
          { name: "Dietary Fiber", unit: "g", value: 10.26 },
          { name: "Total Fat", unit: "g", value: 1.4 },
          { name: "Trans fat", unit: "g", value: "Nil" },
          { name: "Cholesterol", unit: "g", value: "Nil" },
          { name: "Potassium", unit: "mg", value: 296.55 },
          { name: "Iron", unit: "mg", value: 3.01 },
          { name: "Calcium", unit: "mg", value: 58.27 },
        ],
      },
    },
  },
  {
    sno: 13,
    image: "./Frame 260 (2).png",
    price: 5.99,
    productName: "Ready Mix Red Rice Dosa",
    productDetails: {
      image: "./Frame 44.png",
      description:
        "Provides a balanced combination of carbohydrates (Rice) and protein (Lentils) and helps in preparing a quick and healthy breakfast. Those with Wheat Allergies or Gluten Intolerance will find this recipe a nice addition to their diets.",
      ingredients:
        "White Rice Flour, Red Rice Flour, Urad Dal Flour, Chana Dal Flour, Iodized salt, Acidity Regulator (INS 296) and Fenugreek Seeds",
      preparationMethod:
        "Pour the contents from the pouch into the bowl and mix water to meet the consistency of the regular batter. Cooking Tip: 10 mins continuous stirring is mandatory to get a good consistency of the batter and crisp dosa.",
      nutritionalInformation: {
        nutrients: [
          { name: "Energy", unit: "kcal", value: 325 },
          { name: "Protein", unit: "g", value: 8.9 },
          { name: "Carbohydrates", unit: "g", value: 60.0 },
          { name: "Total Sugar", unit: "g", value: 2.27 },
          { name: "Dietary Fiber", unit: "g", value: 8.69 },
          { name: "Total Fat", unit: "g", value: 1.7 },
          { name: "Trans fat", unit: "g", value: "Nil" },
          { name: "Cholesterol", unit: "g", value: "Nil" },
          { name: "Potassium", unit: "mg", value: 78.25 },
          { name: "Iron", unit: "mg", value: 2.67 },
          { name: "Calcium", unit: "mg", value: 37.92 },
        ],
      },
    },
  },
  {
    sno: 14,
    image: "./Frame 260 (2).png",
    price: 5.99,
    productName: "Ready Mix Red Rice Idli",
    productDetails: {
      image: "./Frame 44.png",
      description:
        "Provides a balanced combination of carbohydrates (Rice) and protein (Lentils) and helps in preparing a quick and healthy breakfast. Those with Wheat Allergies or Gluten Intolerance will find this recipe a nice addition to their diets.",
      ingredients:
        "White Rice Ravva, Red Rice Ravva, Urad Dal Flour, Chana Dal Flour, Iodized Salt, Acidity Regulator (INS 296) and Fenugreek Seed",
      preparationMethod:
        "Pour the contents from the pouch into the bowl and mix water to meet the consistency of the regular batter. Spread the batter on the idli plate and steam it for 10 – 15 mins. Once removed, serve hot with chutney.",
      nutritionalInformation: {
        nutrients: [
          { name: "Energy", unit: "kcal", value: 340 },
          { name: "Protein", unit: "g", value: 9.7 },
          { name: "Carbohydrates", unit: "g", value: 65.5 },
          { name: "Total Sugar", unit: "g", value: 2.54 },
          { name: "Dietary Fiber", unit: "g", value: 9.65 },
          { name: "Total Fat", unit: "g", value: 1.5 },
          { name: "Trans fat", unit: "g", value: "Nil" },
          { name: "Cholesterol", unit: "g", value: "Nil" },
          { name: "Potassium", unit: "mg", value: 65.01 },
          { name: "Iron", unit: "mg", value: 7.06 },
          { name: "Calcium", unit: "mg", value: 33.26 },
        ],
      },
    },
  },
  {
    sno: 15,
    image: "./Frame 260 (2).png",
    price: 5.99,
    productName: "Ready Mix Red Rice Uttapam",
    productDetails: {
      image: "./Frame 44.png",
      description:
        "Provides a balanced combination of carbohydrates (Rice) and protein (Lentils) and helps in preparing a quick and healthy breakfast. Those with Wheat Allergies or Gluten Intolerance will find this recipe a nice addition to their diets.",
      ingredients:
        "White Rice Flour, Red Rice Flour, Urad Dal Flour, Chana Dal Flour, Iodized salt, Acidity Regulator (INS 296), Fenugreek seeds and Vegetables",
      preparationMethod:
        "Pour the contents from the pouch into the bowl and mix water to meet the consistency of the regular batter. Now it is ready for making tasty & fluffy Uttapam.",
      nutritionalInformation: {
        nutrients: [
          { name: "Energy", unit: "kcal", value: 374 },
          { name: "Protein", unit: "g", value: 11.0 },
          { name: "Carbohydrates", unit: "g", value: 80.0 },
          { name: "Total Sugar", unit: "g", value: 4.6 },
          { name: "Dietary Fiber", unit: "g", value: 10.62 },
          { name: "Total Fat", unit: "g", value: 1.8 },
          { name: "Trans fat", unit: "g", value: "Nil" },
          { name: "Cholesterol", unit: "g", value: "Nil" },
          { name: "Potassium", unit: "mg", value: 296.23 },
          { name: "Iron", unit: "mg", value: 3.04 },
          { name: "Calcium", unit: "mg", value: 58.27 },
        ],
      },
    },
  },
  {
    sno: 16,
    image: "./Frame 260 (2).png",
    price: 5.99,
    productName: "Ready Mix Red Rice Paniyaram",
    productDetails: {
      image: "./Frame 44.png",
      description:
        "Provides a balanced combination of carbohydrates (Rice) and protein (Lentils) and helps in preparing a quick and healthy breakfast. Those with Wheat Allergies or Gluten Intolerance will find this recipe a nice addition to their diets.",
      ingredients:
        "White Rice Flour, Red Rice Flour, Urad Dal Flour, Chana Dal Flour, Iodized salt, Acidity Regulator (INS 296), Fenugreek seeds and Vegetables",
      preparationMethod:
        "Pour the contents from the pouch into the bowl and mix water to meet the consistency of the regular batter. Now it is ready for making tasty & fluffy Paniyaram/Ponganalu.",
      nutritionalInformation: {
        nutrients: [
          { name: "Energy", unit: "kcal", value: 374 },
          { name: "Protein", unit: "g", value: 10.5 },
          { name: "Carbohydrates", unit: "g", value: 69.8 },
          { name: "Total Sugar", unit: "g", value: 4.66 },
          { name: "Dietary Fiber", unit: "g", value: 10.62 },
          { name: "Total Fat", unit: "g", value: 1.8 },
          { name: "Trans fat", unit: "g", value: "Nil" },
          { name: "Cholesterol", unit: "g", value: "Nil" },
          { name: "Potassium", unit: "mg", value: 296.27 },
          { name: "Iron", unit: "mg", value: 3.04 },
          { name: "Calcium", unit: "mg", value: 58.27 },
        ],
      },
    },
  },
  {
    sno: 17,
    image: "./Frame 260 (2).png",
    price: 5.99,
    productName: "Ready Mix Brown Rice Dosa",
    productDetails: {
      image: "./Frame 44.png",
      description:
        "Provides a balanced combination of carbohydrates (Rice) and protein (Lentils) and helps in preparing a quick and healthy breakfast. High in Fibre and Low Glycemic Index.",
      ingredients:
        "White Rice Flour, Brown Rice Flour, Urad Dal Flour, Chana Dal Flour, Iodized salt, Acidity Regulator (INS 296) and Fenugreek Seeds",
      preparationMethod:
        "Pour the contents from the pouch into the bowl and mix water to meet the consistency of the regular batter. Cooking Tip: 10 mins continuous stirring is mandatory to get a good consistency of the batter and crisp dosa.",
      nutritionalInformation: {
        nutrients: [
          { name: "Energy", unit: "kcal", value: 339 },
          { name: "Protein", unit: "g", value: 8.9 },
          { name: "Carbohydrates", unit: "g", value: 65.1 },
          { name: "Total Sugar", unit: "g", value: 2.5 },
          { name: "Dietary Fiber", unit: "g", value: 6.01 },
          { name: "Total Fat", unit: "g", value: 1.8 },
          { name: "Trans fat", unit: "g", value: "Nil" },
          { name: "Cholesterol", unit: "g", value: "Nil" },
          { name: "Potassium", unit: "mg", value: 40.59 },
          { name: "Iron", unit: "mg", value: 2.96 },
          { name: "Calcium", unit: "mg", value: 37.92 },
        ],
      },
    },
  },
  {
    sno: 18,
    image: "./Frame 260 (2).png",
    price: 5.99,
    productName: "Ready Mix Brown Rice Idli",
    productDetails: {
      image: "./Frame 44.png",
      description:
        "Provides a balanced combination of carbohydrates (Rice) and protein (Lentils) and helps in preparing a quick and healthy breakfast. High in Fibre and Low Glycemic Index.",
      ingredients:
        "White Rice Ravva, Brown Rice Ravva, Urad Dal Flour, Chana Dal Flour, Iodized Salt, Acidity Regulator (INS 296) and Fenugreek Seed",
      preparationMethod:
        "Pour the contents from the pouch into the bowl and mix water to meet the consistency of the regular batter. Spread the batter on the idli plate and steam it for 10 – 15 mins. Once removed, serve hot with chutney.",
      nutritionalInformation: {
        nutrients: [
          { name: "Energy", unit: "kcal", value: 339 },
          { name: "Protein", unit: "g", value: 9.4 },
          { name: "Carbohydrates", unit: "g", value: 68.2 },
          { name: "Total Sugar", unit: "g", value: 2.78 },
          { name: "Dietary Fiber", unit: "g", value: 6.33 },
          { name: "Total Fat", unit: "g", value: 1.4 },
          { name: "Trans fat", unit: "g", value: "Nil" },
          { name: "Cholesterol", unit: "g", value: "Nil" },
          { name: "Potassium", unit: "mg", value: 183.3 },
          { name: "Iron", unit: "mg", value: 7.33 },
          { name: "Calcium", unit: "mg", value: 33.26 },
        ],
      },
    },
  },
  {
    sno: 19,
    image: "./Frame 260 (2).png",
    price: 5.99,
    productName: "Ready Mix Brown Rice Uttapam",
    productDetails: {
      image: "./Frame 44.png",
      description:
        "Provides a balanced combination of carbohydrates (Rice) and protein (Lentils) and helps in preparing a quick and healthy breakfast. High in Fibre and Low Glycemic Index.",
      ingredients:
        "White Rice Flour, Red Rice Flour, Urad Dal Flour, Chana Dal Flour, Iodized salt, Acidity Regulator (INS 296), Fenugreek seeds and Vegetables",
      preparationMethod:
        "Pour the contents from the pouch into the bowl and mix water to meet the consistency of the regular batter. Now it is ready for making tasty & fluffy Uttapam.",
      nutritionalInformation: {
        nutrients: [
          { name: "Energy", unit: "kcal", value: 373 },
          { name: "Protein", unit: "g", value: 10.2 },
          { name: "Carbohydrates", unit: "g", value: 72.3 },
          { name: "Total Sugar", unit: "g", value: 4.89 },
          { name: "Dietary Fiber", unit: "g", value: 7.5 },
          { name: "Total Fat", unit: "g", value: 1.7 },
          { name: "Trans fat", unit: "g", value: "Nil" },
          { name: "Cholesterol", unit: "g", value: "Nil" },
          { name: "Potassium", unit: "mg", value: 252.33 },
          { name: "Iron", unit: "mg", value: 3.29 },
          { name: "Calcium", unit: "mg", value: 58.27 },
        ],
      },
    },
  },
  {
    sno: 20,
    image: "./Frame 260 (2).png",
    price: 5.99,
    productName: "Ready Mix Brown Rice Paniyaram",
    productDetails: {
      image: "./Frame 44.png",
      description:
        "Provides a balanced combination of carbohydrates (Rice) and protein (Lentils) and helps in preparing a quick and healthy breakfast. High in Fibre and Low Glycemic Index.",
      ingredients:
        "White Rice Flour, Red Rice Flour, Urad Dal Flour, Chana Dal Flour, Iodized salt, Acidity Regulator (INS 296), Fenugreek seeds and Vegetables",
      preparationMethod:
        "Pour the contents from the pouch into the bowl and mix water to meet the consistency of the regular batter. Now it is ready for making tasty & fluffy Paniyaram/Ponganalu.",
      nutritionalInformation: {
        nutrients: [
          { name: "Energy", unit: "kcal", value: 373 },
          { name: "Protein", unit: "g", value: 10.2 },
          { name: "Carbohydrates", unit: "g", value: 72.3 },
          { name: "Total Sugar", unit: "g", value: 4.89 },
          { name: "Dietary Fiber", unit: "g", value: 7.5 },
          { name: "Total Fat", unit: "g", value: 1.7 },
          { name: "Trans fat", unit: "g", value: "Nil" },
          { name: "Cholesterol", unit: "g", value: "Nil" },
          { name: "Potassium", unit: "mg", value: 252.37 },
          { name: "Iron", unit: "mg", value: 3.29 },
          { name: "Calcium", unit: "mg", value: 58.27 },
        ],
      },
    },
  },
  {
    sno: 24,
    image: "./Frame 260 (2).png",
    price: 5.99,
    productName: "Ready Mix Groundnut Chutney",
    productDetails: {
      image: "./Frame 44.png",
      description: "Source of healthy fats. Contains good amounts of vegetable protein. Full of antioxidants.",
      ingredients: "Peanuts, chilies, Salt, and Cumin Seeds",
      preparationMethod:
        "Add water to get the desired consistency. Take 2 tbsp of oil and add 1 tsp of urad dal, 1 tsp of mustard seeds, 1 tsp of jeera, 2-3 red chilies, and a few curry leaves. Saute it well.",
      nutritionalInformation: {
        nutrients: [
          { name: "Energy", unit: "kcal", value: 531.0 },
          { name: "Protein", unit: "g", value: 25.0 },
          { name: "Carbohydrates", unit: "g", value: 14.0 },
          { name: "Total Sugar", unit: "g", value: 3.7 },
          { name: "Dietary Fiber", unit: "g", value: 8.4 },
          { name: "Total Fat", unit: "g", value: 4.6 },
          { name: "Trans fat", unit: "g", value: 0 },
          { name: "Cholesterol", unit: "g", value: 0 },
          { name: "Potassium", unit: "mg", value: 656.0 },
          { name: "Iron", unit: "mg", value: 1.8 },
          { name: "Calcium", unit: "mg", value: 63.0 },
        ],
      },
    },
  },
  {
    sno: 25,
    image: "./Frame 260 (2).png",
    price: 5.99,
    productName: "Ready Mix Red Chutney Spread for Dosa",
    productDetails: {
      image: "./Frame 44.png",
      description: "Aids in digestion. Rich in Antioxidants.",
      ingredients: "Red Chillies, Tomato Paste, Salt, Garlic Pods, and Sugar",
      preparationMethod:
        "Take 15 grams of Ready Mix Red Chutney from the pack, add 10 grams of water, and mix thoroughly. Consume as such along with your favorite dish.",
      nutritionalInformation: {
        nutrients: [
          { name: "Energy", unit: "kcal", value: 116.0 },
          { name: "Protein", unit: "g", value: 1.5 },
          { name: "Carbohydrates", unit: "g", value: 23.0 },
          { name: "Total Sugar", unit: "g", value: 23.0 },
          { name: "Dietary Fiber", unit: "g", value: 0 },
          { name: "Total Fat", unit: "g", value: 0 },
          { name: "Trans fat", unit: "g", value: 0 },
          { name: "Cholesterol", unit: "g", value: 0 },
          { name: "Potassium", unit: "mg", value: 0.8 },
          { name: "Iron", unit: "mg", value: 0 },
          { name: "Calcium", unit: "mg", value: 339.0 },
        ],
      },
    },
  },
  {
    sno: 26,
    image: "./Frame 260 (2).png",
    price: 5.99,
    productName: "Ready Mix Ghee IDli Spread",
    productDetails: {
      image: "./Frame 44.png",
      description: "Aids in digestion. Rich in Antioxidants.",
      ingredients:
        "Chana dal, Urad dal, Roasted Bengal gram, Sesame seeds, Poppy seeds, Dry coconut powder, Basmati rice, Hing, curry leaves, Chilli powder",
      preparationMethod:
        "Take 15 grams of Ready Mix Ghee Idli from the pack and pour 1 tsp hot ghee and mix thoroughly. Spread this mixture onto the hot idli and enjoy the taste.",
      nutritionalInformation: {
        nutrients: [
          { name: "Energy", unit: "kcal", value: 704.0 },
          { name: "Protein", unit: "g", value: 21.0 },
          { name: "Carbohydrates", unit: "g", value: 53.0 },
          { name: "Total Sugar", unit: "g", value: 1.2 },
          { name: "Dietary Fiber", unit: "g", value: 18.0 },
          { name: "Total Fat", unit: "g", value: 9.0 },
          { name: "Trans fat", unit: "g", value: "Nil" },
          { name: "Cholesterol", unit: "g", value: "Nil" },
          { name: "Potassium", unit: "mg", value: 27.0 },
          { name: "Iron", unit: "mg", value: 4.9 },
          { name: "Calcium", unit: "mg", value: 109.0 },
        ],
      },
    },
  },
  {
    sno: 27,
    image: "./Frame 260 (2).png",
    price: 5.99,
    productName: "Ready Mix Sambar Dal",
    productDetails: {
      image: "./Frame 44.png",
      description: "Aids in digestion. Rich in Antioxidants.",
      ingredients: "Red Chilli Paste, Tomato Paste, Salt, Garlic Pods, and Sugar",
      preparationMethod:
        "Step-1: Take 2 tbsp of oil in a pan add 1 tsp of methi seeds, 1 tsp of mustard seeds, and 1 tsp of jeera sauté it well and add turmeric. Step 2: Add 2 dry chillies, 5-6 garlic cloves (crushed), few curry leaves, and then add 2 cups of mixed vegetables of your choice (sliced onions, carrots, beans, tomato, bottle gourd, radish, drumstick, ladies finger and brinjal, etc..) and fry it for 2 mins in oil and then add 3 cups of water, now leave it for 5 to 7 min to get the vegetables cooked. Before completely cooking, add 1 cup of Ready Mix Sambar Dal (prior to mixing in a slight amount of water) in a vessel and mix gradually with a mixer and keep mixing without a lid. Add the desired quantity of water to get the consistency of your choice. Now, add salt and tamarind paste (add desired quantity). Step 3: Then add 3 to 4 tbsp of Ready Mix Sambar Dal Powder (add it in the final stage of cooking). Add fresh coriander leaves.",
      nutritionalInformation: {
        nutrients: [
          { name: "Energy", unit: "kcal", value: 321.0 },
          { name: "Protein", unit: "g", value: 18.0 },
          { name: "Carbohydrates", unit: "g", value: 56.0 },
          { name: "Total Sugar", unit: "g", value: 1.0 },
          { name: "Dietary Fiber", unit: "g", value: 1.6 },
          { name: "Total Fat", unit: "g", value: 2.8 },
          { name: "Trans fat", unit: "g", value: "Nil" },
          { name: "Cholesterol", unit: "g", value: "Nil" },
          { name: "Potassium", unit: "mg", value: 58.0 },
          { name: "Iron", unit: "mg", value: 0.6 },
          { name: "Calcium", unit: "mg", value: 9.8 },
        ],
      },
    },
  },
  {
    sno: 28,
    image: "./Frame 260 (2).png",
    price: 5.99,
    productName: "Ready Mix Sambar Masala",
    productDetails: {
      image: "./Frame 44.png",
      description: "Aids in digestion. Rich in Antioxidants.",
      ingredients:
        "Coriander Seeds, Dry Chillies, Cumin Seeds, Toor Dal, Black Pepper, Methi seeds, Mustard Seeds, Asafoetida, Curry Leaves",
      preparationMethod:
        "Initially take 4 tbsp of Toor dal with 3 cups of water, ½ tsp oil, and ¼ tsp of turmeric powder. Cook it well and keep it aside. Add 300 grams of cooked vegetables to the dal mixture. Take 2 tsp of tamarind pulp, 1 tsp of jaggery, and 1 cup of water and boil it well. After a few minutes of boiling add 1 tsp of Ready Mix Sambar Masala. Mix with a boiled mixer with vegetables and cooked dal and add salt. Again, cook for 5 to 10 mins. Take 1 tsp ghee/Vegetable oil and ½ tsp mustard seeds, 1 tsp urad dal, one bunch of curry leaves, and a pinch of asafoetida. Add this to the sambar mixture.",
      nutritionalInformation: {
        nutrients: [
          { name: "Energy", unit: "kcal", value: 267.0 },
          { name: "Protein", unit: "g", value: 12.0 },
          { name: "Carbohydrates", unit: "g", value: 47.0 },
          { name: "Total Sugar", unit: "g", value: 3.8 },
          { name: "Dietary Fiber", unit: "g", value: 19.0 },
          { name: "Total Fat", unit: "g", value: 10.0 },
          { name: "Trans fat", unit: "g", value: "Nil" },
          { name: "Cholesterol", unit: "g", value: "Nil" },
          { name: "Potassium", unit: "mg", value: 764.0 },
          { name: "Iron", unit: "mg", value: 15.0 },
          { name: "Calcium", unit: "mg", value: 488.0 },
        ],
      },
    },
  },
];

let nonVegmasalas = [
  {
    sno: 29,
    productName: "Ready Mix Chicken Dum Biryani Masala",
    image: "./Frame 260 (2).png",
    productDetails: {
      image: "./Frame 44.png",
      description: "Aids in digestion. Rich in Antioxidants.",
      ingredients:
        "Kapok buds, Cloves, Black Elachi, Cinnamon, Star Anise, Coriander Seeds, Cumin Seeds, Black Elachi, Black Pepper, Sounf, Bay Leaves, Nutmeg, Green Elachi, Mace, Salt, Turmeric, Chilli Powder",
      preparationMethod:
        "Step 1: Take ½ kg cut chicken pieces, rinse thoroughly and transfer to a big bowl for further processing. Add 2 tsp of ginger garlic paste, add 3 tbsp of Ready Mix Chicken Dum Biryani Masala, salt as per your taste, 1 tbsp lemon juice, a handful of chopped coriander leaves, 1 tbsp of ghee/vegetable oil, mix very well, and refrigerate for 2 hrs for best soft chicken. Step 2: Cooking rice for biryani- take a bowl, add 1 tbsp oil to it, and let the oil get enough heat. Now add whole spices, 1 slit green chilli, add 1 cup rice, and 2 cups water. Take the required quantity of basmati rice or any of your desired quantity rice and wash well. Keep it aside. Once the spice water comes to a boiling point, drain the water from the rice and add it to the boiling water, and add 1 tsp salt to it. After a few minutes. If the rice is half-cooked. Drain the water using the strainer. Step 3: Now in a biryani handi, transfer the marinated chicken, and cook for 2 minutes on high flame and on 3 minutes on low flame.",
      nutritionalInformation: {
        nutrients: [
          { name: "Energy", unit: "kcal", value: 226.0 },
          { name: "Protein", unit: "g", value: 10.0 },
          { name: "Carbohydrates", unit: "g", value: 43.0 },
          { name: "Total Sugar", unit: "g", value: 8.4 },
          { name: "Dietary Fiber", unit: "g", value: 19.0 },
          { name: "Total Fat", unit: "g", value: 8.0 },
          { name: "Trans fat", unit: "g", value: "Nil" },
          { name: "Cholesterol", unit: "g", value: "Nil" },
          { name: "Potassium", unit: "mg", value: 616.0 },
          { name: "Iron", unit: "mg", value: 12.0 },
          { name: "Calcium", unit: "mg", value: 325.0 },
        ],
      },
    },
  },
  {
    sno: 30,
    image: "./Frame 260 (2).png",
    productName: "Ready Mix Ghee Roast Chicken Masala",
    productDetails: {
      image: "./Frame 44.png",
      description: "Aids in digestion. Rich in Antioxidants.",
      ingredients: "Coriander seeds, cumin seeds, black pepper, fenugreek seeds, sounf, red chillies",
      preparationMethod:
        "Initially take 500 grams of chicken pieces, clean them thoroughly, and keep them aside. Take 1 onion, 1 tomato, and 1 tbsp of ginger garlic paste, mix it well with 2 tsp of lime juice, and add 4 tbsp of Ready Mix Ghee Roast Chicken Masala. Add prepared chicken with this mixture and keep it aside for 1 to 2 hrs. Now take 4 tbsp of ghee/vegetable oils in a vessel, add chicken, and cook on a medium flame till chicken becomes soft. Now keep it on low flame till gravy turns into a thick consistency. Add coriander leaves, remove from heat, and serve hot.",
      nutritionalInformation: {
        nutrients: [
          { name: "Energy", unit: "kcal", value: 303.0 },
          { name: "Protein", unit: "g", value: 19.0 },
          { name: "Carbohydrates", unit: "g", value: 56.0 },
          { name: "Total Sugar", unit: "g", value: 23.0 },
          { name: "Dietary Fiber", unit: "g", value: 25.0 },
          { name: "Total Fat", unit: "g", value: 6.8 },
          { name: "Trans fat", unit: "g", value: "Nil" },
          { name: "Cholesterol", unit: "g", value: "Nil" },
          { name: "Potassium", unit: "mg", value: 523.0 },
          { name: "Iron", unit: "mg", value: 13.0 },
          { name: "Calcium", unit: "mg", value: 334.0 },
        ],
      },
    },
  },
  {
    sno: 31,
    image: "./Frame 260 (2).png",
    productName: "Ready Mix Biryani Masala",
    productDetails: {
      image: "./Frame 44.png",
      description: "Aids in digestion. Rich in Antioxidants.",
      ingredients:
        "Black pepper, Mace, Cardamom, Bay leaves, stone flower, clove, star anise, cumin seeds, coriander seeds",
      preparationMethod:
        "Take ½ kg cut chicken pieces, rinse thoroughly and transfer to a big bowl for further processing. Add 2 tsp of ginger garlic paste, add 3 tbsp (37.5 g) of Ready Mix Biryani Masala, salt as per your taste, 1 tbsp lemon juice, a handful of chopped coriander leaves, 1 tbsp of ghee/vegetable oil, mix very well and refrigerate for 2 hrs for best soft chicken. Cooking rice for biryani- take a bowl, add 1 tbsp oil to it, and let the oil get enough heat. Now add whole spices, 1 slit green chilli, add 1 cup rice, and 2 cups water. Take the required quantity of Basmati rice or any of your desired quantity rice and wash well. Keep it aside. Once the spice water comes to a boiling point. Drain the water from the rice and add it to the boiling water, add 1 tsp salt to it. After a few minutes. If the rice is half-cooked. Drain the water using the strainer. Step 3: Now in a biryani handi, transfer the marinated chicken, and cook for 2 minutes on high flame and on 3 minutes on low flame.",
      nutritionalInformation: {
        nutrients: [
          { name: "Energy", unit: "kcal", value: 554.0 },
          { name: "Protein", unit: "g", value: 23.0 },
          { name: "Carbohydrates", unit: "g", value: 108.0 },
          { name: "Total Sugar", unit: "g", value: 14.0 },
          { name: "Dietary Fiber", unit: "g", value: 52.0 },
          { name: "Total Fat", unit: "g", value: 21.0 },
          { name: "Trans fat", unit: "g", value: "Nil" },
          { name: "Cholesterol", unit: "g", value: "Nil" },
          { name: "Potassium", unit: "mg", value: 176.3 },
          { name: "Iron", unit: "mg", value: 33.0 },
          { name: "Calcium", unit: "mg", value: 824.0 },
        ],
      },
    },
  },
];

let vegMasalas = [
  {
    sno: 32,
    image: "./Frame 260 (2).png",
    productName: "Ready Mix Garam Masala",
    productDetails: {
      image: "./Frame 44.png",
      description: "Aids in digestion. Rich in Antioxidants.",
      ingredients:
        "Coriander seeds, Cinnamon bark, Clove, Elachi, Star Anise, Cumin Seeds, Shahi Jeera, and Ginger Powder",
      preparationMethod:
        "Initially take 1 big onion, 2 tomatoes, 1 or 2 green chillies and 1 tsp cashew paste, 1 tsp ginger garlic paste. Mix thoroughly and keep aside. Take 4 tbsp of oil and add the above-mentioned mixture and saute it well. Add ½ tsp of turmeric powder and salt. Cook until the paste gets brown. Take 1 cup of vegetables/green peas/paneer and add 1 tbsp of Ready Mix Garam Masala with the addition of 1 cup of water and cook thoroughly, (or) take 1 cup of marinated chicken with the addition of 2 cups of water and cook thoroughly. Add chopped coriander leaves at the last moment of cooking.",
      nutritionalInformation: {
        nutrients: [
          { name: "Energy", unit: "kcal", value: 236.0 },
          { name: "Protein", unit: "g", value: 8.1 },
          { name: "Carbohydrates", unit: "g", value: 49.0 },
          { name: "Total Sugar", unit: "g", value: 1.0 },
          { name: "Dietary Fiber", unit: "g", value: 29.0 },
          { name: "Total Fat", unit: "g", value: 11.0 },
          { name: "Trans fat", unit: "g", value: "Nil" },
          { name: "Cholesterol", unit: "g", value: "Nil" },
          { name: "Potassium", unit: "mg", value: 826.0 },
          { name: "Iron", unit: "mg", value: 16.0 },
          { name: "Calcium", unit: "mg", value: 453.0 },
        ],
      },
    },
  },
  {
    sno: 33,
    image: "./Frame 260 (2).png",
    productName: "Ready Mix Rasam Powder",
    productDetails: {
      image: "./Frame 44.png",
      description: "Aids in digestion. Rich in Antioxidants.",
      ingredients:
        "Coriander Seeds, Chilli Powder, Cumin Seeds, Toor dal, Black Pepper, Fenugreek Seeds, Mustard, Asafoetida, Curry Leaves",
      preparationMethod:
        "Initially take 4 tbsp of Toor dal with 3 cups of water, ½ tsp oil, and ¼ tsp of turmeric powder. Cook it well and keep it aside. Take 2 tsp of tamarind pulp, 1 tsp of jaggery, and 1 cup of water and boil it well. After a few minutes of boiling add 1 tsp of Ready Mix Rasam Powder. Mix boiled mixture with cooked dal and add salt. Again, cook for 5 to 10 mins. Take 1 tsp ghee/Vegetable oil and ½ tsp mustard seeds, 1 tsp urad dal, one bunch of curry leaves, and a pinch of asafoetida. Add this to the rasam mixture.",
      nutritionalInformation: {
        nutrients: [
          { name: "Energy", unit: "kcal", value: 301.0 },
          { name: "Protein", unit: "g", value: 14.0 },
          { name: "Carbohydrates", unit: "g", value: 46.0 },
          { name: "Total Sugar", unit: "g", value: 4.1 },
          { name: "Dietary Fiber", unit: "g", value: 12.0 },
          { name: "Total Fat", unit: "g", value: 12.0 },
          { name: "Trans fat", unit: "g", value: "Nil" },
          { name: "Cholesterol", unit: "g", value: "Nil" },
          { name: "Potassium", unit: "mg", value: 1010.0 },
          { name: "Iron", unit: "mg", value: 32.0 },
          { name: "Calcium", unit: "mg", value: 573.0 },
        ],
      },
    },
  },
  {
    sno: 34,
    image: "./Frame 260 (2).png",
    productName: "Ready Mix Veg Biryani Masala",
    productDetails: {
      image: "./Frame 44.png",
      description: "Aids in digestion. Rich in Antioxidants.",
      ingredients: "Red Chilli Dried, Mustard Seeds, Salt, Fenugreek Seeds, and Cumin Seeds",
      preparationMethod:
        "Initially take 1 cup of rice and soak it in water for 15 mins. Cook the rice for 4-5 minutes, and keep it aside. Add 2 to 1 tbsp of oil and 1 big onion in a pan and saute the onions till they turn a golden brown color. Add 1 tsp ginger garlic paste, 1 tbsp of curd, 2 cups of half-cooked vegetables, 1 tsp salt, 3 tbsp of Ready Mix Veg Biryani Masala, and 2 cups water and let it cook for 10 minutes. Empty the boiled rice in the pan and stir the veg-cook for 10 minutes on low flame. Garnish with fresh coriander leaves and serve it hot.",
      nutritionalInformation: {
        nutrients: [
          { name: "Energy", unit: "kcal", value: 356.0 },
          { name: "Protein", unit: "g", value: 19.0 },
          { name: "Carbohydrates", unit: "g", value: 36.0 },
          { name: "Total Sugar", unit: "g", value: 12.0 },
          { name: "Dietary Fiber", unit: "g", value: 12.0 },
          { name: "Total Fat", unit: "g", value: 20.0 },
          { name: "Trans fat", unit: "g", value: "Nil" },
          { name: "Cholesterol", unit: "g", value: "Nil" },
          { name: "Potassium", unit: "mg", value: 761.0 },
          { name: "Iron", unit: "mg", value: 21.0 },
          { name: "Calcium", unit: "mg", value: 349.0 },
        ],
      },
    },
  },
  {
    sno: 35,
    image: "./Frame 260 (2).png",
    productName: "Ready Mix Vangi bath Masala",
    productDetails: {
      image: "./Frame 44.png",
      description: "Aids in digestion. Rich in Antioxidants.",
      ingredients:
        "Chilli Powder, Cinnamon, Clove, Coriander Seeds, Dry Coconut, Bengal Gram Dal, Split Black Gram Dal",
      preparationMethod:
        "Method: 1. Take 1 tbsp of oil in a pan, add 1/2 tbsp of mustard seeds, and 1/2 tbsp of chana dal fry it, add 2 dry red chillies, and turmeric, and saute well. Add 1 big or 2 medium-sized onions in slices and saute it well, when onions get brown in color, add a few curry leaves, add 250 grams of brinjal (length or cube shape), close the vessel, and fry it till brinjal is cooked. Then add 4 tbsp of Ready Mix Vangi Bath Masala, mix well, and then immediately add 2 cups of cooked rice. Method: 2. Before going to prepare, rinse 1 cup of raw rice and keep it soaking for some time. Take 1 tbsp of oil in an electric cooker, add 1/2 tbsp of mustard seeds, and 1/2 tbsp of chana dal fry it, add 2 dry red chillies, and saute well. Add 1 big or 2 medium-sized onions in slices and saute it well, when onions get brown in color, add 250 grams of brinjal (length or cube shape) fry it till brinjal is cooked and then pour 2 cups of water and boil it some time and then add 1 cup of soaked rice while boiling it for 2-3 minutes and then add 4 tbsp of Ready Mix Vangi Bath Masala.",
      nutritionalInformation: {
        nutrients: [
          { name: "Energy", unit: "kcal", value: 363.0 },
          { name: "Protein", unit: "g", value: 14.0 },
          { name: "Carbohydrates", unit: "g", value: 36.0 },
          { name: "Total Sugar", unit: "g", value: 3.5 },
          { name: "Dietary Fiber", unit: "g", value: 25.0 },
          { name: "Total Fat", unit: "g", value: 17.0 },
          { name: "Trans fat", unit: "g", value: "Nil" },
          { name: "Cholesterol", unit: "g", value: "Nil" },
          { name: "Potassium", unit: "mg", value: 316.0 },
          { name: "Iron", unit: "mg", value: 8.0 },
          { name: "Calcium", unit: "mg", value: 351.0 },
        ],
      },
    },
  },
  {
    sno: 36,
    image: "./Frame 260 (2).png",
    productName: "Ready Mix Pulihora Powder",
    productDetails: {
      image: "./Frame 44.png",
      description: "Aids in digestion. Rich in Antioxidants.",
      ingredients:
        "Chana dal, urad dal, cumin seeds, mustard seeds, black pepper, fenugreek seeds, sesame seeds, coriander seeds, red chillies, asafoetida, curry leaves",
      preparationMethod:
        "Take 2 tsp of oil in a pan, add 1 tsp of mustard seeds, 1 tsp of urad dal, 1 tsp of chana dal, 1 bunch of curry leaves, 2 green chillies, 2 red chillies, and 1 tsp of turmeric. Saute it well. Add desired quantity of tamarind paste & boil it for a few mins till you get the desired consistency. Add 2 cups of cooked rice to the mixer. While mixing add 4 to 5 tbsp of Ready Mix Pulihora Powder and mix thoroughly and add salt as per your taste.",
      nutritionalInformation: {
        nutrients: [
          { name: "Energy", unit: "kcal", value: 258.0 },
          { name: "Protein", unit: "g", value: 15.0 },
          { name: "Carbohydrates", unit: "g", value: 43.0 },
          { name: "Total Sugar", unit: "g", value: 7.0 },
          { name: "Dietary Fiber", unit: "g", value: 18.0 },
          { name: "Total Fat", unit: "g", value: 6.3 },
          { name: "Trans fat", unit: "g", value: "Nil" },
          { name: "Cholesterol", unit: "g", value: "Nil" },
          { name: "Potassium", unit: "mg", value: 401.0 },
          { name: "Iron", unit: "mg", value: 10.0 },
          { name: "Calcium", unit: "mg", value: 232.0 },
        ],
      },
    },
  },
];

let data = [...breakfastMixesData, ...nonVegmasalas, ...vegMasalas];

function OrderPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Ordered Successfully!!!");
    const ownerPhoneNumber = "93925 87332"; // Replace with the owner's actual phone number

    // Prepare WhatsApp message
    const message = `Order Details:\nProduct Name: ${currentProductData?.productName}\nName: ${formData.name}\nEmail: ${formData.email}`;

    // Create WhatsApp link with the owner's phone number and message
    const whatsappLink = `https://wa.me/${ownerPhoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(whatsappLink, "_blank");
    console.log("Form submitted:", formData);
  };
  const presentProductId = localStorage.getItem("productId");

  const imageUrl=localStorage.getItem('orderImage')||currentProductData?.image

  const currentProductData = data.find((each) => each.sno == presentProductId);
  console.log(currentProductData, "currentProductData");

  return (
    <div>
      <div className="order" style={{ padding: "15px", margin: "10px" }}>
        <div className="order-image" style={{ padding: "15px", position: "relative" }}>
          <img src={imageUrl} alt="Order"></img>
          <div className="discount-tag" style={{ position: "absolute", top: "0", right: "0" }}>
            10% Off
          </div>
          <div className="order-name">{currentProductData?.productName}</div>
        </div>
        <div className="order-form">
          <form className="form-order" onSubmit={handleSubmit}>
            <div className="email-and-name">
              <input
                className="order-input"
                type="text"
                name="name"
                placeholder="Enter name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <input
                className="order-input"
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <button type="submit" className="order-btn">
              <div className="order-btn-des">
                <div className="whatsapp-img">
                  <img src="./whatsapp-img.png" alt="WhatsApp"></img>
                </div>
                <div className="btn-text">Order Now</div>
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
