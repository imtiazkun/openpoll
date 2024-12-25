import prisma from "@/lib/db";

export default async function Home() {
  const campaigns = await prisma.campaign.findMany();

  return (
    <div className="container mx-auto px-5">
      <ul>
        {campaigns.map((campaign) => (
          <li key={campaign.id}>{campaign.title}</li>
        ))}
      </ul>
    </div>
  );
}
