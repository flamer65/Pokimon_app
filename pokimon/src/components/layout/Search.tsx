import { useState } from "react";
import Button from "./Button";
import { usePokemonStore } from "../../store/store";

export default function Search() {
    const [searchId, setSearchId] = useState<string | number>("");
    const setSearch = usePokemonStore((state) => state.setSearch);

    return (
        <div className="min-w-full   min-h-[240px] my-4 flex flex-col gap-6 items-center justify-center">
            <p className="text-center w-120 max-md:w-80  tracking-tight ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti beatae laboriosam iste provident velit consequatur
                tenetur rerum fugit labore aperiam ex iure, nostrum saepe
                reiciendis fuga?
            </p>
            <div className="flex  gap-2 justify-start items-center my-auto">
                <input
                    type="text"
                    name="searchId"
                    id="searchId"
                    placeholder="Search by id"
                    className="p-2 rounded-md outline-2 outline-neutral-700 w-100 max-md:w-60"
                    value={searchId}
                    onChange={(e) => setSearchId(e.target.value)}
                />
                <Button onClick={() => {
                    const num = Number(searchId);
                    // If num is a valid number and searchId is not empty string (which becomes 0)
                    // we pass the number. Otherwise pass the raw string.
                    if (!isNaN(num) && searchId !== "") {
                        setSearch(num);
                    } else {
                        setSearch(searchId);
                    }
                }}>
                    Search
                </Button>
            </div>
            <div />
        </div>
    );
}
