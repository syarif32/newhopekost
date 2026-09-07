"use client";

import { usePathname } from "next/navigation";
import {
  WHATSAPP_DEFAULT_MESSAGE,
  buildWhatsAppUrl,
  getWhatsAppPropertyMessage,
} from "@/lib/constants";
import { getKostBySlug } from "@/data/kostData";
import { WhatsAppIcon } from "@/components/ui/Icons";

interface FloatingWAProps {
  
  propertyName?: string;
}

export default function FloatingWA({ propertyName }: FloatingWAProps) {
  const pathname = usePathname();
  const resolvedPropertyName = propertyName ?? getPropertyNameFromPathname(pathname);

  const message = resolvedPropertyName
    ? getWhatsAppPropertyMessage(resolvedPropertyName)
    : WHATSAPP_DEFAULT_MESSAGE;

  const whatsappUrl = buildWhatsAppUrl(message);

  const ariaLabel = resolvedPropertyName
    ? `Hubungi kami via WhatsApp mengenai ${resolvedPropertyName}`
    : "Hubungi kami via WhatsApp";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}

function getPropertyNameFromPathname(pathname: string | null): string | undefined {
  if (!pathname) return undefined;
  const match = pathname.match(/^\/kost\/([^/]+)\/?$/);
  if (!match) return undefined;
  return getKostBySlug(match[1])?.nama;
}
