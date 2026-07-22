import { useState, type FormEvent, type ReactNode } from "react";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import { Button } from "./Button";
import { cn } from "@/lib/cn";

export interface ContactFormValues {
  company: string;
  email: string;
  phone: string;
  message: string;
}

export interface ContactFormProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  /** Linhas de contato exibidas no lado informativo (e-mail, telefone…). */
  contactLines?: ReactNode;
  submitLabel?: string;
  onSubmit?: (values: ContactFormValues) => void;
  className?: string;
}

/**
 * "FALE COM A GENTE" — bloco de contato responsivo: lado informativo +
 * formulário (Nome, Email, Telefone, Mensagem). Empilha no mobile.
 */
export function ContactForm({
  eyebrow = "FALE COM A GENTE",
  title,
  description,
  contactLines,
  submitLabel = "Enviar contato",
  onSubmit,
  className,
}: ContactFormProps) {
  const [values, setValues] = useState<ContactFormValues>({
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSubmit?.(values);
  }
  const set = (k: keyof ContactFormValues) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  return (
    <section
      className={cn(
        "grid overflow-hidden rounded-card border border-ash-200 md:grid-cols-2",
        className,
      )}
    >
      <div className="flex flex-col justify-center gap-4 bg-ash-100 p-8 md:p-12">
        <span className="text-[13px] font-semibold uppercase tracking-[0.16em] text-magenta-700">
          {eyebrow}
        </span>
        <h2 className="font-display text-[34px] font-semibold leading-[1.1] text-charcoal-500 md:text-[44px]">
          {title}
        </h2>
        {description && (
          <p className="text-base leading-relaxed text-charcoal-400">{description}</p>
        )}
        {contactLines && (
          <div className="mt-2 text-sm leading-relaxed text-charcoal-300">{contactLines}</div>
        )}
      </div>

      <form className="flex flex-col gap-4 bg-white p-8 md:p-12" onSubmit={handleSubmit} noValidate>
        <Input
          label="Nome da Empresa"
          placeholder="Digite o nome da empresa"
          value={values.company}
          onChange={set("company")}
          autoComplete="organization"
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <Input
            label="Email"
            type="email"
            placeholder="seu@email.com"
            value={values.email}
            onChange={set("email")}
            autoComplete="email"
          />
          <Input
            label="Telefone"
            placeholder="(22) 00000-0000"
            value={values.phone}
            onChange={set("phone")}
            autoComplete="tel"
          />
        </div>
        <Textarea
          label="Mensagem"
          placeholder="Escreva a sua mensagem..."
          rows={4}
          value={values.message}
          onChange={set("message")}
        />
        <Button type="submit" fullWidth>
          {submitLabel}
        </Button>
      </form>
    </section>
  );
}
