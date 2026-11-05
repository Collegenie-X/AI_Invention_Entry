import { ProjectReport } from "@/components/ProjectReport";

export default async function ReportPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <ProjectReport id={id} />;
}
