"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { businessFormData } from "@/components/public/business/data/business-form.data";
import {
  businessInquirySchema,
  type BusinessInquiryFormValues,
} from "@/validations/business-inquiry.schema";
import { cn } from "@/utils";

const fieldClassName =
  "h-12 rounded-2xl border-[#ece6e3] bg-white px-4 text-[14px] text-[#24201f] shadow-none placeholder:text-[#b0a8a6] focus-visible:border-primary/40 focus-visible:ring-2 focus-visible:ring-primary/15 md:text-[14px]";

const labelClassName = "text-[13px] font-medium text-[#6f6562]";

interface BusinessFormFieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}

function BusinessFormField({
  label,
  htmlFor,
  error,
  children,
  className,
}: BusinessFormFieldProps) {
  return (
    <div className={cn("space-y-2.5", className)}>
      <Label htmlFor={htmlFor} className={labelClassName}>
        {label}
      </Label>
      {children}
      {error && <p className="text-[12px] text-primary">{error}</p>}
    </div>
  );
}

export function BusinessInquiryForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BusinessInquiryFormValues>({
    resolver: zodResolver(businessInquirySchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      companySize: "",
      peopleToTrain: "",
      phone: "",
      location: "",
      description: "",
    },
  });

  const onSubmit = async (data: BusinessInquiryFormValues) => {
    void data;
    await new Promise((resolve) => setTimeout(resolve, 600));
    reset();
  };

  const { fields, submitLabel } = businessFormData;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-5">
      <BusinessFormField
        label={fields.fullName.label}
        htmlFor="fullName"
        error={errors.fullName?.message}
      >
        <Input
          id="fullName"
          placeholder={fields.fullName.placeholder}
          className={fieldClassName}
          {...register("fullName")}
        />
      </BusinessFormField>

      <div className="grid gap-5 sm:grid-cols-2">
        <BusinessFormField
          label={fields.companyName.label}
          htmlFor="companyName"
          error={errors.companyName?.message}
        >
          <Input
            id="companyName"
            placeholder={fields.companyName.placeholder}
            className={fieldClassName}
            {...register("companyName")}
          />
        </BusinessFormField>

        <BusinessFormField
          label={fields.email.label}
          htmlFor="email"
          error={errors.email?.message}
        >
          <Input
            id="email"
            type="email"
            placeholder={fields.email.placeholder}
            className={fieldClassName}
            {...register("email")}
          />
        </BusinessFormField>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <BusinessFormField
          label={fields.companySize.label}
          htmlFor="companySize"
          error={errors.companySize?.message}
        >
          <Input
            id="companySize"
            placeholder={fields.companySize.placeholder}
            className={fieldClassName}
            {...register("companySize")}
          />
        </BusinessFormField>

        <BusinessFormField
          label={fields.peopleToTrain.label}
          htmlFor="peopleToTrain"
          error={errors.peopleToTrain?.message}
        >
          <Input
            id="peopleToTrain"
            placeholder={fields.peopleToTrain.placeholder}
            className={fieldClassName}
            {...register("peopleToTrain")}
          />
        </BusinessFormField>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <BusinessFormField
          label={fields.phone.label}
          htmlFor="phone"
          error={errors.phone?.message}
        >
          <Input
            id="phone"
            type="tel"
            placeholder={fields.phone.placeholder}
            className={fieldClassName}
            {...register("phone")}
          />
        </BusinessFormField>

        <BusinessFormField
          label={fields.location.label}
          htmlFor="location"
          error={errors.location?.message}
        >
          <Input
            id="location"
            placeholder={fields.location.placeholder}
            className={fieldClassName}
            {...register("location")}
          />
        </BusinessFormField>
      </div>

      <BusinessFormField
        label={fields.description.label}
        htmlFor="description"
        error={errors.description?.message}
        className="w-full"
      >
        <textarea
          id="description"
          rows={6}
          placeholder={fields.description.placeholder}
          className={cn(
            fieldClassName,
            "block min-h-[160px] w-full resize-none bg-white py-3 leading-[1.6]"
          )}
          {...register("description")}
        />
      </BusinessFormField>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="h-14 w-full rounded-2xl bg-primary text-[15px] font-bold text-white shadow-[0_16px_32px] shadow-primary/24 transition hover:bg-primary/90"
      >
        {isSubmitting ? "Submitting..." : submitLabel}
      </Button>
    </form>
  );
}
