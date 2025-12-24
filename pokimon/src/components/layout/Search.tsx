import Button from "./Button";
import { usePokemonStore } from "../../store/store";
import { useRef } from "react";

export default function Search() {
  const setSearch = usePokemonStore((state) => state.setSearch);
  const refsearch = useRef<HTMLInputElement>(null);
  return (
    <div className="min-w-full   min-h-[240px] my-4 flex flex-col gap-6 items-center justify-center">
      <p className="text-center w-120 max-md:w-80  tracking-tight ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti beatae
        laboriosam iste provident velit consequatur tenetur rerum fugit labore
        aperiam ex iure, nostrum saepe reiciendis fuga?
      </p>
      <div className="flex  gap-2 justify-start items-center my-auto">
        <input
          type="text"
          name="searchId"
          id="searchId"
          ref={refsearch}
          placeholder="Search by id"
          className="p-2 rounded-md outline-2 outline-neutral-700 w-100 max-md:w-60"
        />
        <Button
          onClick={() => {
            const inputValue = refsearch.current?.value ?? "";
            setSearch(inputValue);
          }}
        >
          Search
        </Button>
      </div>
      <div />
    </div>
  );
}
