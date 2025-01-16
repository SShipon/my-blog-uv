import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is your refund policy?",
    answer: "If you're not satisfied with your purchase, we offer a 30-day money-back guarantee. No questions asked.",
  },
  {
    question: "How do I contact customer support?",
    answer: "You can reach our customer support team via email at support@example.com or through our live chat on the website.",
  },
  {
    question: "Do you offer discounts for non-profit organizations?",
    answer: "Yes, we offer special pricing for non-profit organizations. Please contact our sales team for more information.",
  },
]

export default function FAQ() {
  return (
    <section className="bg-background py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-xl text-muted-foreground">Can't find the answer you're looking for? Reach out to our customer support team.</p>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

