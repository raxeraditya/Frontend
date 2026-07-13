'use client';

import { useState, useMemo } from 'react';
import { PageHeader } from '@/components/page-header';
import { Breadcrumb } from '@/components/breadcrumb';
import { SectionHeading } from '@/components/section-heading';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqs, faqCategories } from '@/data/faq';
import { cn } from '@/lib/utils';
import { HelpCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function FAQPage() {
  const [category, setCategory] = useState('All');

  const filtered = useMemo(() => {
    if (category === 'All') return faqs;
    return faqs.filter((f) => f.category === category);
  }, [category]);

  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="FAQ"
        description="Find answers to the most common questions about admissions, academics, facilities, and more."
      />
      <div className="mx-auto max-w-4xl px-4 py-12">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]} />

        {/* Category filter */}
        <div className="mt-8 flex flex-wrap gap-2">
          {faqCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition-all',
                category === cat
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-accent/10'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ accordion */}
        <div className="mt-8">
          <Accordion type="single" collapsible className="space-y-3">
            {filtered.map((faq) => (
              <div key={faq.id} className="glass-card overflow-hidden rounded-2xl">
                <AccordionItem value={faq.id} className="border-0">
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <span className="flex items-start gap-3">
                      <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="font-medium">{faq.question}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    <p className="pl-8">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center">
          <h2 className="font-serif text-2xl font-bold">Still Have Questions?</h2>
          <p className="mt-2 text-muted-foreground">Our team is here to help you with any queries you might have.</p>
          <Button asChild className="mt-4">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
