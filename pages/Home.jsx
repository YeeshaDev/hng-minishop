import Categories from "../src/components/Categories";
import Banner from "../src/components/common/Banner";
import Products from "../src/components/common/Products";

function Home() {
  return (
    <main>
      {/* Hero */}
      <div className="bg-heromobile sm:bg-hero w-full bg-black/20 bg-cover  bg-no-repeat h-[80vh] sm:h-[95vh] mt-5"></div>
      <Categories />
      <Banner />
      <Products />
      <Banner />
    </main>
  );
}
export default Home;
