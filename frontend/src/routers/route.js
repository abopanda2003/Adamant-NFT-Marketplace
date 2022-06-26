import React from "react";
import { Route, Switch, useRoutes } from "react-router-dom";

// importing all the themes
import ThemeOne from "../themes/theme-one";
import SellAssets from "../components/SellAssets/sell-asset-page";
import MyAssets from "../components/MyAssets/my-assets";
import ExploreOne from "../themes/explore-one";
import ExploreTwo from "../themes/explore-two";
import ExploreThree from "../themes/explore-three";
import ExploreFour from "../themes/explore-four";
import Auctions from "../themes/auctions";
import ItemDetails from "../themes/item-details";
import Activity from "../themes/activity";
import Blog from "../themes/blog";
import BlogSingle from "../themes/blog-single";
import HelpCenter from "../themes/help-center";
import Authors from "../themes/authors";
import Author from "../themes/author";
import WalletConnect from "../themes/wallet-connect";
import CreateNft from "../themes/create-nft";
import CreateCollection from "../themes/create-collection";
import Login from "../themes/login";
import Signup from "../themes/signup";
import AdminCmp from "../themes/admin-page";

export default function Router() {
    return (
      useRoutes([
        {
          path:'explore',
          element:(<ExploreThree />)
        },
        {
          path:'sell-assets',
          element:(<SellAssets />)
        },
        {
          path:'my-assets',
          element:(<MyAssets />)
        },
        {
          path:'create-nft',
          element:(<CreateNft />)
        },
        {
          path:'create-collection',
          element:(<CreateCollection />)
        },
        {
          path:'admin',
          element:(<AdminCmp />)
        },
        {
          path:'',
          element:(<ThemeOne />)
        }
      ])
    );
}
// export default MyRouts;