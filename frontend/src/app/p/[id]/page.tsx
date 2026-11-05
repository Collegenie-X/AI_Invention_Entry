import { ProjectChat } from "@/components/ProjectChat";

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <ProjectChat id={id} />;
}
