import Detergent from "../../assets/images/household/Detergent.jpg";
import DishSoap from "../../assets/images/household/DishSoap.jpg";
import Bleach from "../../assets/images/household/Bleach.jpg";
import PaperTowels from "../../assets/images/household/PaperTowels.webp";
import ToiletPaper from "../../assets/images/household/ToiletPaper.webp";
import GlassCleaner from "../../assets/images/household/GlassCleaner.jpg";
import Sponge from "../../assets/images/household/Sponge.jpg";
import Mop from "../../assets/images/household/Mop.jpg";
import Broom from "../../assets/images/household/Broom.jpg";
import TrashBags from "../../assets/images/household/TrashBags.jpg";
import FabricSoftener from "../../assets/images/household/FabricSoftener.jpg";
import AirFreshener from "../../assets/images/household/AirFreshener.jpg";
import FloorCleaner from "../../assets/images/household/FloorCleaner.jpg";
import DisinfectantWipes from "../../assets/images/household/DisinfectantWipes.webp";
import LaundryBasket from "../../assets/images/household/LaundryBasket.webp";

export const householdProducts = [
  { id: 1, name: "Detergent", price: { amount: 150, unit: "per bottle" }, image: Detergent },
  { id: 2, name: "Dish Wash", price: { amount: 50, unit: "per bottle" }, image: DishSoap },
  { id: 3, name: "Bleach", price: { amount: 100, unit: "per bottle" }, image: Bleach },
  { id: 4, name: "Paper Towels", price: { amount: 80, unit: "per pack" }, image: PaperTowels },
  { id: 5, name: "Toilet Paper", price: { amount: 120, unit: "per pack" }, image: ToiletPaper },
  { id: 6, name: "Glass Cleaner", price: { amount: 90, unit: "per bottle" }, image: GlassCleaner },
  { id: 7, name: "Sponge", price: { amount: 30, unit: "per pack" }, image: Sponge },
  { id: 8, name: "Mop", price: { amount: 250, unit: "each" }, image: Mop },
  { id: 9, name: "Broom", price: { amount: 200, unit: "each" }, image: Broom },
  { id: 10, name: "Trash Bags", price: { amount: 60, unit: "per pack" }, image: TrashBags },
  { id: 11, name: "Fabric Softener", price: { amount: 150, unit: "per bottle" }, image: FabricSoftener },
  { id: 12, name: "Air Freshener", price: { amount: 80, unit: "per bottle" }, image: AirFreshener },
  { id: 13, name: "Floor Cleaner", price: { amount: 120, unit: "per bottle" }, image: FloorCleaner },
  { id: 14, name: "Disinfectant Wipes", price: { amount: 90, unit: "per pack" }, image: DisinfectantWipes },
  { id: 15, name: "Laundry Basket", price: { amount: 300, unit: "each" }, image: LaundryBasket }
];
