// CENPRE Carreiras — biblioteca de componentes (React + TS + Tailwind)
// Barrel de exportação pública.

export { cn } from "./lib/cn";

// Primitivos
export { Button, buttonVariants, type ButtonProps, type ButtonVariant, type ButtonSize } from "./components/Button";
export { Tag, tagVariants, type TagProps, type TagTone, type TagSize } from "./components/Tag";
export { Input, type InputProps } from "./components/Input";
export { Textarea, type TextareaProps } from "./components/Textarea";
export { Avatar, type AvatarProps, type AvatarSize } from "./components/Avatar";
export { IconChip, type IconChipProps, type IconChipSize, type IconChipTone } from "./components/IconChip";
export { Divider, type DividerProps } from "./components/Divider";

// Composição
export { SectionHeading, type SectionHeadingProps } from "./components/SectionHeading";
export { Card, type CardProps } from "./components/Card";
export { FeatureCard, type FeatureCardProps } from "./components/FeatureCard";
export { StepCard, type StepCardProps } from "./components/StepCard";
export { DocCard, type DocCardProps } from "./components/DocCard";
export { JobCard, type JobCardProps } from "./components/JobCard";
export { NewsCard, type NewsCardProps } from "./components/NewsCard";
export { LogoBand, type LogoBandProps, type LogoBandItem } from "./components/LogoBand";
export { Pagination, type PaginationProps } from "./components/Pagination";
export { Carousel, type CarouselProps } from "./components/Carousel";
export { HeroBanner, type HeroBannerProps } from "./components/HeroBanner";

// Interativos (Radix)
export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  AccordionList,
  type AccordionListItem,
  type AccordionListProps,
} from "./components/Accordion";
export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsPills,
  type TabsPillItem,
  type TabsPillsProps,
} from "./components/Tabs";

// Blocos
export { PageHero, type PageHeroProps } from "./components/PageHero";
export { ContactForm, type ContactFormProps, type ContactFormValues } from "./components/ContactForm";
export { PlatformCTA, type PlatformCTAProps } from "./components/PlatformCTA";
export { Header, type HeaderProps, type NavItem } from "./components/Header";
export { Footer, type FooterProps, type FooterColumn } from "./components/Footer";

// Ícones
export * as Icons from "./components/Icons";

// Páginas e conteúdo (modelo multi-unidade)
export { TemplateUnidade, type TemplateUnidadeProps } from "./pages/TemplateUnidade";
export { HomeEmpresa, type HomeEmpresaProps } from "./pages/HomeEmpresa";
export { OrientacoesEstagio, type OrientacoesEstagioProps } from "./pages/OrientacoesEstagio";
export { Curriculo, type CurriculoProps } from "./pages/Curriculo";
export { EmpresasConveniadas, type EmpresasConveniadasProps } from "./pages/EmpresasConveniadas";
export { CadastroConvenio, type CadastroConvenioProps } from "./pages/CadastroConvenio";
export { PorQueSerParceiro, type PorQueSerParceiroProps } from "./pages/PorQueSerParceiro";
export { PainelVagas, type PainelVagasProps } from "./pages/PainelVagas";
export { Artigo, type ArtigoProps } from "./pages/Artigo";
export { SobreNos, type SobreNosProps } from "./pages/SobreNos";
export { BibliotecaConteudos, type BibliotecaConteudosProps } from "./pages/BibliotecaConteudos";
export { PageShell, Breadcrumb, PlatformSection, SiteFooter, ContactLines, TopicCard } from "./pages/shared";
export type {
  UnidadeContent, EmpresaContent, SubHero, OrientacoesContent, CurriculoContent,
  ConveniadasContent, CadastroConvenioContent, ParceiroContent, VagasContent,
  ArtigoContent, SobreNosContent, BibliotecaContent,
} from "./content/types";
export { campos } from "./content/campos";
export { empresa } from "./content/empresa";
export { orientacoes, curriculo } from "./content/paginas-aluno";
export { conveniadas, cadastroConvenio, parceiro } from "./content/paginas-empresa";
export { vagas, artigoExemplo, sobreNos, biblioteca } from "./content/paginas-conteudo";
export { AudienceSwitcher, type AudienceSwitcherProps, type AudienceOption } from "./components/AudienceSwitcher";
