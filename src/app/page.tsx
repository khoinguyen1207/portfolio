import Header from "@/components/customs/header";

export default function Home() {
  return (
    <div className="min-h-screen ">
      <Header />
      <div className="relative ">
        <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_0px,transparent_0.5px),linear-gradient(to_bottom,#e2e8f0_0px,transparent_0.5px)] bg-[linear-gradient(to_right,#161616_0px,transparent_0.5px),linear-gradient(to_bottom,#161616_0px,transparent_0.5px)] bg-[size:2.5rem_2.5rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_0%,#000_20%,transparent_110%)] -z-10 h-[100vh]"></div>
      </div>
    </div>
  );
}
