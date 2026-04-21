import React from 'react'
import GiftHero from '../../components/public/gift/GiftHero';
import RecipientSection from '../../components/public/gift/RecipientSection';
import OccasionSection from '../../components/public/gift/OccasionSection';
import BudgetSection from '../../components/public/gift/BudgetSection';
import BundleSection from '../../components/public/gift/BundleSection';
import ProductGrid from '../../components/public/gift/ProductGrid';
import TrustSection from '../../components/public/gift/TrustSection';


export default function Gifts() {
  return (
    <div>
      <GiftHero />
      <RecipientSection />
      <div className="bg-gray-100 mx-4 md:mx-8 px-4 rounded-2xl">
        <BudgetSection />
        <OccasionSection />
      </div>
      <BundleSection />
      <ProductGrid />
      <TrustSection />
    </div>
  )
}