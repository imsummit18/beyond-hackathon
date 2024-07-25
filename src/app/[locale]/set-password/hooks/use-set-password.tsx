"use client";

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter, useSearchParams } from 'next/navigation'
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { useState } from 'react';
import { toast } from '@/components/ui/use-toast';
import { SetPasswordSchema, SetPasswordSchemaType } from './schema';

const useResetPassword = () => {
    const { t } = useTranslation()
    const params = useSearchParams();
    const email = params?.get("email")
    const type = params?.get("type")
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter()


    const form = useForm<SetPasswordSchemaType>({
        resolver: zodResolver(SetPasswordSchema(t)),
        defaultValues: {
        }
    })

    const onSubmit = async () => {
        setIsLoading(true)
        try {
            const payload = {
                email,
                type,
                ...form.getValues()
            }
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/set-password`,
                payload
            );
            router.push("/")
            setIsLoading(false)
            toast({
                title: response?.data?.message,
            });
        } catch (err: any) {
            setIsLoading(false)
            toast({
                title: "Please try again",
                variant: 'destructive',
            });

        }
    }

    return {
        form,
        onSubmit,
        isLoading
    }
}

export default useResetPassword
