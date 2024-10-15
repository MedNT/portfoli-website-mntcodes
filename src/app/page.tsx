"use client";

import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import Modal from "@/components/modal";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CoolMode } from "@/components/ui/cool-mode";
import SparklesText from "@/components/ui/sparkless-text";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RainbowButton } from "@/components/ui/rainbow-button";
import SubstackEmailCollect from "@/components/substackEmailCollect";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	return (
		<main className="flex flex-col min-h-[100dvh] space-y-10">
			{/* Part 1 of the portfolio */}
			{/* hello section */}
			<section id="hero">
				<div className="mx-auto w-full max-w-2xl space-y-8 mt-5">
					<div className="gap-2 flex justify-between">
						<CoolMode>
							<div className="flex-col flex flex-1 space-y-1.5">
								<BlurFadeText
									delay={BLUR_FADE_DELAY}
									className="text-3xl font-bold tracking-tighter sm:text-5xl"
									yOffset={8}
									text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
								/>
								<BlurFadeText
									className="max-w-[600px] md:text-xl"
									delay={BLUR_FADE_DELAY}
									text={DATA.description}
								/>
							</div>
						</CoolMode>
						<BlurFade delay={BLUR_FADE_DELAY}>
							<Avatar className="size-28 border">
								<AvatarImage
									alt={DATA.name}
									src={DATA.avatarUrl}
								/>
								<AvatarFallback>{DATA.initials}</AvatarFallback>
							</Avatar>
						</BlurFade>
					</div>
				</div>
			</section>
			{/* about section */}
			<section id="about">
				<BlurFade delay={BLUR_FADE_DELAY * 3}>
					<h2 className="text-xl font-bold">About</h2>
				</BlurFade>
				<BlurFade delay={BLUR_FADE_DELAY * 4}>
					<Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
						{DATA.summary}
					</Markdown>
				</BlurFade>
			</section>
			{/* work section */}
			<section id="work">
				<div className="flex min-h-0 flex-col gap-y-3">
					<BlurFade delay={BLUR_FADE_DELAY * 5}>
						<h2 className="text-xl font-bold">Work Experience</h2>
					</BlurFade>
					{DATA.work.map((work, id) => (
						<BlurFade
							key={work.company}
							delay={BLUR_FADE_DELAY * 6 + id * 0.05}
						>
							<ResumeCard
								key={work.company}
								logoUrl={work.logoUrl}
								altText={work.company}
								title={work.company}
								subtitle={work.title}
								href={work.href}
								badges={work.badges}
								period={`${work.start} - ${
									work.end ?? "Present"
								}`}
								description={work.description}
							/>
						</BlurFade>
					))}
				</div>
			</section>
			{/* education section */}
			<section id="education">
				<div className="flex min-h-0 flex-col gap-y-3">
					<BlurFade delay={BLUR_FADE_DELAY * 7}>
						<h2 className="text-xl font-bold">Education</h2>
					</BlurFade>
					{DATA.education.map((education, id) => (
						<BlurFade
							key={education.school}
							delay={BLUR_FADE_DELAY * 8 + id * 0.05}
						>
							<ResumeCard
								key={education.school}
								href={education.href}
								logoUrl={education.logoUrl}
								altText={education.school}
								title={education.school}
								subtitle={education.degree}
								period={`${education.start} - ${education.end}`}
							/>
						</BlurFade>
					))}
				</div>
			</section>
			{/* skillz section */}
			<section id="skills">
				<div className="flex min-h-0 flex-col gap-y-3">
					<BlurFade delay={BLUR_FADE_DELAY * 9}>
						<h2 className="text-xl font-bold">Skills</h2>
					</BlurFade>
					<div className="flex flex-wrap gap-1">
						{DATA.skills.map((skill, id) => (
							<BlurFade
								key={skill}
								delay={BLUR_FADE_DELAY * 10 + id * 0.05}
							>
								<Badge key={skill}>{skill}</Badge>
							</BlurFade>
						))}
						{/* And more chip */}
						<BlurFade delay={BLUR_FADE_DELAY * 10 + 10 * 0.05}>
							<Badge className="bg-white text-black border-black">
								<a
									href="https://github.com/MedNT#skills"
									target="_blank"
								>
									and more...
								</a>
							</Badge>
						</BlurFade>
					</div>
				</div>
			</section>

			{/* Part 2 of the portfolio */}
			{/* projects section */}
			<section id="projects">
				<div className="space-y-12 w-full py-12">
					<BlurFade delay={BLUR_FADE_DELAY * 11}>
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
									My Projects
								</div>
								<SparklesText
									className="text-3xl font-bold tracking-tighter sm:text-5xl"
									text="Check out my latest work"
								/>
								<p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									I&apos;ve worked on a variety of projects,
									from simple websites to complex web
									applications. Here are a few of my
									favorites.
								</p>
							</div>
						</div>
					</BlurFade>
					<div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
						{DATA.projects.map((project, id) => (
							<BlurFade
								key={project.title}
								delay={BLUR_FADE_DELAY * 12 + id * 0.05}
							>
								<ProjectCard
									href={project.href}
									key={project.title}
									title={project.title}
									description={project.description}
									dates={project.dates}
									tags={project.technologies}
									image={project.image}
									video={project.video}
									links={project.links}
									preventOpening={
										project.type === "private"
											? openModal
											: undefined
									}
								/>
							</BlurFade>
						))}

						<a
							target="_blank"
							href="mailto:naciritaoufikmed@gmail.com"
							className="col-span-2 sm:col-span-2 flex flex-col justify-center text-center my-7"
						>
							<RainbowButton>
								Contact me for more exciting projects !
							</RainbowButton>
						</a>
					</div>
				</div>
			</section>

			{/* hackatons section */}
			<section id="articles">
				<div className="space-y-12 w-full py-12">
					<BlurFade delay={BLUR_FADE_DELAY * 13}>
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
									My Publications
								</div>
								<SparklesText
									className="text-3xl font-bold tracking-tighter sm:text-5xl"
									text="I love writing things..."
								/>
								<p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									I enjoy breaking down complex software
									engineering topics into easy-to-understand
									content. Through simple language and
									practical examples, I make concepts like
									algorithms, data structures, and design
									patterns accessible to developers of all
									skill levels, helping them apply these ideas
									with confidence.
								</p>
							</div>
						</div>
					</BlurFade>
					<div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
						{DATA.articles.map((project, id) => (
							<BlurFade
								key={project.title}
								delay={BLUR_FADE_DELAY * 12 + id * 0.05}
							>
								<ProjectCard
									href={project.href}
									key={project.title}
									title={project.title}
									description={project.description}
									dates={project.dates}
									tags={project.technologies}
									image={project.image}
									video={project.video}
									links={project.links}
								/>
							</BlurFade>
						))}
						<a
							target="_blank"
							href="https://mntcode.substack.com/"
							className="col-span-2 sm:col-span-2 flex flex-col justify-center text-center my-7"
						>
							<RainbowButton>
								Read more here 🖱
							</RainbowButton>
						</a>
					</div>
				</div>
				<center>
					<SubstackEmailCollect />
				</center>
				
			</section>
			{/* contact section */}
			<section id="contact">
				<div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
					<BlurFade delay={BLUR_FADE_DELAY * 16}>
						<div className="space-y-3">
							<div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
								Contact
							</div>
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
								Let’s Chat...
							</h2>
							<p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Feel free to reach out! Send me a direct message
								on{" "}
								<a
									target="_blank"
									href="https://www.linkedin.com/in/mednt/"
									className="text-blue-500 hover:underline"
								>
									LinkedIn
								</a>{" "}
								or
								<a
									target="_blank"
									href="mailto:naciritaoufikmed@gmail.com"
									className="text-blue-500 hover:underline"
								>
									{" "}
									Email{" "}
								</a>
								or even
								<a
									target="_blank"
									href="https://wa.me/212637403791"
									className="text-blue-500 hover:underline"
								>
									{" "}
									Whatsapp{" "}
								</a>
								with any questions, and I’ll get back to you as
								soon as I can.
							</p>
						</div>
					</BlurFade>
				</div>
			</section>
			<Modal isModalOpen={isModalOpen} closeModal={closeModal} />
		</main>
	);
}
