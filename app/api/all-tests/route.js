import { Alltests } from "@/app/utils/questions";

export function GET() {
  return Response.json({ tests: Alltests });
}

