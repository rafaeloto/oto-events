import { ThemeProvider } from "next-themes";
import { CustomClerkProvider } from "../CustomClerkProvider";
import { ProgressBar } from "../ProgressBar";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <CustomClerkProvider>
        <ProgressBar>
          {children}
        </ProgressBar>
      </CustomClerkProvider>
    </ThemeProvider>
  );
};

export default Providers;
