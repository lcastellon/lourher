import { Body, Container, Head, Heading, Hr, Html, Preview, Section, Text } from "@react-email/components";

type ContactMessageEmailProps = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function ContactMessageEmail({ name, email, subject, message }: ContactMessageEmailProps) {
  return (
    <Html lang="es">
      <Head />
      <Preview>Nueva consulta desde el sitio académico</Preview>
      <Body style={{ backgroundColor: "#f6f1e5", color: "#30251f", fontFamily: "Arial, sans-serif" }}>
        <Container style={{ margin: "32px auto", maxWidth: "620px", padding: "32px", backgroundColor: "#fffdf8" }}>
          <Text style={{ color: "#a34f38", fontSize: "12px", textTransform: "uppercase" }}>
            Formulario de contacto
          </Text>
          <Heading style={{ fontSize: "26px", lineHeight: "1.25" }}>{subject}</Heading>
          <Section>
            <Text><strong>Nombre:</strong> {name}</Text>
            <Text><strong>Correo de respuesta:</strong> {email}</Text>
          </Section>
          <Hr style={{ borderColor: "#ddd4c5", margin: "24px 0" }} />
          <Text style={{ lineHeight: "1.6", whiteSpace: "pre-wrap" }}>{message}</Text>
        </Container>
      </Body>
    </Html>
  );
}