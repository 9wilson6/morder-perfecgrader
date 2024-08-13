import { FormEventHandler } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import Mini from "@/Layouts/MiniSectionLayout";
import { SignupForm } from "@/Components/SignupForm";

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
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
        <GuestLayout>
            <Head title="Log in" />

            <Mini>
                <div className="flex justify-center items-center pb-20 min-h-[90vh] mx-auto relative max-w-5xl ">
                    <Tabs defaultValue="account" className="w-full py-10 flex flex-col items-center justify-center">
                        <TabsList>
                            <TabsTrigger value="account">Login</TabsTrigger>
                            <TabsTrigger value="register">Register</TabsTrigger>
                            <TabsTrigger value="password">Forgot Password</TabsTrigger>
                        </TabsList>
                        <TabsContent value="account" className="min-h-[400px]">
                            <SignupForm/>
                        </TabsContent>
                        <TabsContent value="register" className="min-h-[400px]">
                            Change your password here.
                        </TabsContent>
                        <TabsContent value="password" className="min-h-[400px]">
                            Forgot Password. 
                        </TabsContent>
                    </Tabs>
                </div>
            </Mini>
        </GuestLayout>
    );
}
