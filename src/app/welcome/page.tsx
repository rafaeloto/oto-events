import { leagueSpartan } from "@/styles/fonts";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Icon from "@/components/atoms/Icon";
import { SignInButton, SignUpButton } from '@clerk/nextjs'
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import CompanyCode from "./_components/CompanyCode";

type WelcomePageProps = {
  searchParams: Promise<{
    redirect_url?: string;
    companyCode?: string
  }>;
};

const WelcomePage = async ({ searchParams }: WelcomePageProps) => {
  const { redirect_url, companyCode: companyCodeParam } = await searchParams;
  const redirectUrl = redirect_url || "/";

  const { userId } = await auth();

  if (userId) {
    redirect(redirectUrl);
  }

  const companyId = (await cookies()).get("companyId")?.value;

  return (
    <div className="relative flex h-full flex-col md:grid md:grid-cols-2">
      {/* Info and button */}
      <div className="relative z-10 mx-auto flex h-full max-w-[550px] flex-col justify-center p-8">
        <div className="mb-8 flex items-center gap-3 md:mb-6">
          <Image src="/favicon.ico" alt="Oto Events" width={60} height={60} />
          <h1
            className={`${leagueSpartan.className} font-spartan text-4xl font-bold`}
          >
            Oto Events
          </h1>
        </div>
        <h1 className="mb-8 text-4xl font-bold md:mb-3">Bem-vindo</h1>
        <p className="mb-8 text-muted-foreground">
          A Oto Events é uma plataforma de gestão de eventos que permite que
          você tenha um controle completo sobre o acesso dos convidados, utilizando
          QR codes para monitorar sua participação e oferecer a visualização detalhada
          dos seus eventos.
        </p>
        <div className="flex w-full flex-col gap-4">
          {companyId ? (
            <>
              {/* Signin button */}
              <SignInButton forceRedirectUrl={redirectUrl} mode="modal">
                <Button>
                  <Icon name="LogIn" className="mr-2" />
                  Entrar
                </Button>
              </SignInButton>

              {/* Signup button */}
              <SignUpButton forceRedirectUrl={redirectUrl} mode="modal">
                <Button variant="outline">
                  <Icon name="UserPlus" className="mr-2" />
                  Cadastrar
                </Button>
              </SignUpButton>
            </>
          ) : (
            <CompanyCode companyCode={companyCodeParam || ""} />
          )}
        </div>
      </div>

      {/* Image to the right for desktop */}
      <div className="relative hidden h-full w-full md:block">
        <Image
          src="/welcome-desktop.png"
          alt="Faça login"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default WelcomePage;
