import { BrowserRouter, Routes, Route } from "react-router-dom";

import JobScanner from "../pages/JobScanner/JobScanner";
import CourseChecker from "../pages/CourseChecker/CourseChecker";
import WebsiteChecker from "../pages/WebsiteChecker/WebsiteChecker";
import UserProfile from "../pages/UserProfile/UserProfile";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JobScanner />} />
        <Route path="/courses" element={<CourseChecker />} />
        <Route path="/website" element={<WebsiteChecker />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;