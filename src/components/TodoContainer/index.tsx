import { useContext, useEffect } from "react";
import { themeConfig } from "../../contexts/theme";
import { ThemeContext } from "../../contexts/ThemeContext";

interface TodoContainerProps {
  children: React.ReactNode;
}

export const TodoContainer = ({ children }: TodoContainerProps) => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const bgClass = themeConfig[theme].layout.backgroundColor;

    document.body.classList.remove(
      ...Object.values(themeConfig).map(t => t.layout.backgroundColor)
    );

    document.body.classList.add(bgClass);
  }, [theme]);

  return (
    <main className={`${themeConfig[theme].layout.backgroundColor} min-h-screen`}>
      <div className={`${themeConfig[theme].layout.heroClass}`}>
        <div className="max-w-175 m-auto p-8">{children}</div>
      </div>
    </main>
  );
};
