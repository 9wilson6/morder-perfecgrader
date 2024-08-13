import { FormEventHandler } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import Mini from "@/Layouts/MiniSectionLayout";
import { SignupForm } from "@/Components/SignupForm";
import { PageProps } from "@/types";
import LoginForm from "@/Components/LoginForm";
import ForgotPassForm from "@/Components/ForgotPassword";
import { cn } from "@/lib/utils";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import InputError from "@/Components/InputError";

export default function Register({ auth }: PageProps) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <GuestLayout auth={auth}>
            <Head title="Log in" />

            <Mini>
                <div className="flex justify-center items-center pb-20 min-h-[90vh] mx-auto relative max-w-5xl ">
                    <div className="max-w-md  w-full mx-auto rounded-none md:rounded-2xl  p-4 md:p-8 shadow-input bg-white dark:bg-black/[0.5]">
                        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                            Welcome! to Perfectgrader
                        </h2>
                        <SignupForm />
                    </div>
                </div>
            </Mini>
        </GuestLayout>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
