import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";
import { Footer } from "./Footer";

const meta: Meta<typeof Header> = {
  title: "Blocos/Header & Footer",
  component: Header,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
  argTypes: { brand: { table: { disable: true } }, aside: { table: { disable: true } } },
};
export default meta;
type Story = StoryObj<typeof Header>;

export const HeaderPadrao: Story = {
  args: {
    brand: "CENPRE",
    navItems: [
      { label: "Início", href: "#" },
      { label: "Estágio", href: "#" },
      { label: "Currículo", href: "#" },
      { label: "Vagas", href: "#" },
      { label: "Conteúdos", href: "#" },
    ],
    ctaLabel: "Acessar plataforma",
    ctaHref: "https://ucam-csm.symplicity.com",
  },
};

export const FooterPadrao: StoryObj<typeof Footer> = {
  render: () => (
    <Footer
      brand="CENPRE"
      contact={
        <>
          atendimento.cenpre@ucam-campos.br
          <br />
          (22) 2726-2419 · WhatsApp (22) 99618-0786
        </>
      }
      columns={[
        {
          title: "Aluno/Egresso",
          links: [
            { label: "Estágio", href: "#" },
            { label: "Currículo", href: "#" },
            { label: "Vagas", href: "#" },
          ],
        },
        {
          title: "Empresa",
          links: [
            { label: "Por que ser parceiro", href: "#" },
            { label: "Cadastro de convênio", href: "#" },
          ],
        },
        {
          title: "Institucional",
          links: [
            { label: "Sobre nós", href: "#" },
            { label: "Perguntas frequentes", href: "#" },
          ],
        },
      ]}
      legal="© 2026 CENPRE Carreiras · Universidade Candido Mendes."
    />
  ),
};
