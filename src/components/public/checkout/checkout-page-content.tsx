"use client";

import { useState } from "react";
import { Container } from "@/components/shared";
import { checkoutPageMockData } from "@/components/public/checkout/data/checkout.mock";
import { CheckoutPageHero } from "@/components/public/checkout/checkout-page-hero";
import { CheckoutPaymentSection } from "@/components/public/checkout/checkout-payment-section";
import { CheckoutSummaryCard } from "@/components/public/checkout/checkout-summary-card";
import type { CheckoutPageData, CheckoutPaymentMethodId } from "@/components/public/checkout/types";

interface CheckoutPageContentProps {
  initialData?: CheckoutPageData;
}

export function CheckoutPageContent({
  initialData = checkoutPageMockData,
}: CheckoutPageContentProps) {
  const [selectedMethod, setSelectedMethod] = useState<CheckoutPaymentMethodId>(
    initialData.defaultPaymentMethod
  );

  return (
    <>
      <CheckoutPageHero />

      <section className="bg-white py-10 sm:py-12 lg:py-14">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start lg:gap-10">
            <CheckoutPaymentSection
              methods={initialData.paymentMethods}
              selectedMethod={selectedMethod}
              onSelectMethod={setSelectedMethod}
              contact={initialData.contact}
            />

            <CheckoutSummaryCard summary={initialData.summary} />
          </div>
        </Container>
      </section>
    </>
  );
}
