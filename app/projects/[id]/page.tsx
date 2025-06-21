"use client";

import BookCallSection from "@/components/book-call";
import FooterSection from "@/components/footer";
import Header from "@/components/header";
import ProjectDetail from "@/components/project-detail";
import { useTheme } from "@/hooks/use-theme";
import { useParams } from "next/navigation";

export default function ProjectPage() {
      const { isDarkMode, toggleTheme, isLoaded } = useTheme();
      if (!isLoaded) {
        return null;
      }
  const params = useParams();
  const projectId = Number.parseInt(params.id as string);

  // This would typically come from your API or database
  const projectsData = [
    {
      id: 1,
      title: "Headline",
      subtitle: "Artificial Intelligence",
      category: "Mobile App",
      heroImage: "/image-3.jpg",
      description:
        "Headline is an innovative AI-powered mobile application that enables trending news podcasts tailored to users' individual preferences. It features an advanced AI voice assistant that responds to user requests seamlessly. The UI/UX of the project was designed to be modern and intuitive, prioritizing ease of use and accessibility. ",
      visitUrl: "https://example.com",
      moreDescription:
        "Additionally, StudioQ developed a cohesive brand identity, including a distinctive logo, custom icons, and other visual elements that enhance the overall user experience.",
      images: [
        "/image-3-description1.png",
        "/image-3-description2.png",
        "/image-3-description3.png",
       
      ],
      alt: "Headline AI Mobile App",
    },
    {
      id: 2,
      title: "Creative Vision",
      subtitle: "Brand Identity",
      category: "Branding",
      heroImage: "/image-2.png",
      description:
        "Creative Vision is a comprehensive brand identity project that encompasses logo design, color palette development, and visual guidelines. The project focused on creating a cohesive brand experience across all touchpoints.",
      visitUrl: "https://example.com",
      images: ["/image-2.png", "/image-3.jpg", "/image-4.png", "/image-1.png"],
      alt: "Creative Vision Brand Identity",
    },
    {
      id: 3,
      title: "Digital Experience",
      subtitle: "Web Development",
      category: "Web Design",
      heroImage: "/image-4.png",
      description:
        "Digital Experience is a modern web application built with cutting-edge technologies. The project emphasizes user experience and performance optimization while maintaining a clean, intuitive interface.",
      visitUrl: "https://example.com",
      images: ["/image-4.png", "/image-1.png", "/image-3.jpg", "/image-2.png"],
      alt: "Digital Experience Web App",
    },
    {
      id: 4,
      title: "User Interface",
      subtitle: "Mobile Design",
      category: "UI/UX Design",
      heroImage: "/image-1.png",
      description:
        "User Interface project focuses on creating intuitive and accessible mobile interfaces. The design system emphasizes consistency, usability, and modern design principles.",
      visitUrl: "https://example.com",
      images: ["/image-1.png", "/image-2.png", "/image-3.jpg"],
      alt: "User Interface Mobile Design",
    },
  ];

  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  const nextProjects = projectsData
    .filter((p) => p.id !== projectId)
    .slice(0, 2)
    .map((p) => ({
      id: p.id,
      title: p.title,
      subtitle: p.subtitle,
      image: p.heroImage,
      alt: p.alt,
    }));

    return (
      <>
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <ProjectDetail project={project} nextProjects={nextProjects} />
        <BookCallSection />
        <FooterSection />
      </>
    ); 
}
