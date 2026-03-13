"use server";

import { cookies } from "next/headers";
import { getCompanyByCode } from "@/services/companies";

export const validateCompany = async (companyCode: string) => {
  const company = await getCompanyByCode({ companyCode });

  if (!company?.id) return null;

  const cookieStore = await cookies();

  cookieStore.set("companyId", company.id, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
  });

  return company.id;
};
