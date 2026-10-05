import { render } from "@react-email/render";
import { sendLovableEmail } from "@lovable.dev/email-js";

import { ContactMessageEmail } from "@/emails/contact-message";

type ContactMessage = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function deliverContactMessage(data: ContactMessage) {
  const apiKey = process.env['LOVABLE_API_KEY']!;
  const senderDomain = process.env['CONTACT_SENDER_DOMAIN'];

  if (!senderDomain) {
    return { sent: false as const, reason: "email_setup_pending" as const };
  }

  const html = await render(<ContactMessageEmail {...data} />);
  const text = [
    `Nombre: ${data.name}`,
    `Correo de respuesta: ${data.email}`,
    `Asunto: ${data.subject}`,
    "",
    data.message,
  ].join("\n");

  await sendLovableEmail(
    {
      to: "malourdes_hernandez@coltlax.edu.mx",
      from: { name: "Sitio académico de María de Lourdes Hernández", address: `contacto@${senderDomain}` },
      sender_domain: senderDomain,
      reply_to: data.email,
      subject: `Consulta desde el sitio: ${data.subject}`,
      html,
      text,
      purpose: "transactional",
      idempotency_key: `contact-${crypto.randomUUID()}`,
    },
    { apiKey },
  );

  return { sent: true as const };
}