import { FC } from "react";
import { extendClass } from "src/lib/util/props";
import { useRouter } from "next/router";
// import { signIn, useSession } from "next-auth/client";
// import Icon from "@mdi/react";
// import { mdiLoading } from "@mdi/js";

const Navbar: FC<{ showBackground?: boolean; className?: string }> = (p) => {
    const router = useRouter();
    // const [session, isLoading] = useSession();
    // const [isSigningIn, setIsSigningIn] = useState(false);

    return (
        <div
            className={extendClass(
                p,
                "w-full h-12 overflow-hidden z-40 fixed top-0",
                p.showBackground ? "bg-gray-800" : "backdrop-blur-md",
            )}
        >
            <h1
                className="text-2xl mt-2 ml-5 select-none cursor-pointer w-fit"
                onClick={() => router.push("/")}
            >
                Timeline
            </h1>
            <div className="absolute right-0 top-0 inline-block">
                {/*{!session && (*/}
                    <h1
                        className="inline-block text-gray-300 text-lg mr-3 mt-2.5 cursor-pointer select-none"
                        onClick={() => {
                            // signIn("discord");
                            // setIsSigningIn(true);
                            alert("Sign in disabled until next-auth supports react 18 + nextjs 12 (when v4 releases)")
                        }}
                    >
                        Sign in
                    </h1>
                {/* )} */}
                {/*{(isLoading || isSigningIn) && (*/}
                {/*    <Icon*/}
                {/*        path={mdiLoading}*/}
                {/*        className="animate-spin mr-3 mt-2 inline-block text-gray-300 align-top"*/}
                {/*        size={1.25}*/}
                {/*    />*/}
                {/*)}*/}
            </div>
        </div>
    );
};

Navbar.defaultProps = {
    showBackground: true,
};

export { Navbar };
