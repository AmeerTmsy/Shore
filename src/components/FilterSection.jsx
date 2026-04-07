import { ChevronDown } from "lucide-react";

export default function FilterSection({ title, children }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-sm">{title}</h3>
        <ChevronDown size={16} className="md:hidden" />
      </div>
      <div className="space-y-2">
        {children}
      </div>
    </div>
  );
}