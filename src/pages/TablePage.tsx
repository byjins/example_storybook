import React from "react";
import Table from "../components/Table/Table";
import { type ColumnDef } from "@tanstack/react-table";
import "./ComponentPage.css";

interface Person extends Record<string, unknown> {
  id: number;
  name: string;
  email: string;
  age: number;
  role: string;
  status: "active" | "inactive";
}

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

const TablePage: React.FC = () => {
  const columns: ColumnDef<Person>[] = [
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

  return (
    <div className="component-page">
      <div className="component-page-header">
        <h1>Table 컴포넌트</h1>
        <p>
          TanStack Table을 사용한 테이블을 테스트하고 커스터마이징할 수 있습니다
        </p>
      </div>

      <div className="component-page-content">
        <section className="component-section">
          <h2>기본 테이블 (정렬 및 페이지네이션 포함)</h2>
          <div className="component-demo">
            <Table
              data={sampleData}
              columns={columns}
              enablePagination={true}
              enableSorting={true}
              pageSize={5}
            />
          </div>
        </section>

        <section className="component-section">
          <h2>페이지네이션 없는 테이블</h2>
          <div className="component-demo">
            <Table
              data={sampleData}
              columns={columns}
              enablePagination={false}
              enableSorting={true}
            />
          </div>
        </section>

        <section className="component-section">
          <h2>정렬 없는 테이블</h2>
          <div className="component-demo">
            <Table
              data={sampleData}
              columns={columns}
              enablePagination={true}
              enableSorting={false}
              pageSize={5}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default TablePage;
