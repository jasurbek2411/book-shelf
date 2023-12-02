import AddBook from "@/components/shared/add-book";
import Alert from "@/components/shared/alert";
import Books from "@/components/shared/books";
import Header from "@/components/shared/header";

export default function Home() {
  return (
    <main className="container mx-auto min-h-screen">
      <Header />
      <AddBook />
      <Books />
      <Alert type="error" />
    </main>
  );
}
