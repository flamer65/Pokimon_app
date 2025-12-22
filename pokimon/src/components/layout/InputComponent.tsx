export default function Input({
    placeholder,
    type,
    ref,
}: {
    placeholder: string;
    type: string;
    ref?: React.RefObject<HTMLInputElement | null>;
}) {
    return (
        <div className="flex flex-col justif-start gap-2">
            <label htmlFor="">{placeholder}</label>
            <input
                ref={ref}
                type={type}
                placeholder={placeholder}
                className=" w-full rounded-md bg-transparent border border-neutral-500 p-3 font-medium tracking-tight placeholder:text-neutral-500 "
            />
        </div>
    );
}
