//ICONS IMPORT
import {RxDashboard } from "react-icons/rx";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdWorkspacesOutline, MdOutlineAnalytics } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";

import { FaFacebook,FaInstagramSquare,FaTwitterSquare,} from "react-icons/fa";
import { AiFillLinkedin , AiFillYoutube} from "react-icons/ai";
import { FcGoogle} from "react-icons/fc";

export const menuItem=[
    {
      path:"/",
      name:"Dashboard",
      icon:<RxDashboard/>,
      submenu: [ 
        {
            path:"/",
            name:"Default",
            icons:"",
        },
        {
            path:"",
            name:"",
            icons:"",
        },
    ]
    },
    {
        path:"/tickets",
        name:"Tickets",
        icon:<AiOutlineFundProjectionScreen/>,
        submenu: [ 
          {
              path:"",
              name:"",
              icons:"",
          },
          {
              path:"",
              name:"",
              icons:"",
          },
      ]
      },
    {
      path:"/project",
      name:"Project",
      icon:<AiOutlineFundProjectionScreen/>,
      submenu: [ 
        {
            path:"",
            name:"",
            icons:"",
        },
        {
            path:"",
            name:"",
            icons:"",
        },
    ]
    },
    {
      path:"/workspace",
      name:"Workspace",
      icon:<MdWorkspacesOutline/>,
      submenu: [ 
        {
            path:"",
            name:"",
            icons:"",
        },
        {
            path:"",
            name:"",
            icons:"",
        },
    ]
    },
    {
      path:"/analytics",
      name:"Analytics",
      icon:<MdOutlineAnalytics/>,
      submenu: [ 
        {
            path:"",
            name:"",
            icons:"",
        },
        {
            path:"",
            name:"",
            icons:"",
        },
    ]
    },
    {
        path:"/admin",
        name:"Admin",
        icon:<RiAdminLine/>,
        submenu: [ 
          {
              path:"",
              name:"",
              icons:"",
          },
          {
              path:"",
              name:"",
              icons:"",
          },
      ]
      },
      {
        path:"/admin",
        name:"Admin",
        icon:<RiAdminLine/>,
        submenu: [ 
          {
              path:"",
              name:"",
              icons:"",
          },
          {
              path:"",
              name:"",
              icons:"",
          },
      ]
      },
      {
        path:"/admin",
        name:"Admin",
        icon:<RiAdminLine/>,
        submenu: [ 
          {
              path:"",
              name:"",
              icons:"",
          },
          {
              path:"",
              name:"",
              icons:"",
          },
      ]
      },
      {
        path:"/admin",
        name:"Admin",
        icon:<RiAdminLine/>,
        submenu: [ 
          {
              path:"",
              name:"",
              icons:"",
          },
          {
              path:"",
              name:"",
              icons:"",
          },
      ]
      },

    {
      path:"/admin",
      name:"Admin",
      icon:<RiAdminLine/>,
      submenu: [ 
        {
            path:"",
            name:"",
            icons:"",
        },
        {
            path:"",
            name:"",
            icons:"",
        },
    ]
    },
  ]