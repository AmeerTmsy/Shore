import { ProductCard } from "./ProductCard";
import Section from "./Section";
import { giftProducts } from "./util";

export default function ProductGrid() {
  return (
    <Section title="Recommended Gifts">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {giftProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </Section>
  );
}