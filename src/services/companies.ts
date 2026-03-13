import { db } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

type params = {
  companyCode: string;
  client?: Omit<Prisma.TransactionClient, "$transaction">;
};

export const getCompanyByCode = async ({ companyCode, client }: params) => {
  if (!companyCode) return null;

  // Uses the transactional client, if provided, or the default client.
  const prismaClient = client ?? db;

  const company = await prismaClient.company.findUnique({
    where: { code: companyCode },
  });

  return company;
};
