const milletsData = [
    {
        id: "ragi",
        name: "Ragi (Finger Millet)",
        emoji: "🌾",
        tagline: "The powerhouse of calcium and natural iron.",
        nutrition: [
            { label: "Calcium", value: "344 mg", percentage: 90 },
            { label: "Iron", value: "3.9 mg", percentage: 40 },
            { label: "Protein", value: "7.3 g", percentage: 50 },
            { label: "Fiber", value: "3.6 g", percentage: 60 }
        ],
        benefits: [
            "Extremely rich in calcium, strengthening bones and teeth.",
            "Low glycemic index helps manage diabetes effectively.",
            "Natural amino acids help in weight management and relaxation.",
            "Gluten-free and easily digestible for infants and elderly."
        ],
        recipes: [
            {
                name: "Ragi Malt (Kezhvaragu Koozh)",
                ingredients: ["Ragi flour - 3 tbsp", "Water - 1.5 cups", "Buttermilk - 1 cup", "Small onion - 1 (finely chopped)", "Salt to taste"],
                steps: [
                    "Mix ragi flour with a little water to form a lump-free paste.",
                    "Boil remaining water in a pan, pour the paste slowly while stirring continuously.",
                    "Cook on medium flame until it thickens and turns glossy, then let it cool.",
                    "Mix in buttermilk, chopped onions, and salt for a traditional cooling drink."
                ]
            },
            {
                name: "Ragi Dosa",
                ingredients: ["Ragi flour - 1 cup", "Rice flour - 1/4 cup", "Curd - 2 tbsp", "Cumin seeds, green chillies, coriander", "Salt and water"],
                steps: [
                    "Combine ragi flour, rice flour, and curd in a bowl.",
                    "Add water gradually to make a thin, watery batter (like rava dosa batter).",
                    "Mix in chopped green chillies, cumin seeds, coriander, and salt.",
                    "Pour on a hot oiled tawa, drizzle with oil or ghee, and cook until crisp."
                ]
            }
        ]
    },
    {
        id: "kambu",
        name: "Kambu (Pearl Millet)",
        emoji: "🌿",
        tagline: "The ultimate summer coolant and energy booster.",
        nutrition: [
            { label: "Iron", value: "8.0 mg", percentage: 85 },
            { label: "Protein", value: "11.6 g", percentage: 70 },
            { label: "Fiber", value: "1.3 g", percentage: 40 },
            { label: "Magnesium", value: "137 mg", percentage: 65 }
        ],
        benefits: [
            "Exceptional iron content helps prevent anemia.",
            "Keeps the body cool during hot summer months.",
            "High fiber aids digestion and prevents constipation.",
            "Slow-digesting complex carbs sustain long energy levels."
        ],
        recipes: [
            {
                name: "Kambu Koozh",
                ingredients: ["Kambu flour - 1 cup", "Water - 4 cups", "Sour buttermilk - 1.5 cups", "Salt to taste"],
                steps: [
                    "Mix kambu flour with water and leave it overnight to ferment slightly.",
                    "Cook the mixture the next morning, stirring continuously until thick and transparent.",
                    "Allow it to cool completely.",
                    "Dilute with sour buttermilk and salt before serving."
                ]
            }
        ]
    },
    {
        id: "thinai",
        name: "Thinai (Foxtail Millet)",
        emoji: "🌾",
        tagline: "Nourishes the nervous system with rich antioxidants.",
        nutrition: [
            { label: "Protein", value: "12.3 g", percentage: 75 },
            { label: "Iron", value: "2.8 mg", percentage: 35 },
            { label: "Fiber", value: "8.0 g", percentage: 85 },
            { label: "Carbs", value: "60.9 g", percentage: 60 }
        ],
        benefits: [
            "Boosts immunity and supports nervous system health.",
            "Helps maintain cardiovascular health.",
            "Gluten-free alternative to rice.",
            "High antioxidant properties protect cellular damage."
        ],
        recipes: [
            {
                name: "Thinai Pongal",
                ingredients: ["Thinai - 1 cup", "Moong dal - 1/2 cup", "Ghee, pepper, cumin, ginger, cashews", "Water and salt"],
                steps: [
                    "Dry roast moong dal lightly and wash along with thinai.",
                    "Pressure cook thinai and moong dal together with 4 cups of water for 3 whistles.",
                    "In a pan, heat ghee, crackle pepper, cumin, ginger, and cashews.",
                    "Mix the seasoning into the cooked pongal and serve hot."
                ]
            }
        ]
    },
    {
        id: "samai",
        name: "Samai (Little Millet)",
        emoji: "🌾",
        tagline: "Low glycemic index grain for weight and sugar control.",
        nutrition: [
            { label: "Fiber", value: "7.7 g", percentage: 80 },
            { label: "Iron", value: "9.3 mg", percentage: 95 },
            { label: "Protein", value: "7.7 g", percentage: 55 },
            { label: "Magnesium", value: "106 mg", percentage: 50 }
        ],
        benefits: [
            "Contains high amounts of B-complex vitamins.",
            "Ideal rice substitute for diabetic meal plans.",
            "Supports tissue repair and muscle growth.",
            "Cleanses the digestive tract effectively."
        ],
        recipes: [
            {
                name: "Samai Biryani",
                ingredients: ["Samai - 1 cup", "Mixed vegetables - 1 cup", "Onion, tomato, ginger-garlic paste", "Biryani spices and oil"],
                steps: [
                    "Sauté whole spices, onions, tomatoes, and ginger-garlic paste in oil.",
                    "Add chopped vegetables and sauté for 3 minutes.",
                    "Add 2 cups of water and bring to a boil, then add washed samai.",
                    "Cover and cook on low flame until fluffy and cooked through."
                ]
            }
        ]
    },
    {
        id: "varagu",
        name: "Varagu (Kodo Millet)",
        emoji: "🌾",
        tagline: "Great for blood purification and heart health.",
        nutrition: [
            { label: "Fiber", value: "9.0 g", percentage: 90 },
            { label: "Protein", value: "8.3 g", percentage: 60 },
            { label: "Iron", value: "1.7 mg", percentage: 25 },
            { label: "Ash/Minerals", value: "2.6 g", percentage: 40 }
        ],
        benefits: [
            "Regular consumption helps purify blood and clear toxins.",
            "Lowers bad cholesterol and protects heart health.",
            "Provides sustained satiety, preventing overeating.",
            "Rich in phytochemicals."
        ],
        recipes: [
            {
                name: "Varagu Pulao",
                ingredients: ["Varagu - 1 cup", "Ghee - 2 tbsp", "Whole spices, beans, carrots, peas", "Salt"],
                steps: [
                    "Rinse varagu millet thoroughly.",
                    "In a cooker, add ghee, whole spices, and diced vegetables, sautéing briefly.",
                    "Add varagu, water (1:2 ratio), and salt.",
                    "Cook for 2 whistles on medium flame."
                ]
            }
        ]
    },
    {
        id: "kuthiraivaali",
        name: "Kuthiraivaali (Barnyard Millet)",
        emoji: "🌿",
        tagline: "The fastest-growing millet with lowest carbohydrate content.",
        nutrition: [
            { label: "Fiber", value: "9.8 g", percentage: 95 },
            { label: "Iron", value: "5.0 mg", percentage: 55 },
            { label: "Protein", value: "6.2 g", percentage: 45 },
            { label: "Phosphorus", value: "280 mg", percentage: 70 }
        ],
        benefits: [
            "Lowest carbohydrate content among all millets.",
            "Unmatched fiber content promotes excellent gut health.",
            "Extremely friendly for low-calorie and weight-loss diets.",
            "Improves metabolic rate."
        ],
        recipes: [
            {
                name: "Barnyard Millet Dosa",
                ingredients: ["Barnyard millet - 1 cup", "Urad dal - 1/4 cup", "Fenugreek seeds - 1 tsp", "Salt"],
                steps: [
                    "Soak barnyard millet, urad dal, and fenugreek seeds for 4 hours.",
                    "Grind into a smooth batter and ferment overnight.",
                    "Spread ladlefuls of batter on a hot tawa to make crispy dosas."
                ]
            }
        ]
    },
    {
        id: "cholam",
        name: "Cholam (Sorghum)",
        emoji: "🌾",
        tagline: "Gluten-free grain packed with vital phytochemicals.",
        nutrition: [
            { label: "Protein", value: "10.4 g", percentage: 65 },
            { label: "Iron", value: "4.1 mg", percentage: 45 },
            { label: "Fiber", value: "9.7 g", percentage: 92 },
            { label: "Potassium", value: "350 mg", percentage: 60 }
        ],
        benefits: [
            "Packed with antioxidants and anti-inflammatory properties.",
            "Supports joint mobility and overall stamina.",
            "Helps regulate blood sugar levels naturally.",
            "Supports skin and cellular health."
        ],
        recipes: [
            {
                name: "Cholam Roti (Jowar Roti)",
                ingredients: ["Cholam flour - 1 cup", "Warm water - 3/4 cup", "A pinch of salt"],
                steps: [
                    "Boil warm water with a pinch of salt and mix into cholam flour to form a soft dough.",
                    "Knead well while warm, divide into small balls.",
                    "Pat out gently by hand or roll carefully on a floured surface.",
                    "Cook on a hot tawa on both sides until spots appear, puffing over an open flame."
                ]
            }
        ]
    },
    {
        id: "panivaragu",
        name: "Panivaragu (Proso Millet)",
        emoji: "🌾",
        tagline: "Strengthens muscles and supports brain development.",
        nutrition: [
            { label: "Protein", value: "12.5 g", percentage: 78 },
            { label: "Fiber", value: "5.2 g", percentage: 55 },
            { label: "Iron", value: "0.8 mg", percentage: 20 },
            { label: "Magnesium", value: "153 mg", percentage: 70 }
        ],
        benefits: [
            "High lecithin content supports neurological health.",
            "Promotes healthy muscle tissue maintenance.",
            "Easily digestible and provides quick recovery nourishment.",
            "Enhances overall physical stamina."
        ],
        recipes: [
            {
                name: "Panivaragu Upma",
                ingredients: ["Proso millet - 1 cup", "Onions, green chillies, carrots", "Mustard seeds, urad dal, curry leaves", "Oil and water"],
                steps: [
                    "Wash and drain proso millet.",
                    "Temper mustard seeds, urad dal, and curry leaves in oil; sauté onions and vegetables.",
                    "Add 2 cups of water, bring to a boil, and stir in the millet.",
                    "Cover and cook on low heat until water is absorbed and grains are tender."
                ]
            }
        ]
    }
];
