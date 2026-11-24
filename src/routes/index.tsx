import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Página de Teste" },
      { name: "description", content: "Uma página de teste simples." },
      { property: "og:title", content: "Página de Teste" },
      { property: "og:description", content: "Uma página de teste simples." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-lg text-center">
        <h1 className="text-5xl font-bold tracking-tight text-foreground">Página de Teste</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Se você está vendo isto, a página foi criada e salva com sucesso.
        </p>
      </div>
    </main>
  );
}
