import Header from "@/components/customs/header";
import SVGIcon from "@/components/customs/svg-icon";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      {/* <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_70%_0%_at_50%_0%,#000_20%,transparent_110%)]" /> */}
      <div className="relative py-20">
        <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_0px,transparent_0.5px),linear-gradient(to_bottom,#e2e8f0_0px,transparent_0.5px)] bg-[linear-gradient(to_right,#161616_0px,transparent_0.5px),linear-gradient(to_bottom,#161616_0px,transparent_0.5px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_0%,#000_40%,transparent_110%)] -z-10 h-full"></div>
        <div className="container">
          <div className="flex items-center justify-between gap-10">
            <div>
              <h1 className="text-4xl font-semibold leading-snug">I am Khoi Nguyen 🚀</h1>
              <h2 className="text-7xl font-semibold leading-snug">Frontend Developer</h2>
              <p className="text-3xl">with over 1+ years of experience in web3 application development</p>
              <Button className="mt-10 h-12 px-14 text-white">Get started</Button>
              <div className="mt-10">
                <h3>My tech stacks:</h3>
                <div className="flex items-center gap-4 mt-4 text-sm">
                  <div className="flex items-center cursor-pointer text-neutral-500 transition-all fill-neutral-500 hover:fill-foreground ease-in hover:text-foreground gap-1 hover:grayscale-0 grayscale">
                    <span>
                      <SVGIcon name="nextjs" className="md:size-10 size-6 text-neutral-500 flex-shrink-0 stroke-1" />
                    </span>
                    <span>NextJS</span>
                  </div>
                  <div className="flex items-center cursor-pointer text-neutral-500 transition-all ease-in hover:text-foreground gap-1 hover:grayscale-0 grayscale">
                    <span>
                      <SVGIcon name="react" className="md:size-10 size-6 text-neutral-500 flex-shrink-0 stroke-1" />
                    </span>
                    <span>ReactJS</span>
                  </div>
                  <div className="flex items-center cursor-pointer text-neutral-500 transition-all ease-in hover:text-foreground gap-1 hover:grayscale-0 grayscale">
                    <span>
                      <SVGIcon name="nodejs" className="md:size-10 size-6 text-neutral-500 flex-shrink-0 stroke-1" />
                    </span>
                    <span>NodeJS</span>
                  </div>
                  <div className="flex items-center cursor-pointer text-neutral-500 transition-all ease-in hover:text-foreground gap-1 hover:grayscale-0 grayscale">
                    <span>
                      <SVGIcon name="solidity" className="md:size-10 size-6 text-neutral-500 flex-shrink-0 stroke-1" />
                    </span>
                    <span>Solidity</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <CardContainer>
                <CardBody className="rounded-xl overflow-hidden size-[450px]">
                  <CardItem translateZ="70">
                    <Image src="/images/avatar.jpg" width={1000} height={1000} alt="avatar" className="object-cover size-[450px]" />
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
