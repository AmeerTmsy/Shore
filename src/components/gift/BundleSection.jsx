import Card from "./Card";
import Section from "./Section";
import { bundles } from "./util";

export default function BundleSection() {
  return (
    <Section title="Gift Bundles">
      <div className="grid md:grid-cols-3 gap-4">
        {bundles.map((b) => (
          <Card key={b.id} image={b.image} title={b.title} />
        ))}
      </div>
    </Section>
  );
}