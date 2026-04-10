import Section from "./Section";
import { budgetRanges } from "./util";

export default function BudgetSection() {
  return (
    <Section title="Shop by Budget">
      <div className="flex flex-wrap gap-4">
        {budgetRanges.map((b) => (
          <button
            key={b.id}
            className="cursor-pointer px-6 py-3 bg-gray-200 hover:bg-gray-100 rounded-full border border-gray-300 text-gray-700 hover:text-gray-950 transition duration-300"
          >
            {b.label}
          </button>
        ))}
      </div>
    </Section>
  );
}