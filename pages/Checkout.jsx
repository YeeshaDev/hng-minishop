function Checkout() {
  return (
    <div>
      <h2 className="text-3xl text-center my-7 font-semibold">Checkout</h2>
      <section className="md:flex md:gap-x-20 justify-between ">
        <article className="w-full md:w-1/2">
          <div className="border border-[#CD0000] py-2  text-sm text-center bg-[#CD0000]/10">
            Already have an account?{" "}
            <span className="text-[#CD0000]">Log in</span> for faster checkout
          </div>

          <div>
            <h3 className="text-xl text-center my-7 font-semibold">Billing</h3>
          </div>
        </article>

        <article className="w-full md:w-1/2"></article>
      </section>
    </div>
  );
}
export default Checkout;
