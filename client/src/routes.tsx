import {
  BalanceInfor,
  CreatePost,
  Deposit,
  General,
  ManagePost,
  ManagePostDraft,
  Personals,
  UserLayout,
} from "@/pages/users";
import App from "./App";
import { pathnames } from "./lib/pathname";
import {
  HomePage,
  News,
  PublicLayout,
  RentProperty,
  SoldProperty,
} from "./pages/publics";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: pathnames.publics.layout,
        element: <PublicLayout />,
        children: [
          {
            path: pathnames.publics.homepage,
            element: <HomePage />,
          },
          {
            path: pathnames.publics.news,
            element: <News />,
          },
          {
            path: pathnames.publics.rentProperty,
            element: <RentProperty />,
          },
          {
            path: pathnames.publics.soldProperty,
            element: <SoldProperty />,
          },
        ],
      },
      {
        path: pathnames.users.layout,
        element: <UserLayout />,
        children: [
          {
            path: pathnames.users.general,
            element: <General />,
          },
          {
            path: pathnames.users.createPost,
            element: <CreatePost />,
          },
          {
            path: pathnames.users.managePost,
            element: <ManagePost />,
          },
          {
            path: pathnames.users.manageDraft,
            element: <ManagePostDraft />,
          },
          {
            path: pathnames.users.personal,
            element: <Personals />,
          },
          {
            path: pathnames.users.manageBalance,
            element: <BalanceInfor />,
          },
          {
            path: pathnames.users.deposit,
            element: <Deposit />,
          },
        ],
      },
    ],
  },
];

export default routes;
