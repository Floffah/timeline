import { NextSeo } from "next-seo";
import { MainLayout } from "src/components/layout/MainLayout";

export default function IndexPage() {
    return (
        <>
            <NextSeo title="Home" />
            <MainLayout top={<></>}></MainLayout>
        </>
    );
}
