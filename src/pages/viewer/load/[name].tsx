import { useRouter } from "next/router";
import { MainLayout } from "src/components/layout/MainLayout";
import { useEffect } from "react";

export default function ViewerLoaderPage() {
    const router = useRouter();

    useEffect(() => {
        router
            .prefetch("/viewer/[name]", `/viewer/${router.query.name}`)
            .then(() =>
                router.replace(
                    "/viewer/[name]",
                    `/viewer/${router.query.name}`,
                ),
            );
    });

    return (
        <MainLayout
            top={
                <div className="translate-center-y absolute left-16 w-fit">
                    <div className="h-9 w-60 animate-pulse bg-gray-600 rounded-md" />
                    <div className="h-9 w-40 mt-3 animate-pulse bg-gray-600 rounded-md" />
                </div>
            }
        />
    );
}
