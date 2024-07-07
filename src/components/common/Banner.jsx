function Banner() {
  return (
    <section className="!max-w-[1400px] flex-center bg-[#1E1E1E] h-[75vh]">
      <article className="flex-center gap-x-10 px-5">
        <div className="max-w-[50%]">
          <img
            width={500}
            height={300}
            src="/assets/blackbannerImg.png"
            className="w-full lg:h-[380px] object-cover"
          />
        </div>
        <div className="max-w-[50%] space-y-1 md:text-lg text-white">
          <span>Exotic</span>
          <h3 className="!font-noto text-3xl">Bridal Best Collections</h3>
          <p classNmae="pb-6">
            Lorem ipsum dolor sit amet consectetur. Sed commodo pellentesque
            arcu tristique et morbi.
          </p>
          <button className=" text-center !mt-6 bg-purpleClr py-2 px-4 text-white uppercase font-medium ">
            shop now
          </button>
        </div>
      </article>
    </section>
  );
}
export default Banner;
