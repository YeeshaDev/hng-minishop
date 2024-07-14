export default function NotFound() {
  return (
    <div className="flex flex-col  gap-y-5 items-center justify-center m-auto py-12 ">
      <img
        width={200}
        height={200}
        alt="PAGE NOT FOUND"
        src="/assets/notfound.svg"
      />
      <p> Cart is Empty</p>
      <Link
        to="/"
        className="w-[170px] bg-textClr text-white h-12 flex items-center justify-center rounded-md"
      >
        GO HOME
      </Link>
    </div>
  );
}
