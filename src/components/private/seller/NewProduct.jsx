import React, { useEffect, useState } from "react";
import BasicInfoStep from "./ProductCreation.jsx/BasicInfoStep";
import ProductMediaStep from "./ProductCreation.jsx/ProductMediaStep";
import ProductVariantsStep from "./ProductCreation.jsx/ProductVariantsStep";
import { useSideBar } from "../../../context/ProfileSideBarContext";

export default function NewProduct() {
  const [step, setStep] = useState(1);
  const [sku, setSku] = useState("");
  const [productAddedSuccess, setProductAddedSuccess] = useState(false)
  const { showSideBar, setShowSideBar, sideBarAble } = useSideBar()

  const [variants, setVariants] = useState([variantsData]);
  const [productName, setProductName] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [gender, setGender] = useState("men");
  const [description, setdescription] = useState("");
  const [images, setImages] = useState([]);
  const [heroIndex, setHeroIndex] = useState(null);
  const [heroImageUrl, setHeroImageUrl] = useState(null);

  const getWidth = () => {
    switch (step) {
      case 1:
        return "w-3";
      case 2:
        return "w-1/2";
      case 3:
        return "w-full";
      default:
        return "w-3";
    }
  };

  const getHero = () => {
    if (!images.length || heroIndex === null) {
      return null
    }
    if (heroIndex >= images.length) return null
    return images[heroIndex]
  };


  useEffect(() => {
    console.log(sku);
  }, [sku]);


  useEffect(() => {
    setHeroImageUrl(getHero());
  }, [heroIndex, images]);

  useEffect(() => {
    console.log(heroImageUrl);
  }, [heroImageUrl]);

  return (
    <div className="p-6 w-full mx-auto">
      {/* Header */}
      {!productAddedSuccess &&
        <>
          <div className="mb-6 ">
            <div className="flex gap-2 justify-between">
              <p className="text-sm  text-gray-500">
                Catalog <span className="mx-2">›</span>{" "}
                <span className="text-orange-500 font-medium">
                  Add New Product
                </span>
              </p>
              <div className='flex items-center'>
                {sideBarAble && <button className={`cursor-pointer border p-2 rounded border-gray-400 z-10 ${showSideBar ? '' : 'rotate-180'}`} onClick={() => setShowSideBar(!showSideBar)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 5h12M4 12h16M4 19h8" /></svg></button>}
              </div>
            </div>
            <h1 className=" text-2xl md:text-3xl font-medium md:font-semibold mt-0 md:mt-3">Create Product</h1>
            <p className="text-gray-500 font-light">
              Fill in the primary details for your new footwear listing.
            </p>
          </div>
        </>
      }

      {/* Stepper */}
      {!productAddedSuccess &&
        <>
          <div className=" block md:hidden bg-white rounded-2xl  shadow-[1px_2px_5px_2px_rgba(0,0,0,0.1)] p-4 mb-8">
            <div className="flex justify-between">
              <div>
                <p className="font-medium">
                  Sep 1: {["Basic Info", "Media", "Variants"].map((label, index) => index + 1 === step && label)}
                </p>
              </div>
              <div className="bg-gray-200 rounded-full px-3 py-0.5">
                <p className="text-sm font-light">{step} of 3</p>
              </div>
            </div>
            <div className="w-full mt-3">
              <div className="bg-gray-100 rounded-full w-full h-3">
                <div className={`bg-orange-400 h-full rounded-full transition-all duration-1000 ${getWidth()}`}></div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl   p-4 hidden md:flex justify-between items-center mb-8">
            {["Basic Info", "Media", "Variants"].map((label, index) => {
              const current = index + 1;
              return (
                <div key={label} className="flex flex-col items-center w-full">
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-semibold
                ${step >= current
                        ? "bg-orange-500 text-white"
                        : "border text-gray-500"
                      }`}
                  >{current}</div>
                  <p
                    className={`mt-2 text-sm ${step === current
                      ? "text-orange-500 font-medium"
                      : "text-gray-400"
                      }`}
                  >{label} </p>
                </div>
              );
            })}
          </div>
        </>
      }

      {/* Main Layout */}
      {step === 1 && (
        <BasicInfoStep
          brand={brand}
          setBrand={setBrand}
          productName={productName}
          setProductName={setProductName}
          category={category}
          setCategory={setCategory}
          description={description}
          setdescription={setdescription}
          gender={gender}
          setGender={setGender}
          setStep={setStep}
        />
      )}

      {step === 2 && (
        <ProductMediaStep
          images={images}
          setImages={setImages}
          setStep={setStep}
          heroIndex={heroIndex}
          setHeroIndex={setHeroIndex}
        />
      )}
      {step === 3 && (
        <ProductVariantsStep setStep={setStep} heroImageUrl={heroImageUrl} productAddedSuccess={productAddedSuccess} setProductAddedSuccess={setProductAddedSuccess} brand={brand} productName={productName} variants={variants} setVariants={setVariants} />
      )}
    </div>
  );
}

const variantsData = {
  sku: "AIR-MAX-270-BLK-9",
  color: "Eastern Shoreline",
  colorCode: "#00a0aa",
  size: 9,
  price: 160,
  stock: 12,
}