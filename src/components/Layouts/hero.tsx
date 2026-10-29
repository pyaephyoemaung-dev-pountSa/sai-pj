
const Hero = () =>
{
    return (
        <section className="max-w-6xl mx-auto mt-8 bg-blue-100 flex justify-between grid grid-cols-2 p-16 rounded-4xl">
            <div className="flex flex-col justify-center gap-4">
                <div className="">
                    <span className="text-red-800 font-medium rounded-full bg-red-100 px-3">Up to 17% off this week</span>
                </div>
                <h1 className="text-[40px] font-bold text-pretty">Tech and fashion, clearly priced.</h1>
                <p className="font-small text-pretty">Phones, laptops, audio, watches and bags from Apple, Samsung, Longines, Puma and more. Free delivery over $100.</p>
                <div className="flex gap-4">
                    <button className="bg-blue-500 hover:bg-blue-600 rounded-full px-7 py-3 text-white">Shop the sale</button>
                    <button className="bg-white hover:bg-white-500 rounded-full px-7 py-3 text-black">Browse everything</button>
                </div>
            </div>
            <div className="relative flex item-center">
                <img src="/src/lib/icons/undraw_shopping_a55o.svg" alt="" className="" />
                <div className="absolute bottom-0 right-0 bg-white p-3 rounded-2xl">
                    <span className="text-[#4F5665] text-sm">AirPods Max Silver</span>
                    <div className="flex gap-2 item-center">
                        <p className="font-bold">$474.81</p>
                        <div className="">
                            <span className="line-through text-xs text-[#4F5665]">$549.99</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
   )
}
export default Hero;