import { type Props } from "../../types/types";

export default function Cointainer({children}: Props) {
  return (
    <div className="flex justify-center items-center min-h-screen max-w-screen">
      <div className="flex flex-col w-full max-w-[958px] xl:w-[1200px] xl:max-w-[1200px] min-h-screen  text-lg 2xl:text-xl text-neutral-300 z-10 px-4">
       {children}
       </div>
    </div>
  )
}
