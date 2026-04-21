import Section from "./Section";
import { occasions } from "./util";

export default function OccasionSection() {
  return (
    <Section title="Shop by Occasion">
      <div className="flex gap-4 flex-wrap">
        {occasions.map((o) => (
          <button
            key={o.id}
            className="cursor-pointer px-6 py-3 bg-gray-200 hover:bg-gray-100 rounded-xl border border-gray-300 text-gray-700 hover:text-gray-950 transition duration-300 flex justify-center items-center gap-2"
          ><span className="text-2xl">{o.icon}</span> {o.title}</button>
        ))}
      </div>
    </Section>
  );
}