import HeaderOnly from "~/components/Layouts/HeaderOnly/Header/HeaderOnly";
import Home from "~/pages/Home/Home";
import Following from "~/pages/Following/Following";
import Upload from "~/pages/Upload/Upload";
import Search from "~/pages/Search/Search";

// For public users (non-login)
const publicRouter = [
  // If layout is null ,it'll not return DefaultLayout
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/upload", component: Upload, layout: HeaderOnly },
  { path: "/search", component: Search, layout: null },
];

// For login users (logined)
const privateRouter = [];

export { publicRouter, privateRouter };
