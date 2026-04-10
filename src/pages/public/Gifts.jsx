import React from 'react'
import GiftHero from '../../components/gift/GiftHero';
import RecipientSection from '../../components/gift/RecipientSection';
import OccasionSection from '../../components/gift/OccasionSection';
import BudgetSection from '../../components/gift/BudgetSection';
import BundleSection from '../../components/gift/BundleSection';
import ProductGrid from '../../components/gift/ProductGrid';
import TrustSection from '../../components/gift/TrustSection';


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