import Card from '../../assets/desktop/isocard.svg'
function Slogan() {
  return (
    <section className="text-36 md:text-48 font-extrabold my-14 md:my-28 md:grid md:grid-cols-3 md:items-center relative">
      <div className="text-center md:col-span-1 md:col-start-2">
        <div className="">
          Earn <span className="dark:text-purple-300 text-purple-600">More</span>
        <p className="">Pay Less</p>
        <button className="text-white text-20 md:text-25 font-bold md:px-8 md:py-[8px] px-6 py-[6px] mt-[27px] bg-purple-500 rounded-[14px] hover:bg-pink-500 transition-all duration-300 ">Start</button>
        </div>
      </div>
      <div className='mt-[69px] md:right-[-5rem] md:absolute'>
        <img src={Card} alt="Credit-Card" />
      </div>
    </section>
  );
}

export default Slogan;
