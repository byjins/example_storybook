import type { Meta, StoryObj } from "@storybook/react";
import Table from "./Table";
import { type ColumnDef } from "@tanstack/react-table";

// 샘플 데이터 타입 정의
interface Person {
  id: number;
  name: string;
  email: string;
  age: number;
  role: string;
  status: "active" | "inactive";
}

// 샘플 데이터
const sampleData: Person[] = [
  {
    id: 1,
    name: "홍길동",
    email: "hong@example.com",
    age: 28,
    role: "개발자",
    status: "active",
  },
  {
    id: 2,
    name: "김철수",
    email: "kim@example.com",
    age: 32,
    role: "디자이너",
    status: "active",
  },
  {
    id: 3,
    name: "이영희",
    email: "lee@example.com",
    age: 25,
    role: "기획자",
    status: "inactive",
  },
  {
    id: 4,
    name: "박민수",
    email: "park@example.com",
    age: 35,
    role: "개발자",
    status: "active",
  },
  {
    id: 5,
    name: "정수진",
    email: "jung@example.com",
    age: 29,
    role: "디자이너",
    status: "active",
  },
  {
    id: 6,
    name: "최동현",
    email: "choi@example.com",
    age: 27,
    role: "개발자",
    status: "inactive",
  },
  {
    id: 7,
    name: "강미영",
    email: "kang@example.com",
    age: 31,
    role: "기획자",
    status: "active",
  },
  {
    id: 8,
    name: "윤태호",
    email: "yoon@example.com",
    age: 26,
    role: "개발자",
    status: "active",
  },
];

// 기본 컬럼 정의
const defaultColumns: ColumnDef<Person>[] = [
  {
    accessorKey: "id",
    header: "ID",
    size: 80,
  },
  {
    accessorKey: "name",
    header: "이름",
    size: 120,
  },
  {
    accessorKey: "email",
    header: "이메일",
    size: 200,
  },
  {
    accessorKey: "age",
    header: "나이",
    size: 80,
  },
  {
    accessorKey: "role",
    header: "역할",
    size: 100,
  },
  {
    accessorKey: "status",
    header: "상태",
    size: 100,
    cell: (info) => {
      const status = info.getValue() as string;
      return (
        <span
          style={{
            padding: "0.25rem 0.5rem",
            borderRadius: "4px",
            fontSize: "0.75rem",
            fontWeight: 500,
            backgroundColor: status === "active" ? "#d1fae5" : "#fee2e2",
            color: status === "active" ? "#065f46" : "#991b1b",
          }}
        >
          {status === "active" ? "활성" : "비활성"}
        </span>
      );
    },
  },
];

const meta: Meta<typeof Table<Person>> = {
  title: "Components/Table",
  component: Table,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    enablePagination: {
      control: "boolean",
      description: "페이지네이션 활성화 여부",
    },
    enableSorting: {
      control: "boolean",
      description: "정렬 기능 활성화 여부",
    },
    enableFiltering: {
      control: "boolean",
      description: "필터링 기능 활성화 여부",
    },
    pageSize: {
      control: "number",
      description: "페이지당 표시할 항목 수",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table<Person>>;

export const Default: Story = {
  args: {
    data: sampleData,
    columns: defaultColumns,
    enablePagination: true,
    enableSorting: true,
    enableFiltering: false,
    pageSize: 5,
  },
};

export const WithoutPagination: Story = {
  args: {
    data: sampleData,
    columns: defaultColumns,
    enablePagination: false,
    enableSorting: true,
    enableFiltering: false,
  },
};

export const WithoutSorting: Story = {
  args: {
    data: sampleData,
    columns: defaultColumns,
    enablePagination: true,
    enableSorting: false,
    enableFiltering: false,
    pageSize: 5,
  },
};

export const SmallPageSize: Story = {
  args: {
    data: sampleData,
    columns: defaultColumns,
    enablePagination: true,
    enableSorting: true,
    enableFiltering: false,
    pageSize: 3,
  },
};

export const EmptyData: Story = {
  args: {
    data: [],
    columns: defaultColumns,
    enablePagination: true,
    enableSorting: true,
    enableFiltering: false,
    pageSize: 5,
  },
};

export const CustomColumns: Story = {
  args: {
    data: sampleData,
    columns: [
      {
        accessorKey: "name",
        header: "이름",
        size: 150,
      },
      {
        accessorKey: "email",
        header: "이메일 주소",
        size: 250,
      },
      {
        accessorKey: "role",
        header: "직책",
        size: 120,
        cell: (info) => {
          const role = info.getValue() as string;
          const roleColors: Record<string, string> = {
            개발자: "#3b82f6",
            디자이너: "#8b5cf6",
            기획자: "#10b981",
          };
          return (
            <span
              style={{
                padding: "0.25rem 0.5rem",
                borderRadius: "4px",
                fontSize: "0.75rem",
                fontWeight: 500,
                backgroundColor: `${roleColors[role]}20`,
                color: roleColors[role],
              }}
            >
              {role}
            </span>
          );
        },
      },
    ],
    enablePagination: true,
    enableSorting: true,
    enableFiltering: false,
    pageSize: 5,
  },
};
