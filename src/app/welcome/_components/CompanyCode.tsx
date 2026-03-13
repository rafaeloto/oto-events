"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { validateCompany } from "@/actions/validateCompany";
import { toast } from "sonner";

type CompanyCodeProps = {
  companyCode?: string;
};

const formSchema = z.object({
  companyCode: z.string().min(1, {
    message: "O código da empresa é obrigatório.",
  }),
});

type FormSchema = z.infer<typeof formSchema>;

const CompanyCode = ({ companyCode }: CompanyCodeProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyCode: companyCode || "",
    },
  });

  const companyCodeValue = form.getValues("companyCode");

  const handleFormSubmit = async (data: FormSchema) => {
    setIsLoading(true);

    const companyId = await validateCompany(data.companyCode);

    if (!companyId) {
      toast.error("Código da empresa inválido");
    }

    setIsLoading(false);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleFormSubmit)}
        className="flex w-full max-w-sm flex-col gap-6"
      >
        <FormField
          control={form.control}
          name="companyCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Código da empresa</FormLabel>
              <FormControl>
                <Input placeholder="Digite o código..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={isLoading || !companyCodeValue}
        >
          Continuar
        </Button>
      </form>
    </Form>
  );
}

export default CompanyCode;