import ThemeToggler from "./components/global/themeToggler";

export default function Home() {
  return (
    <div className=" bg-bgPrimary grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name: inter]">
      <ThemeToggler />
    </div>
  );
}
