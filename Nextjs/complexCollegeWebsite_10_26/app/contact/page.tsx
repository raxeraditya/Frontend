'use client';

import { useState } from 'react';
import { PageHeader } from '@/components/page-header';
import { Breadcrumb } from '@/components/breadcrumb';
import { SectionHeading } from '@/components/section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { contact } from '@/data/contact';
import { useToast } from '@/hooks/use-toast';

export default function ContactPage() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: 'Message Sent!',
        description: 'We will get back to you within 24 hours.',
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Get in Touch"
        description="Have a question? We're here to help. Reach out through any of the channels below."
      />
      <div className="mx-auto max-w-7xl px-4 py-12">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Contact info */}
          <div className="space-y-4">
            <Card className="glass-card">
              <CardContent className="space-y-4 p-6">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="text-sm font-semibold">Address</h3>
                    <p className="text-sm text-muted-foreground">{contact.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="text-sm font-semibold">Phone</h3>
                    {contact.phone.map((p) => (
                      <p key={p} className="text-sm text-muted-foreground">{p}</p>
                    ))}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="text-sm font-semibold">Email</h3>
                    {contact.email.map((e) => (
                      <p key={e} className="text-sm text-muted-foreground">{e}</p>
                    ))}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="text-sm font-semibold">Office Hours</h3>
                    <p className="text-sm text-muted-foreground">{contact.officeHours}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <Card className="glass-card">
              <CardContent className="p-6 md:p-8">
                <h2 className="font-serif text-2xl font-bold">Send Us a Message</h2>
                <p className="mt-1 text-sm text-muted-foreground">Fill out the form below and we'll respond within 24 hours.</p>
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Admission Inquiry" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message..." rows={5} required />
                  </div>
                  <Button type="submit" disabled={submitting} className="w-full">
                    {submitting ? 'Sending...' : 'Send Message'} <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Department contacts */}
        <div className="mt-16">
          <SectionHeading title="Department Contacts" subtitle="Direct Lines" />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {contact.departments.map((dept) => (
              <Card key={dept.name} className="glass-card p-5">
                <h3 className="font-serif text-base font-bold">{dept.name}</h3>
                <div className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> {dept.phone}</p>
                  <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> {dept.email}</p>
                  <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> {dept.hours}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="mt-16">
          <SectionHeading title="Find Us on Map" subtitle="Location" />
          <Card className="mt-8 overflow-hidden">
            <iframe
              src={contact.googleMapIframe}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="College Location"
            />
          </Card>
        </div>
      </div>
    </>
  );
}
