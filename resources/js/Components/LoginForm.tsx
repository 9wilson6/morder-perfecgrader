"use client";
import React, { FormEventHandler } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

import { Link, useForm } from "@inertiajs/react";
import InputError from "./InputError";

export default function LoginForm({}: {
    status?: string;
    canResetPassword?: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };
    return (
        <>
            <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Please login to your account
            </p>

            <form className="my-4" onSubmit={submit}>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                        id="email"
                        placeholder="yourawesomeemail@example.com"
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        required
                    />
                    <InputError message={errors.email} className="mt-2" />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                    </div>
                    <Input
                        id="password"
                        placeholder="••••••••"
                        type="password"
                        name="password"
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                        required
                    />
                    <div className="flex items-center">
                        <Label htmlFor="password"></Label>
                        <Link
                            href={route("password.email")}
                            className="ml-auto inline-block text-sm underline text-black dark:text-white"
                        >
                            Forgot your password?
                        </Link>
                    </div>
                    <InputError message={errors.password} className="mt-2" />
                </LabelInputContainer>

                <button
                    className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                    disabled={processing}
                >
                    Log in &rarr;
                    <BottomGradient />
                </button>
                <div className="mt-4 text-center text-sm text-black dark:text-white">
                    Don&apos;t have an account?{" "}
                    <Link href={route("register")} className="underline">
                        Sign up
                    </Link>
                </div>
            </form>
        </>
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
