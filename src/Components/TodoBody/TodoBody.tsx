import Button from '../Button/Button';


export default function TodoBody({ data, deleteHandler }: { data: string[], deleteHandler: (a: any) => any }) {
  return (
    <div className='mt-10'>
      {data &&  data.length === 0 ?<div className='flex justify-center items-center text-xl'>Yohoo 😁✔ no items left</div>:data.map((v, i) => {
        return (
          <div className='flex gap-2 p-4 mx-3 border-2 rounded-lg items-center my-5 md:gap-0 md:p-6' key={i}>
            <div className='flex-1'>
              <h1 className='text-base font-semibold'>{v}</h1>
            </div>
            <div className='flex-1'>
              <Button className='bg-red-500 text-white border-none rounded-sm  w-16 h-full md:w-28 md:h-8' onClick={() => deleteHandler(i)}>Delete</Button>
            </div>
            <div className='flex-1'>
              <Button className='bg-blue-700 text-white border-none rounded-sm  w-16 h-full md:w-28 md:h-8' onClick={() => deleteHandler(i)}>Edit</Button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
