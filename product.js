const products = [
  {
    id: 1,
    title: "Ube Coco Loco",
    price: "₱75",
    description:
      "Our Ube Coco Loco donut is soft, fluffy, and infused with rich, creamy ube flavor. Finished with a smooth ube glaze and a generous sprinkle of snowy white coconut flakes, it delivers the perfect balance of sweet, nutty, and tropical in every bite.",
    colors: [
      {
        name: "Ube Coco Loco",
        mainImage: "assets/donut-ube.png",
      },
    ],
  },
  {
    id: 2,
    title: "Coco Pandan",
    price: "₱70",
    description:
      "Our Coco Pandan donut is soft, fluffy donut topped with a smooth, bright green pandan glaze and a generous sprinkle of snowy white coconut flakes. Each bite delivers the perfect balance of fragrant pandan, sweet creaminess, and nutty coconut crunch a refreshing Filipino-inspired treat.",
    colors: [
      {
        name: "Coco Pandan",
        mainImage: "assets/donut-buko-pandan.png",
      },
    ],
  },
  {
    id: 3,
    title: "Flantastic",
    price: "₱80",
    description:
      "Our Flantastic donut is soft, fluffy donut topped with a rich, golden leche flan cream glaze that melts in your mouth. Every bite delivers the luxurious, sweet, and creamy flavor of traditional Filipino leche flan in a fun, indulgent donut form.",
    colors: [
      {
        name: "Flantastic",
        mainImage: "assets/donut-leche-flan.png",
      },
    ],
  },
  {
    id: 4,
    title: "Yemalicious Choco",
    price: "₱80",
    description:
      "Our Yemalicious Choco donut is soft, fluffy donut filled with creamy, golden yema custard and topped with a rich chocolate glaze. Finished with a generous sprinkle of powdered yema, each bite delivers the perfect balance of indulgent chocolate and sweet, custardy goodness a Filipino-inspired treat you won’t forget.",
    colors: [
      {
        name: "Yemalicious Choco",
        mainImage: "assets/donut-yemma.png",
      },
    ],
  },
  {
    id: 5,
    title: "Pastillas Pop",
    price: "₱65",
    description:
      "Our Pastillas Pop donut is soft, fluffy donut filled with creamy, golden yema custard and topped with a rich chocolate glaze. Finished with a generous sprinkle of powdered yema, each bite delivers the perfect balance of indulgent chocolate and sweet, custardy goodness a Filipino-inspired treat you won’t forget.",
    colors: [
      {
        name: "Pastillas Pop",
        mainImage: "assets/donut-pastillas-de-leche.png",
      },
    ],
  },
  {
    id: 6,
    title: "Grahamazing Mango",
    price: "₱75",
    description:
      "Our Grahamazing Mango donut is soft, fluffy donut filled with sweet, luscious mango jam and topped with a smooth cream glaze. Finished with a generous sprinkle of crunchy graham crust, each bite delivers a delightful mix of fruity sweetness, creamy richness, and nostalgic graham goodness a perfect Filipino-inspired treat.",
    colors: [
      {
        name: "Grahamazing Mango",
        mainImage: "assets/donut-mango-graham.png",
      },
    ],
  },
  {
    id: 7,
    title: "Cassa-vanilla",
    price: "₱65",
    description:
      "Our Casa-vanilla donut is soft, fluffy donut has a subtly sweet, chewy cassava-infused dough and is topped with a smooth, creamy vanilla glaze. Each bite delivers the comforting flavors of home in a fun, indulgent donut form.",
    colors: [
      {
        name: "Cassa-vanilla",
        mainImage: "assets/donut-cassava.png",
      },
    ],
  },
  {
    id: 8,
    title: "Pistachioco",
    price: "₱110",
    description:
      "Our Pistachioco donut is soft, fluffy pistachio-infused donut filled with rich, creamy chocolate and topped with a generous sprinkle of crunchy nuts. Every bite delivers a perfect balance of nutty pistachio flavor, indulgent chocolate, and satisfying crunch a decadent treat for chocolate and nut lovers alike.",
    colors: [
      {
        name: "Pistachioco",
        mainImage: "assets/donut-pistacho.png",
      },
    ],
  },
  {
    id: 9,
    title: "Oreo Overload",
    price: "₱90",
    description:
      "Our Oreo Overload donut is rich, chocolate-flavored donut filled with crushed Oreo cookies and topped with a smooth cream glaze. Finished with a generous sprinkle of Oreo crumbs, every bite delivers a decadent mix of chocolatey goodness, sweet cream, and crunchy cookies a dream come true for Oreo lovers!",
    colors: [
      {
        name: "Oreo Overload",
        mainImage: "assets/donut-cookies-cream.png",
      },
    ],
  },
  {
    id: 10,
    title: "Biscoff Buzz",
    price: "₱85",
    description:
      "Our Biscoff Buzz donut is soft, fluffy donut topped with a smooth Biscoff cookie butter glaze and finished with a sprinkle of crushed Biscoff cookies. Each bite delivers that signature caramelized, spiced sweetness with a satisfying crunch a true indulgence for cookie butter lovers.",
    colors: [
      {
        name: "Biscoff Buzz",
        mainImage: "assets/donut-biscoff.png",
      },
    ],
  },
  {
    id: 11,
    title: "Chocoluxe Nut",
    price: "₱75",
    description:
      "Our Chocoluxe Nut donut is rich, chocolate-flavored donut with a soft, fluffy texture, topped with a smooth vanilla glaze and a generous sprinkle of crunchy nuts. Each bite delivers the perfect balance of deep chocolate flavor, sweet vanilla creaminess, and satisfying nutty crunch.",
    colors: [
      {
        name: "Chocoluxe Nut",
        mainImage: "assets/donut-chocolate-vanila-nuts.png",
      },
    ],
  },
  {
    id: 12,
    title: "Nutty Buddy",
    price: "₱80",
    description:
      "Our Nutty Buddy donut is soft, fluffy donut topped with a smooth peanut butter glaze and finished with a sprinkle of crushed peanuts. Each bite delivers rich, nutty flavor with a satisfying crunch a perfect treat for peanut butter lovers!",
    colors: [
      {
        name: "Nutty Buddy",
        mainImage: "assets/donut-peanut-butter.png",
      },
    ],
  },
  {
    id: 13,
    title: "Velvet Crush",
    price: "₱85",
    description:
      "Our Velvet Crush donut is soft, fluffy red velvet donut topped with a smooth red glaze and sprinkled with crisp white sugar sprinkles. Every bite delivers a perfect balance of rich, chocolatey flavor and sweet, creamy indulgence, with a fun pop of texture from the sprinkles.",
    colors: [
      {
        name: "Velvet Crush",
        mainImage: "assets/donut-red-velvet.png",
      },
    ],
  },
  {
    id: 14,
    title: "Sweet Berry",
    price: "₱85",
    description:
      "Our Sweet Berry donut is soft, fluffy strawberry-flavored donut filled with sweet strawberry jam and topped with a smooth strawberry glaze. Each bite delivers a perfect balance of fruity sweetness, juicy jam, and melt in your mouth donut goodness a true treat for strawberry lovers.",
    colors: [
      {
        name: "Sweet Berry",
        mainImage: "assets/donut-strawberry.png",
      },
    ],
  },
];
