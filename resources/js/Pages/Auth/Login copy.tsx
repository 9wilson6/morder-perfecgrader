import { FormEventHandler } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import Mini from "@/Layouts/MiniSectionLayout";
import { SignupForm } from "@/Components/SignupForm";
import { PageProps } from "@/types";
import  LoginForm  from "@/Components/LoginForm";
import  ForgotPassForm  from "@/Components/ForgotPassword";

export default function Login({ auth, status, canResetPassword }: PageProps) {
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
        <GuestLayout auth={auth}>
            <Head title="Log in" />

            <Mini>
                <div className="flex justify-center items-center pb-20 min-h-[90vh] mx-auto relative max-w-5xl ">
                    <Tabs
                        defaultValue="account"
                        className="w-full py-10 flex flex-col items-center justify-center"
                    >
                        <TabsList>
                            <TabsTrigger value="account">Login</TabsTrigger>
                            <TabsTrigger value="register">Register</TabsTrigger>
                            <TabsTrigger value="password">
                                Forgot Password
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="account" className="min-h-[400px]">
                           <LoginForm canResetPassword />
                        </TabsContent>
                        <TabsContent value="register" className="min-h-[400px]">
                            <SignupForm />
                        </TabsContent>
                        <TabsContent value="password" className="min-h-[400px]">
                            <ForgotPassForm />
                        </TabsContent>
                    </Tabs>
                </div>
            </Mini>
        </GuestLayout>
    );
}
