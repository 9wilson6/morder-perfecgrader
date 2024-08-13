import ApplicationLogo from "@/Components/ApplicationLogo";
import { Navbar } from "@/Components/Navbar";
import { ThemeProvider } from "@/Components/theme-provider";
import { PageProps } from "@/types";
import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function Guest({
    children,
    auth,
}: PropsWithChildren & PageProps) {
    return (
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
            <div className="">
                <Navbar auth={auth} />

                {children}
            </div>
        </ThemeProvider>
    );
}
