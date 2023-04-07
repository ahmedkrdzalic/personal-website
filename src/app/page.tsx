import Header from "@/components/HomePage/Header";
import Intro from "@/components/HomePage/Intro";
import Skills from "@/components/HomePage/Skills";

export const metadata = {
  title: "Ahmed Krdzalic",
  icons: {
    icon: "/AK-logo-bg.png",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center overflow-hidden px-5 bg-gradient-to-r from-slate-950 to-primary">
      <Header />
      <main className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        main
      </main>
    </div>
  );
}
