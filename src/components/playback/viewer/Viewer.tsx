import { MainLayout } from "src/components/layout/MainLayout";
import { Viewbox } from "src/components/playback/Viewbox";
import { ViewerStatus } from "src/components/playback/viewer/ViewerStatus";
import Icon from "@mdi/react";
import { mdiChevronLeft } from "@mdi/js";
import { useRouter } from "next/router";

export function Viewer() {
    const router = useRouter();

    return (
        <MainLayout
            top={
                <>
                    <p
                        className="fixed top-2 left-3 select-none cursor-pointer hover:bg-gray-700 rounded-lg transition-colors"
                        onClick={() => router.back()}
                    >
                        <Icon
                            path={mdiChevronLeft}
                            size={1.15}
                            className="inline-block align-top text-lg"
                        />
                        <span className="ml-0.5 mr-3.5 text-lg inline-block">
                            Exit
                        </span>
                    </p>
                    <Viewbox />
                </>
            }
        >
            <div
                className="absolute overflow-hidden top-0 w-full"
                style={{
                    height: "calc(100% - 1.25rem)",
                }}
            />
            <ViewerStatus />
        </MainLayout>
    );
}
