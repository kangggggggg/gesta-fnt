import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import IPhone11ProOnboarding from "./pages/IPhone11ProOnboarding";
import IPhone11ProStory from "./pages/IPhone11ProStory";
import IPhone11ProStory1 from "./pages/IPhone11ProStory1";
import IPhone11ProStory2 from "./pages/IPhone11ProStory2";
import IPhone11ProStory3 from "./pages/IPhone11ProStory3";
import IPhone11ProStory4 from "./pages/IPhone11ProStory4";
import IPhone11ProStory5 from "./pages/IPhone11ProStory5";
import IPhone11ProStory6 from "./pages/IPhone11ProStory6";
import IPhone11ProStory7 from "./pages/IPhone11ProStory7";
import IPhone11ProStory8 from "./pages/IPhone11ProStory8";
import IPhone11ProStoryfinal from "./pages/IPhone11ProStoryfinal";
import IPhone11ProStory9 from "./pages/IPhone11ProStory9";
import IPhone11ProMaking from "./pages/IPhone11ProMaking";
import IPhone11ProQuestion from "./pages/IPhone11ProQuestion";
import IPhone11ProQuestion1 from "./pages/IPhone11ProQuestion1";
import IPhone11ProQuestion2 from "./pages/IPhone11ProQuestion2";
import IPhone11ProQuestion11 from "./pages/IPhone11ProQuestion11";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-11-pro-story4":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-11-pro-story3":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-11-pro-story2":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-11-pro-story5":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-11-pro-story6":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-11-pro-story7":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-11-pro-story8":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-11-pro-story10":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-11-pro-story9":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-11-pro-storyfinal":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-11-pro-story1":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-11-pro-making":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-11-pro-question4":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-11-pro-question3":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-11-pro-question2":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-11-pro-question1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<IPhone11ProOnboarding />} />
      <Route path="/iphone-11-pro-story4" element={<IPhone11ProStory />} />
      <Route path="/iphone-11-pro-story3" element={<IPhone11ProStory1 />} />
      <Route path="/iphone-11-pro-story2" element={<IPhone11ProStory2 />} />
      <Route path="/iphone-11-pro-story5" element={<IPhone11ProStory3 />} />
      <Route path="/iphone-11-pro-story6" element={<IPhone11ProStory4 />} />
      <Route path="/iphone-11-pro-story7" element={<IPhone11ProStory5 />} />
      <Route path="/iphone-11-pro-story8" element={<IPhone11ProStory6 />} />
      <Route path="/iphone-11-pro-story10" element={<IPhone11ProStory7 />} />
      <Route path="/iphone-11-pro-story9" element={<IPhone11ProStory8 />} />
      <Route
        path="/iphone-11-pro-storyfinal"
        element={<IPhone11ProStoryfinal />}
      />
      <Route path="/iphone-11-pro-story1" element={<IPhone11ProStory9 />} />
      <Route path="/iphone-11-pro-making" element={<IPhone11ProMaking />} />
      <Route
        path="/iphone-11-pro-question4"
        element={<IPhone11ProQuestion />}
      />
      <Route
        path="/iphone-11-pro-question3"
        element={<IPhone11ProQuestion1 />}
      />
      <Route
        path="/iphone-11-pro-question2"
        element={<IPhone11ProQuestion2 />}
      />
      <Route
        path="/iphone-11-pro-question1"
        element={<IPhone11ProQuestion11 />}
      />
    </Routes>
  );
}
export default App;
