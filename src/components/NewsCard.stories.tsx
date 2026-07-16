import type { Meta, StoryObj } from "@storybook/react";
import { NewsCard } from "./NewsCard";

const meta: Meta<typeof NewsCard> = {
  title: "Composição/NewsCard",
  component: NewsCard,
  tags: ["autodocs"],
  args: {
    author: "André Pacheco",
    date: "19 nov 2024",
    title: "Ciclo de Estudo PCL 2024.2",
    excerpt:
      "O ciclo reuniu estudantes de diferentes cursos em encontros voltados ao desenvolvimento acadêmico e profissional.",
    tags: ["Estudo", "UCAM"],
    href: "#",
  },
};
export default meta;
type Story = StoryObj<typeof NewsCard>;

export const Padrao: Story = {
  render: (args) => (
    <div style={{ maxWidth: 340 }}>
      <NewsCard {...args} />
    </div>
  ),
};

export const Grade: Story = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22, maxWidth: 960 }}>
      <NewsCard
        author="André Pacheco"
        date="19 nov 2024"
        title="Ciclo de Estudo PCL 2024.2"
        excerpt="O ciclo reuniu estudantes de diferentes cursos em encontros voltados ao desenvolvimento acadêmico."
        tags={["Estudo", "UCAM"]}
        href="#"
      />
      <NewsCard
        author="Equipe CENPRE"
        date="05 mar 2025"
        title="5 erros comuns no currículo que afastam recrutadores"
        excerpt="Identifique os deslizes mais frequentes e saiba como corrigir antes da próxima candidatura."
        tags={["Currículo", "Carreira"]}
        href="#"
      />
      <NewsCard
        author="Equipe CENPRE"
        date="18 fev 2025"
        title="Estágio obrigatório x não obrigatório: o que muda na prática"
        excerpt="Carga horária, bolsa-auxílio e documentação têm regras diferentes entre as duas modalidades."
        tags={["Estágio", "Orientação"]}
        href="#"
      />
    </div>
  ),
};
