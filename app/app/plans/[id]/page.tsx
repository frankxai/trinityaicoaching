import { PlanDetailClient } from "./PlanDetailClient";

export const metadata = {
  title: "Plan Detail | Trinity Command"
};

export default function PlanDetailPage({ params }: { params: { id: string } }) {
  return <PlanDetailClient id={params.id} />;
}
