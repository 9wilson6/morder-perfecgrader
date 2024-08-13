import { FormEventHandler } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import Mini from "@/Layouts/MiniSectionLayout";
import { SignupForm } from "@/Components/SignupForm";
import { PageProps } from "@/types";
import LoginForm from "@/Components/LoginForm";

import InputError from "@/Components/InputError";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { cn } from "@/lib/utils";
import { User } from "@/types"; // Added this import to resolve the error

export default function ForgotPassForm({ status, auth }: { status: string; auth: PageProps & { user: User } }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };
    return (
        <GuestLayout auth={auth}>
            <Head title="Log in" />

            <Mini>
                <div className="flex justify-center items-center pb-20 min-h-[90vh] mx-auto relative max-w-5xl ">
                    <div className="max-w-md  w-full mx-auto rounded-none md:rounded-2xl  p-4 md:p-8 shadow-input bg-white dark:bg-black/[0.5]">
                        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                            Forgot your password? No problem.
                        </h2>
                        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                            Just let us know your email address and we will
                            email you a password reset link that will allow you
                            to choose a new one.
                        </p>
                        {status && (
                            <div className="my-4 font-medium text-sm text-emerald-400">
                                {status}
                            </div>
                        )}
                        <form className="my-4" onSubmit={submit}>
                            <LabelInputContainer className="mb-4">
                                <Label htmlFor="email">Email Address</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="yourawesomeemail@example.com"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    required
                                />
                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                            </LabelInputContainer>

                            <button
                                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                                type="submit"
                                disabled={processing}
                            >
                                Get Reset Link &rarr;
                                <BottomGradient />
                            </button>
                        </form>
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