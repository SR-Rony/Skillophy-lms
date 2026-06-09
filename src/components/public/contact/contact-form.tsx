"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { contactFormSectionData } from "@/components/public/contact/data/contact-form-section.data";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/validations/contact-form.schema";
import { cn } from "@/utils";

const fieldClassName =
  "h-12 rounded-[10px] border-[#ece6e3] bg-white px-4 text-[14px] text-[#24201f] shadow-none placeholder:text-[#b0a8a6] focus-visible:border-primary/40 focus-visible:ring-2 focus-visible:ring-primary/15";

const labelClassName = "text-[13px] font-medium text-[#6f6562]";

interface ContactFormFieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}

function ContactFormField({ label, htmlFor, error, children }: ContactFormFieldProps) {
  return (
    <div className="space-y-2.5">
      <Label htmlFor={htmlFor} className={labelClassName}>
        {label}
      </Label>
      {children}
      {error ? <p className="text-[12px] text-primary">{error}</p> : null}
    </div>
  );
}

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      description: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    void data;
    await new Promise((resolve) => setTimeout(resolve, 600));
    reset();
  };

  const { fields, submitLabel } = contactFormSectionData;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-5">
      <ContactFormField
        label={fields.fullName.label}
        htmlFor="contact-fullName"
        error={errors.fullName?.message}
      >
        <Input
          id="contact-fullName"
          placeholder={fields.fullName.placeholder}
          className={fieldClassName}
          {...register("fullName")}
        />
      </ContactFormField>

      <ContactFormField
        label={fields.email.label}
        htmlFor="contact-email"
        error={errors.email?.message}
      >
        <Input
          id="contact-email"
          type="email"
          placeholder={fields.email.placeholder}
          className={fieldClassName}
          {...register("email")}
        />
      </ContactFormField>

      <ContactFormField
        label={fields.description.label}
        htmlFor="contact-description"
        error={errors.description?.message}
      >
        <textarea
          id="contact-description"
          rows={5}
          placeholder={fields.description.placeholder}
          className={cn(
            fieldClassName,
            "block min-h-[140px] w-full resize-none py-3 leading-[1.6]",
          )}
          {...register("description")}
        />
      </ContactFormField>

      <Button
        type="submit"
        disabled={isSubmitting}
        variant="publicCta"
        size="publicCta"
        className="h-[52px] w-full"
      >
        {isSubmitting ? "Sending..." : submitLabel}
      </Button>
    </form>
  );
}
