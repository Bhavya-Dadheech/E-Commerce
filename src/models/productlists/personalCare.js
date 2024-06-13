import Shampoo from "../../assets/images/personalcare/Shampoo.webp";
import Conditioner from "../../assets/images/personalcare/Conditioner.jpg";
import BodyWash from "../../assets/images/personalcare/Body Wash.jpg";
import Toothpaste from "../../assets/images/personalcare/Toothpaste.jpg";
import Deodorant from "../../assets/images/personalcare/Deodorant.jpg";
import Moisturizer from "../../assets/images/personalcare/Moisturizer.jpg";
import Sunscreen from "../../assets/images/personalcare/Sunscreen.webp";
import HandSanitizer from "../../assets/images/personalcare/HandSanitizer.jpg";
import FaceWash from "../../assets/images/personalcare/FaceWash.webp";
import LipBalm from "../../assets/images/personalcare/LipBalm.jpg";

export const personalCareProducts = [
  { id: "p1", name: "Shampoo", price: { amount: 250, unit: "per bottle" }, image: Shampoo },
  { id: "p2", name: "Conditioner", price: { amount: 300, unit: "per bottle" }, image: Conditioner },
  { id: "p3", name: "Body Wash", price: { amount: 200, unit: "per bottle" }, image: BodyWash },
  { id: "p4", name: "Toothpaste", price: { amount: 100, unit: "per tube" }, image: Toothpaste },
  { id: "p5", name: "Deodorant", price: { amount: 150, unit: "per stick" }, image: Deodorant },
  { id: "p6", name: "Moisturizer", price: { amount: 350, unit: "per bottle" }, image: Moisturizer },
  { id: "p7", name: "Sunscreen", price: { amount: 400, unit: "per bottle" }, image: Sunscreen },
  { id: "p8", name: "Hand Sanitizer", price: { amount: 50, unit: "per bottle" }, image: HandSanitizer },
  { id: "p9", name: "Face Wash", price: { amount: 250, unit: "per bottle" }, image: FaceWash },
  { id: "p10", name: "Lip Balm", price: { amount: 100, unit: "per stick" }, image: LipBalm }
];
