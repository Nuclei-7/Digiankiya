"use client"

import {useAuth} from "@/app/store/auth";
import {useRouter} from 'next/navigation';
import { useEffect } from "react";

const Page = () => {
    const { logoutUser } = useAuth();
    const router = useRouter();
    useEffect(() => {
        logoutUser();
        router.push('/auth/login');
    },[]);
    return (<>
        </>);
};

export default Page;