
import Card from "./Card";
import Section from "./Section";
import { recipients } from "./util";

export default function RecipientSection() {
  return (
    <Section title="Shop by Recipient">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {recipients.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </Section>
  );
}