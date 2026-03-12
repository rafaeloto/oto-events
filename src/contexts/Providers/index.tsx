import { CustomClerkProvider } from "../CustomClerkProvider";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <CustomClerkProvider>
        {children}
      </CustomClerkProvider>
    </ThemeProvider>
  );
};

export default Providers;
