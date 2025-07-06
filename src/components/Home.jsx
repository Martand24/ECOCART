import ImageSlider from "./Imageslider";
import GreenProduct from "./GreenProduct";

function Home() {
  return (
    <>
      <div className="flex justify-center mx-auto max-w-[2000px]">
        <div className="w-full mb-16">
          <ImageSlider />
        </div>
      </div>

      {/* Row 1 */}
      <div className="flex flex-wrap justify-center gap-4 px-2 z-10">
        <GreenProduct
          id="12321341"
          title="Disposable Plastic Drinking Straws  a pack of 100 clear, BPA-free straws designed for convenience and reliability, 7.75-inch"
          price={7.5}
          rating={3}
          image="/image1.png"
          ecoFriendly={false}
          CO2={2.0} // Higher CO2 for 100 plastic straws
        />
        <GreenProduct
          id="49538094"
          title="Single-Use Plastic Plates pack of 50 durable, lightweight plates for parties and events"
          price={9.9}
          rating={4}
          image="/image2.png"
          ecoFriendly={false}
          CO2={4.0} // Higher CO2 for 50 plates
        />
        <GreenProduct
          id="49538094"
          title="Plastic Water Bottles – 24 pack of 500 ml single-use water bottles"
          price={11.5}
          rating={4}
          image="/image3.png"
          ecoFriendly={false}
          CO2={10.0} // Higher CO2 for 24 bottles
        />
        <GreenProduct
          id="3254354345"
          title="Disposable Coffee Cups pack of 50 with lids, 12 oz, to-go style"
          price={14.9}
          rating={4}
          image="/image4.png"
          ecoFriendly={false}
          CO2={6.0} // Higher CO2 for 50 cups
        />
      </div>

      {/* Row 2 */}
      <div className="flex flex-wrap justify-center gap-4 px-2 z-10 mt-4">
        <GreenProduct
          id="23445930"
          title="Plastic Cutlery Set 100 piece pack (forks, knives, spoons), lightweight and convenient"
          price={5.5}
          rating={3}
          image="/image5.png"
          ecoFriendly={false}
          CO2={3.0} // Higher CO2 for 100 pieces
        />
        <GreenProduct
          id="958462"
          title="Grocery Plastic Bags pack of 500, lightweight and reusable once or twice"
          price={12.9}
          rating={2}
          image="/image6.png"
          ecoFriendly={false}
          CO2={5.0} // Higher CO2 for 500 bags
        />
        <GreenProduct
          id="90829332"
          title="Single-Use Cotton Pads pack of 100, soft, non-reusable cosmetics pads"
          price={4.5}
          rating={3}
          image="/image7.png"
          ecoFriendly={false}
          CO2={1.5} // Higher CO2 for 100 pads
        />
        <GreenProduct
          id="90829332"
          title="Plastic Toothbrush pack of 5, non-biodegradable dental care"
          price={6.9}
          rating={4}
          image="/image8.png"
          ecoFriendly={false}
          CO2={1.0} // Higher CO2 for 5 brushes
        />
      </div>

      {/* Row 3 */}
      <div className="flex justify-center px-2 z-10 mt-4">
        <GreenProduct
          id="90829332"
          title="Plastic Snack Bags 100 piece, single use, resealable"
          price={7.9}
          rating={3}
          image="/image9.png"
          ecoFriendly={false}
          CO2={2.0} // Higher CO2 for 100 bags
        />
        <GreenProduct
          id="90829332"
          title="Plastic Razor – pack of 10, disposable, lightweight"
          price={8.5}
          rating={2}
          image="/image10.png"
          ecoFriendly={false}
          CO2={1.5} // Higher CO2 for 10 razors
        />
      </div>
    </>
  );
}

export default Home;
