import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaGraduationCap,
} from "react-icons/fa6";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { IconType } from "react-icons";

import { college } from "@/data/college";
import { contact } from "@/data/contact";
import { navLinks } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                <FaGraduationCap className="h-6 w-6" />
              </div>
              <span className="font-serif text-lg font-bold">
                {college.shortName}
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              {college.description}
            </p>
            <div className="flex items-center gap-3">
              <SocialIcon href={college.social.facebook} icon={FaFacebook} />
              <SocialIcon href={college.social.twitter} icon={FaTwitter} />
              <SocialIcon href={college.social.instagram} icon={FaInstagram} />
              <SocialIcon href={college.social.linkedin} icon={FaLinkedin} />
              <SocialIcon href={college.social.youtube} icon={FaYoutube} />
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h3>
            <div className="flex flex-col gap-2">
              {navLinks.slice(0, 8).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Resources
            </h3>
            <div className="flex flex-col gap-2">
              <Link
                href="/previous-papers"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Previous Year Papers
              </Link>
              <Link
                href="/syllabus"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Syllabus
              </Link>
              <Link
                href="/academic-calendar"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Academic Calendar
              </Link>
              <Link
                href="/timetable"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Time Table
              </Link>
              <Link
                href="/downloads"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Downloads
              </Link>
              <Link
                href="/faq"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                FAQ
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact Us
            </h3>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <FiMapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{contact.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiPhone className="h-4 w-4 shrink-0 text-primary" />
                <span>{contact.phone[0]}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiMail className="h-4 w-4 shrink-0 text-primary" />
                <span>{contact.email[0]}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {college.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>{college.accreditation[0]}</span>
            <span>•</span>
            <span>{college.accreditation[1]}</span>
            <span>•</span>
            <span>{college.approvals[0]}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, icon: Icon }: { href: string; icon: IconType }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
    >
      <Icon className="h-4 w-4" />
    </Link>
  );
}
