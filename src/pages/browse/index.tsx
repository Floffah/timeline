import { Navbar } from "src/components/nav/Navbar";

export default function BrowsePage() {
    return (
        <>
            <Navbar />
            <div className="ml-8">
                {/* header kind of */}
                <div className="mt-16">
                    <h1 className="text-2xl">
                        Want to create your own timeline?
                    </h1>
                    <p>
                        Contribute one{" "}
                        <a
                            href="https://github.com/Floffah/timeline"
                            target="_blank"
                            rel="noreferrer"
                        >
                            on GitHub
                        </a>
                        ! A timeline editor is planned
                    </p>
                </div>
                {/* featured */}
                <div className="mt-5">
                    <h1 className="text-2xl font-bold">Featured</h1>
                </div>
            </div>
        </>
    );
}
