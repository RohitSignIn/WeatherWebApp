function TempCard({
  temperature,
  image,
  condition,
  title,
}: {
  temperature: string;
  image: string;
  condition: string;
  title: string;
}) {
  return (
    <div
      className='flex flex-col justify-between items-center border bg-white rounded-3xl pb-2 cursor-pointer hover:scale-105 hover:shadow-lg transition-all ease-in-out relative'
      title={condition}
    >
      <div className='w-[165px] h-[165px] text-center flex flex-col justify-between items-center'>
        <div
          className='bg-[#623ddb] w-full py-1 px-2
      rounded-t-3xl text-white text-center'
        >
          <p className='text-sm'>{condition}</p>
        </div>
        <div className='font-semibold text-lg'>{title}</div>
        <div>
          <img className='w-full max-h-[50px]' src={image} />
        </div>
        <div className='font-semibold text-lg'>{temperature}</div>
      </div>
    </div>
  );
}

export default TempCard;
