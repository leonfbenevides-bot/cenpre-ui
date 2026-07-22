import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Pagination } from "./Pagination";

const meta: Meta<typeof Pagination> = {
  title: "Composição/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj<typeof Pagination>;

export const Interativa: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    return (
      <div style={{ minWidth: 560 }}>
        <Pagination page={page} totalPages={10} onPageChange={setPage} />
      </div>
    );
  },
};

export const PoucasPaginas: Story = {
  render: () => {
    const [page, setPage] = useState(2);
    return (
      <div style={{ minWidth: 420 }}>
        <Pagination page={page} totalPages={4} onPageChange={setPage} />
      </div>
    );
  },
};
