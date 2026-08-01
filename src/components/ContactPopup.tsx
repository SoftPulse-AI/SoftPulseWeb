import { useEffect, useState, type FormEvent } from "react";
import { useLocation } from "react-router-dom";
import { MessageSquare, Send } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const STORAGE_KEY = "softpulse-contact-popup-dismissed";
const OPEN_DELAY_MS = 3500;
const API_BASE_URL = "https://notificationservice.softpulseai.in";
const WEBSITE_CLIENT_ID = 1;

const ContactPopup = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (pathname === "/contact") return;
    if (sessionStorage.getItem(STORAGE_KEY) === "1") return;

    const timer = window.setTimeout(() => setOpen(true), OPEN_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
    if (!nextOpen) {
      sessionStorage.setItem(STORAGE_KEY, "1");
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("");
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      client_id: WEBSITE_CLIENT_ID,
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      source: "website",
      campaign: "softpulseai-contact-popup",
      page: window.location.href,
    };

    try {
      const response = await fetch(`${API_BASE_URL}/partner/public/website-lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus("Submitted successfully! Our team will contact you shortly.");
        form.reset();
        sessionStorage.setItem(STORAGE_KEY, "1");
        window.setTimeout(() => setOpen(false), 1800);
      } else {
        const data = await response.json().catch(() => ({}));
        setStatus(data?.error || "There was a problem submitting the form. Please try again.");
      }
    } catch {
      setStatus("There was a problem submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const statusClassName = status.toLowerCase().includes("success")
    ? "text-green-600"
    : "text-red-600";

  if (pathname === "/contact") return null;

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="glass-card border-white/15 max-w-[min(100vw-1.5rem,26rem)] gap-3 p-5 sm:rounded-xl">
        <DialogHeader className="space-y-1.5 text-left pr-6">
          <DialogTitle className="text-xl flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-accent shrink-0" />
            Let&apos;s talk
          </DialogTitle>
          <DialogDescription className="text-sm text-foreground/70">
            Share a few details and we&apos;ll get back to you shortly.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-3" noValidate>
          <div>
            <label htmlFor="popup-name" className="text-xs font-medium text-foreground/80 mb-1.5 block">
              Name
            </label>
            <Input
              id="popup-name"
              name="name"
              placeholder="Your name"
              required
              autoComplete="name"
              className="h-10 glass-card border-white/20 focus:border-accent/50"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="popup-email" className="text-xs font-medium text-foreground/80 mb-1.5 block">
                Email
              </label>
              <Input
                id="popup-email"
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                autoComplete="email"
                className="h-10 glass-card border-white/20 focus:border-accent/50"
              />
            </div>
            <div>
              <label htmlFor="popup-phone" className="text-xs font-medium text-foreground/80 mb-1.5 block">
                Phone
              </label>
              <Input
                id="popup-phone"
                type="tel"
                name="phone"
                placeholder="Phone number"
                required
                autoComplete="tel"
                className="h-10 glass-card border-white/20 focus:border-accent/50"
              />
            </div>
          </div>

          <div>
            <label htmlFor="popup-message" className="text-xs font-medium text-foreground/80 mb-1.5 block">
              Message
            </label>
            <Textarea
              id="popup-message"
              name="message"
              placeholder="How can we help?"
              rows={3}
              required
              className="glass-card border-white/20 focus:border-accent/50 resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full gradient-primary hover:shadow-primary group"
          >
            {isSubmitting ? "Submitting..." : "Send Message"}
            <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>

          {status && (
            <p className={`text-center text-sm font-medium ${statusClassName}`} role="status">
              {status}
            </p>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactPopup;
