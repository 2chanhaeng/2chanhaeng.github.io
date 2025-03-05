export default function PortfolioFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="text-center text-sm bg-black text-white p-4 col-span-full">
      © {year}. Lee Chan Haeng. All rights reserved.
    </footer>
  );
}
