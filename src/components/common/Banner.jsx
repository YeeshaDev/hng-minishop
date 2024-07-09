import { Link } from 'react-router-dom';
  
function Banner() {
  return (
    <section className="!max-w-[1400px] flex-center bg-[#1E1E1E] sm:h-[75vh]">
      <article className=" flex flex-col sm:flex-row items-center justify-center gap-x-3 sm:gap-x-10 py-7 sm:py-1  px-5">
        <div className="lg:max-w-[50%]">
          <img
            width={500}
            height={300}
            src="/assets/blackbannerImg.png"
            className="w-full  lg:h-[380px] object-cover"
          />
        </div>
        <div className="lg:max-w-[50%] mt-3 sm:mt-0 space-y-1 md:text-lg text-white">
          <span>Exotic</span>
          <h3 className="!font-noto text-xl sm:text-3xl">Bridal Best Collections</h3>
          <p className="pb-4">
            Lorem ipsum dolor sit amet consectetur. Sed commodo pellentesque
            arcu tristique et morbi.
          </p>
          <Link to="/" className=" text-center !mt-6 bg-purpleClr py-2 px-4 text-white uppercase font-medium ">
            shop now
          </Link>
        </div>
      </article>
    </section>
  );
}
export default Banner;
