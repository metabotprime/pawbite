import { Container } from '@/components/layout/container';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import type { FAQ } from '@/data/products-detail';

export function PdpFaq({ faqs }: { faqs: FAQ[] }) {
  return (
    <Container size="narrow">
      <h2 className="fraunces-soft mb-8 text-3xl font-bold md:text-4xl">
        Your questions, answered.
      </h2>
      <Accordion type="single" collapsible>
        {faqs.map((faq, i) => (
          <AccordionItem key={faq.question} value={`faq-${i}`}>
            <AccordionTrigger className="text-base md:text-lg">{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
}
