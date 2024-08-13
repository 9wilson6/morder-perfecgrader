import { FormEventHandler } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import Mini from "@/Layouts/MiniSectionLayout";
import { SignupForm } from "@/Components/SignupForm";
import { PageProps } from "@/types";
import LoginForm from "@/Components/LoginForm";
import ForgotPassForm from "@/Components/ForgotPassword";
import InputError from "@/Components/InputError";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { cn } from "@/lib/utils";
import Footer from "@/Components/Footer";
// import { MdLockReset } from "react-icons/md";

export default function Login({ auth }: PageProps) {
    return (
        <GuestLayout auth={auth}>
            <Head title="Log in" />

            <Mini>
                <div className="flex justify-center items-center pb-20 min-h-[90vh] mx-auto relative max-w-5xl ">
                    <div className="max-w-md  w-full mx-auto rounded-none md:rounded-2xl  p-4 md:p-8 shadow-input bg-white dark:bg-black/[0.5]">
                        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                            Welcome Back! to Perfectgrader
                        </h2>

                        <LoginForm />
                    </div>
                </div>
            </Mini>
            
        </GuestLayout>
    );
}
