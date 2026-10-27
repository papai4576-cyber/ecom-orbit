import { Store, TrendingUp, Search, ShoppingCart, Zap, Package, Layers, Shirt, Sparkles, Utensils, type LucideIcon } from "lucide-react";

export const serviceIcons: Record<string, LucideIcon> = {
  "store-setup": Store,
  "performance-marketing": TrendingUp,
  "seo-content": Search,
  "marketplace-management": ShoppingCart,
  "quick-commerce": Zap,
  "logistics-operations": Package,
  "end-to-end": Layers,
};

export const industryIcons: Record<string, LucideIcon> = {
  "fashion-apparel": Shirt,
  "beauty-personal-care": Sparkles,
  "food-fmcg": Utensils,
  "offline-to-online": Store,
};
