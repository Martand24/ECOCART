import GreenProduct from "./GreenProduct";
import ImageSlider from "./Imageslider";

function GreenHome() {
  return (
    <>
      {/* Main Container */}
      <div className="flex justify-center mx-auto max-w-[2000px]">
        <div className="w-full mb-16">
          <ImageSlider />
        </div>
      </div>

      {/* Row 1 */}
      <div className="flex flex-wrap justify-center gap-4 px-4">
        <GreenProduct
          id="843800"
          title="Biodegradable Paper Drinking Straws pack of 100, compostable, 7.75-inch"
          price={8.9}
          rating={4}
          image="/image11.png"
          ecoFriendly={true}
          CO2={0.08} // Very low for compostable paper straws
        />
        <GreenProduct
          id="875615"
          title="Compostable Paper Plates pack of 50, heavy-duty, plant-fiber material"
          price={11.9}
          rating={5}
          image="/image12.png"
          ecoFriendly={true}
          CO2={0.15} // Low for compostable plates
        />
        <GreenProduct
          id="875617"
          title="Reusable Water Bottle 500 ml, BPA-free, stainless steel"
          price={19.9}
          rating={4}
          image="/image13.png"
          ecoFriendly={true}
          CO2={0.05} // Low, amortized over many uses
        />
        <GreenProduct
          id="9513254"
          title="Compostable Coffee Cup pack of 50 with lids, 12 oz, plant-based"
          price={16.9}
          rating={4}
          image="/image14.png"
          ecoFriendly={true}
          CO2={0.18} // Low for compostable cups
        />
      </div>

      {/* Row 2 */}
      <div className="flex flex-wrap justify-center gap-4 px-4">
        <GreenProduct
          id="1001002"
          title="Bamboo Cutlery Set reusable, lightweight, durable, 100% natural"
          price={9.5}
          rating={5}
          image="/image15.png"
          ecoFriendly={true}
          CO2={0.07} // Very low for bamboo, reusable
        />
        <GreenProduct
          id="1657495"
          title="Compostable Produce Bags pack of 500, plant-starch material"
          price={15.9}
          rating={4}
          image="/image16.png"
          ecoFriendly={true}
          CO2={0.12} // Low for compostable bags
        />
        <GreenProduct
          id="1657495"
          title="Organic Cotton Pads pack of 100, reusable, soft, eco-conscious"
          price={7.9}
          rating={5}
          image="/image17.png"
          ecoFriendly={true}
          CO2={0.09} // Low for organic, reusable pads
        />
        <GreenProduct
          id="1657495"
          title="Bamboo Toothbrush pack of 5, biodegradable handle, medium bristles"
          price={9.9}
          rating={4}
          image="/image18.png"
          ecoFriendly={true}
          CO2={0.06} // Very low for bamboo, biodegradable
        />
      </div>

      {/* Row 3 */}
      <div className="flex flex-wrap justify-center gap-4 px-4 mt-12">
        <GreenProduct
          id="1625854"
          title="Silicone Snack Bags reusable, food-safe, leak-proof, set of 100"
          price={14.9}
          rating={5}
          image="/image19.png"
          ecoFriendly={true}
          CO2={0.25} // Low, reusable for years
        />
        <GreenProduct
          id="1625957"
          title="Safety Razor metal handle, reusable, eco-conscious alternative"
          price={24.9}
          rating={5}
          image="/image20.png"
          ecoFriendly={true}
          CO2={0.09} // Low, reusable for years
        />
      </div>
    </>
  );
}

export default GreenHome;
