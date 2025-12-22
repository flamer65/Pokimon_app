import Input from "../layout/InputComponent";
import Button from "../layout/Button";
import { useRef } from "react";
import axios from "axios";
export default function SigningPage({
    navigate,
}: {
    navigate: (path: string) => void;
}) {
    const refusername = useRef<HTMLInputElement>(null);
    const refpassword = useRef<HTMLInputElement>(null);
    const handleLogin = () => {
        try {
            if (refusername.current && refpassword.current) {
                axios.post("http://localhost:3000/signup", {
                    username: refusername.current.value,
                    password: refpassword.current.value,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="min-h-screen max-w-screen overflow-hidden flex justify-center items-center bg-neutral-900">
            <div
                className="absolute top-5 right-5 cursor-pointer"
                onClick={() => navigate("/")}
            >
                ❌
            </div>
            <div className="h-[410px] w-[450px] flex flex-col justify-start items-center border border-neutral-700 rounded-md p-5">
                <div className="h-[200px]  p-2 min-w-full  flex flex-col gap-9">
                    <Input placeholder="Username" type="text" ref={refusername} />
                    <Input placeholder="Password" type="password" ref={refpassword} />
                    <Button onClick={handleLogin}>Login</Button>
                </div>
            </div>
        </div>
    );
}
