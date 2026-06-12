import NavBar from "./NavBar";
import Bio from "./Bio";
import About from "./About";
import Skills from "./Skills";
function App() {
  return (
    <div class="flex flex-col items-center">
      <NavBar />
      <Bio />
      <About />
      <Skills />
    </div>
  );
}

export default App;
