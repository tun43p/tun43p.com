import About from "./components/about";
import Header from "./components/header";

const navigationLinks: Link[] = [
  { name: "About", url: "#about" },
  { name: "Projects", url: "#" },
  { name: "Contact", url: "#" },
];

function App() {
  return (
    <div class="w-full h-screen bg-amber-50">
      <Header title="tun43p" links={navigationLinks} />
      <main class="p-4">
        <About />
      </main>
    </div>
  );
}

export default App;
