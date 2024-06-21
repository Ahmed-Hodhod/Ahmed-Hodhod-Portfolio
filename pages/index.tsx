import type { NextPage } from "next";
import { Anchor, Button, Hr } from "../components/CustomHtml";
import ProjectCard from "../components/ProjectCard";
import { ProjectCardProps } from "../components/ProjectCard";
import { useContext, useEffect, useState } from "react";
import { ProjectListContext } from "../context";
import { fetchProjectsStar } from "../helpers/helpers";
import { useRouter } from "next/router";

import uopxLogo from "../images/uopx-phoenixbird-red.png";
import hackerrankLogo from "../images/HackerRank_logo.png";
import hmsLogo from "../images/100ms_logo.png";
import webmateLogo from "../images/webmate_logo.png";
import EmailBox from "../components/EmailBox";
import ReactGA from "react-ga4";

const TRACKING_ID = process.env.NEXT_PUBLIC_TRACKING_ID;
if (TRACKING_ID) ReactGA.initialize(TRACKING_ID);

const Home: NextPage = () => {
  const { projectList, setProjectList } = useContext(ProjectListContext);
  const [top6Projects, setTop6Projects] = useState<ProjectCardProps[]>([]);
  const clientRouter = useRouter();

  useEffect(() => {
    setTop6Projects(
      projectList.sort((a, b) => b.priority - a.priority).slice(0, 6)
    );
  }, [projectList]);

  useEffect(() => {
    // google analytics
    ReactGA.send({ hitType: "pageview", page: "/", title: "Home" });
    fetchProjectsStar().then((updatedProjectsListWithStars) => {
      setProjectList([...updatedProjectsListWithStars]);
    });
  }, []);

  return (
    <div className="relative my-10 sm:my-20">
      <div className="mt-10 sm:mt-20 flex">
        <div className="">
          <div className="text-4xl md:text-5xl font-medium">
            <div className="">Hey, I'm Ahmed Abdelsalam</div>
            <div className=" mt-4">
              <span className="hidden sm:inline-block mr-4">I'm a </span>
              <span className=" text-v9-yellow whitespace-nowrap">
               Cloud-DevOps Engineer
              </span>
              .
            </div>
          </div>


          <div className=" text-v9-light-grey font-light space-y-1 mt-8">
            <p className="">
            As a Cloud DevOps Engineer based in {" "}
              <Anchor
                href="https://www.google.com/maps/place/Cairo,+Cairo+Governorate/@30.0594885,31.2584644,13z"
                target={"_blank"}
                onClick={() => {
                  ReactGA.event({
                    category: "Link.Click",
                    action: "Tempe Location",
                  });
                }}
              >
                Cairo, Egypt, 
              </Anchor>
              
              {" "}
              {/* <Anchor
                href="github.com/ahmed-"
                onClick={() => {
                  ReactGA.event({
                    category: "Link.Click",
                    action: "Exceptional Link",
                  });
                }}
                target={"_blank"}
              >
                exceptional softwares
              </Anchor> */}
             I specialize in automation and cloud infrastructure using tools like Kubernetes, AWS, and Terraform. With a Computer Engineering degree from Cairo University and extensive hands-on experience, I excel in optimizing cloud solutions and automating deployments.
            </p>
          </div>
        </div>
     
      </div>

      {/* Experience Section */}
      <div className=" mt-20 sm:mt-32">
        <div className="flex justify-between mb-6 items-center">
          <div className="text-4xl sm:text-5xl font-medium">Experience</div>
          <Button
            onClick={() => {
              clientRouter.push("/resume");
            }}
          >
            View Resume
          </Button>
        </div>
        <div className="text-v9-light-grey font-light mt-2 mb-4 ">
        Working with various companies has exposed me to diverse DevOps methodologies, 
        allowing me to approach challenges from multiple perspectives. I believe that the optimal solution is
         not always the most obvious one; effective customization, based on a deep understanding of DevOps principles,
         is essential. This adaptability and knowledge enable me to deliver innovative solutions that meet complex operational needs.

        </div>



        <Hr width="100%" />
        <div className="flex justify-between flex-col lg:flex-row">
          <div className=" text-4xl xl:text-5xl mb-6 lg:mb-0 flex items-center justify-center Arialic_Hollow text-v9-light-grey font-light">
            April '24 - Present
          </div>
          <div className="flex justify-center">
            <img
              src={uopxLogo.src}
              alt="University of Phoenix Logo"
              className="h-12 mr-4 mt-1 hidden sm:block"
            ></img>
            <div className="flex flex-col justify-between sm:w-[500px]">
              <div className=" text-v9-light-grey font-light">
                Full Time - Remote
              </div>
              <div className="text-lg sm:text-xl">
                DevOps Engineer at{" "}
                <Anchor
                  onClick={() => {
                    ReactGA.event({
                      category: "Link.Click",
                      action: "UOPX Link",
                    });
                  }}
                  href="https://www.linkedin.com/company/abi-technology/"
                >
                  ABI Technology
                </Anchor>
              </div>
              <div className="text-light text-v9-light-grey mt-2">
                {/* I develop robust, responsive components with a focus on
                accessibility, enhancing user experiences alongside Adobe AEM,
                Adobe ADA, and Adobe Target. <br></br>
                Worked on building new microservice with Spring Boot, Java, Elasticsearch, Docker, Terraform and AWS. */}
              </div>
            </div>
          </div>
        </div>





        <Hr width="100%" />
        <div className="flex justify-between flex-col lg:flex-row">
          <div className=" text-4xl xl:text-5xl mb-6 lg:mb-0 flex items-center justify-center Arialic_Hollow text-v9-light-grey font-light">
            Jun '23 - Sept. '23
          </div>
          <div className="flex justify-center">
            <img
              src={uopxLogo.src}
              alt="University of Phoenix Logo"
              className="h-12 mr-4 mt-1 hidden sm:block"
            ></img>
            <div className="flex flex-col justify-between sm:w-[500px]">
              <div className=" text-v9-light-grey font-light">
                Full Time - Zamalek, Cairo
              </div>
              <div className="text-lg sm:text-xl">
                DevOps Engineering Intern at{" "}
                <Anchor
                  onClick={() => {
                    ReactGA.event({
                      category: "Link.Click",
                      action: "UOPX Link",
                    });
                  }}
                  href="https://www.q84sale.com/en/"
                >
                  4Sale International Co.
                </Anchor>
              </div>
              <div className="text-light text-v9-light-grey mt-2">
                {/* I develop robust, responsive components with a focus on
                accessibility, enhancing user experiences alongside Adobe AEM,
                Adobe ADA, and Adobe Target. <br></br>
                Worked on building new microservice with Spring Boot, Java, Elasticsearch, Docker, Terraform and AWS. */}
              </div>
            </div>
          </div>
        </div>

</div>

      {/* Projects Section */}
      <div className="mt-20 sm:mt-32">
        <div className="flex justify-between mb-10 items-center">
          <div className="text-4xl sm:text-5xl font-medium">Projects</div>
          <Button
            onClick={() => {
              clientRouter.push("/projects");
            }}
          >
            View all
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-auto auto-rows-fr gap-x-5 gap-y-5">
          {top6Projects.map((project: ProjectCardProps, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>

      {/* Contact email section */}
      <div className="mt-20 sm:mt-32">
        <div className="text-4xl sm:text-5xl font-medium">Contact Me</div>
        <div className="font-light text-v9-light-grey mt-4 mb-10">
          I'm always open to new opportunities and connections. Feel free to
          reach out to me at{" "}
          <Anchor
            onClick={() => {
              ReactGA.event({
                category: "Link.Click",
                action: "MailTo Link",
              });
            }}
            href="mailto:ahmed.abdelsalam.sa@gmail.com"
          >
            ahmed.abdelsalam.sa@gmail.com
          </Anchor>
          !
        </div>
        <EmailBox />
      </div>
    </div>
  );
};

export default Home;
