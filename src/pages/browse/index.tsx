import { TimelineList } from "src/components/info/TimelineList";
import { Navbar } from "src/components/nav/Navbar";
import { builtins } from "src/lib/timelines/all";

export default function BrowsePage() {
    return (
        <>
            <Navbar />
            <div className="ml-8 mr-8">
                <div className="mt-16 py-4 text-center rounded-lg bg-gradient-to-t from-gray-900 to-gray-800">
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
                        !
                    </p>
                </div>

                {/* featured */}
                <div className="mt-5">
                    <h1 className="text-2xl font-bold">Featured</h1>
                    <TimelineList timelines={builtins} />
                </div>
            </div>
        </>
    );
}
