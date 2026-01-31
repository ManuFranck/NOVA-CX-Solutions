
export function Agents() {
  const agents = [
    { name: "Aïssatou", role: "Customer Support", img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80" },
    { name: "Mamadou", role: "CX Agent", img: "https://images.unsplash.com/photo-1603415526960-f7e0328f1b8a?auto=format&fit=crop&w=400&q=80" },
    { name: "Sarah", role: "Chatbot Supervisor", img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=400&q=80" }
  ];
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {agents.map(a => (
        <div key={a.name} className="rounded-2xl bg-white p-5 shadow-sm text-center">
          <img src={a.img} className="mx-auto h-32 w-32 rounded-full object-cover" />
          <p className="mt-4 font-semibold">{a.name}</p>
          <p className="text-sm text-slate-500">{a.role}</p>
        </div>
      ))}
    </div>
  );
}
