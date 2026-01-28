import { cookies, headers } from "next/headers";

export default async function RunTimeData({
  searchParams,
}: {
  searchParams: string;
}) {
  const cookieStore = await cookies();
  const headerStore = await headers();

  const search = await searchParams;

  return <div>Not in a static shell</div>;
}
