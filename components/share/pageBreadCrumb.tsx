import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { IBreadCrumb } from "@/type/type";
import { House } from "lucide-react";
import Link from "next/link";
import React from "react";

const PageBreadCrumb = ({ pages }: { pages: IBreadCrumb[] }) => {
  return (
    <div className="my-container my-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
            <Link href={"/"} className="flex items-center gap-x-1"><House size={16}/> Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          {pages.map((page, index) => {
            if (index === pages.length - 1) {
              return (
                <BreadcrumbItem key={index}>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              );
            }
            return (
              <>
                <BreadcrumbItem key={index}>
                  <BreadcrumbLink href={page.href ? page.href : "/"}>
                    {page.label}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default PageBreadCrumb;
