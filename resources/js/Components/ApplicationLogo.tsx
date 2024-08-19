import { Link } from "@inertiajs/react";
import { SVGAttributes } from "react";

export default function ApplicationLogo(props: SVGAttributes<SVGElement>) {
    return (
        <>
            {" "}
            <div className="flex items-center -space-x-3 font-semibold">
                <span className="h-6 aspect-square bg-emerald-600 dark:bg-emerald-400 rounded-full flex" />
                <span className="h-6 aspect-square bg-gray-600 dark:bg-white rounded-full flex" />
            </div>
        </>
    );
}
