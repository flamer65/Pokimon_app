export default function Button({children, onClick}: {children: string, onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void}){
  return(
    <div>
      <button onClick={onClick} className='font-sans  bg-indigo-500 flex items-center justify-center  text-shadow-2xs text-shadow-neutral-800 shadow-lg shadow-indigo-500/50  hover:bg-indigo-600 py-1.5 px-4 rounded-md '>
        {children}
        </button>
    </div>
  )
}
