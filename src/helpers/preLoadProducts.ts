import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

const productsToPreLoad: IProduct[] = [
  { 
    name: "iPhone 11",
    price: 699,
    description:
      "Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
    image:
      "https://wefix.co.za/cdn/shop/products/iPhone-11-Purple.png?v=1707370862",
    categoryId: 1,
    stock: 10,
  },
  {  
    name: "MacBook Air",
    price: 999,
    description:
      "Embrace efficiency and sophistication with the MacBook Air: lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.",
    image:
      "https://www.compumacypc.com.ar/wp-content/uploads/late-2020-macbook-air-600x527-1.jpeg",
    categoryId: 2,
    stock: 10,
  },
  {
    name: "iPad Pro",
    price: 799,
    description:
      "Unleash your creativity and productivity with the iPad Pro: powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrSeryXoDxcK_q35pos0FXL-jCzdE0Y6xdpw&s",
    categoryId: 3,
    stock: 10,
  },
  { 
    name: "Apple Watch Series 6",
    price: 399,
    description:
      "Stay connected and healthy with the Apple Watch Series 6: track your workouts, monitor your health, and stay in touch with the people and information you care about most. Experience the future of health and wellness with the Apple Watch Series 6.",
    image:
      "https://i5.walmartimages.com/seo/Apple-Watch-Series-6-GPS-Cellular-44mm-Gold-Stainless-Steel-Case-with-Gold-Milanese-Loop_677014fe-0235-4de4-adfb-4b5f1a43e673.55065b0e9ddd8877a59b1fd7e91f5b3b.jpeg",
    categoryId: 4,
    stock: 10,
  },
  {   
    name: "AirPods Pro",
    price: 249,
    description:
      "Immerse yourself in sound with the AirPods Pro: active noise cancellation, transparency mode, and customizable fit make the AirPods Pro the perfect companion for music, calls, and everything in between. Elevate your audio experience with the AirPods Pro.",
    image:
      "https://ipoint.com.ar/25136-thickbox_default/apple-airpods-pro-2da-generacion.jpg",
    categoryId: 5,
    stock: 10,
  },
  { 
    name: "HomePod mini",
    price: 99,
    description:
      "Elevate your home audio experience with the HomePod mini: immersive sound, intelligent assistant, and smart home hub make the HomePod mini the perfect addition to your home. Enjoy a world of music, news, and more with the HomePod mini.",
    image:
      "https://acdn.mitiendanube.com/stores/002/092/809/products/homepoddd-071-98044bdea46ba3b7c916626491351449-640-0.jpg",
    categoryId: 6,
    stock: 10,
  },
];

export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};
