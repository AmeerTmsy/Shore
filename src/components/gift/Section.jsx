export default function Section({ title, children }) {
  return (
    <section className={`${(title == 'Shop by Budget' || title == 'Shop by Occasion') ? 'px-0' : 'px-4 md:px-8' } py-10`}>
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      {children}
    </section>
  );
}