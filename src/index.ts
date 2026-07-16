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
export type { UnidadeContent } from "./content/types";
export { campos } from "./content/campos";
