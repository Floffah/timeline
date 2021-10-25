import { NextSeo } from "next-seo";
import { MainLayout } from "src/components/layout/MainLayout";
import { Button } from "src/components/input/Button";
import { useRouter } from "next/router";
import { Navbar } from "src/components/nav/Navbar";

export default function IndexPage() {
    const router = useRouter();

    return (
        <>
            <NextSeo title="Home" />
            <Navbar showBackground={false} />
            <MainLayout
                top={
                    <div className="translate-center-y absolute left-16 w-fit">
                        <h1 className="text-2xl text-gray-100 text-center">
                            Get started
                        </h1>
                        <Button.Primary
                            className="mt-2"
                            onClick={() => router.push("/browse")}
                        >
                            Browse Timelines
                        </Button.Primary>
                    </div>
                }
            >
                <p className="translate-center text-gray-500 select-none">
                    No timeline loaded
                </p>
            </MainLayout>
        </>
    );
}
