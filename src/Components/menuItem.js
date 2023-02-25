import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdWorkspacesOutline, MdOutlineAnalytics } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import {RxDashboard } from "react-icons/rx";
import { FaFacebook,FaInstagramSquare,FaTwitterSquare,} from "react-icons/fa";
import { AiFillLinkedin , AiFillYoutube} from "react-icons/ai";
import { FcGoogle} from "react-icons/fc";


export const menuItem=[
    {
      path:"/",
      title:"Dashboard",
      icon: <RxDashboard />,
      submenu: [
        {
          path:"/dashboard",
          name:"Dashboard",
          icon:<RxDashboard/>,
        }
      ]
    },

    {
      path:"/tickets",
      title:"Tickets",
      icon: <RxDashboard />,
      submenu: [
        {
          path:"/Tickets",
          name:"Tickets",
          icon:<RxDashboard/>,
        },
        {
          path:"/tickets?q=",
          name:"Tickets for You",
          icon:""
        }
        ]

    },

    {
      path:"/workspace",
      title:"Workspace",
      icon:<MdWorkspacesOutline/>,
      submenu: [
        {
          path: "/workspace/projects?q=",
          name: "Your Projects",
          icon: ""
        },
        {
          path: "/workspace/team?q=",
          name: "Your Team",
          icon: ""
        },
        {
          path: "/workspace/kanban",
          name: "Kanban",
          icon: ""
        },
        {
          path: "/workspace/calendar",
          name: "Calendar",
          icon: ""
        },
        ]
    },

    {
      path:"/projects",
      title:"Project",
      icon:<AiOutlineFundProjectionScreen/>,
      submenu: [
        {
          path: "/projects?q=all",
          name: "Projects",
          icon: ""
        },
        {
          path: "/projects/google",
          name: "Google",
          icon: <FcGoogle />,
        },
        {
          path: "/projects/facebook",
          name: "Facebook",
          icon: <FaFacebook />,
        },
        {
          path: "/projects/instagram",
          name: "Instagram",
          icon: <FaInstagramSquare />
        },
        {
          path: "/projects/twitter",
          name: "Twitter",
          icon: <FaTwitterSquare />
        },
        {
          path: "/projects/linkedin",
          name: "LinkedIn",
          icon: <AiFillLinkedin />
        },
        {
          path: "/projects/youtube",
          name: "Youtube",
          icon: <AiFillYoutube />
        }

      ]
    },
    
    {
      path:"/analytics",
      title:"Analytics",
      icon:<MdOutlineAnalytics/>,
      submenu: [
        {
          path: '/analytics',
          Title: 'Analytics',
          icon: ""
        },
        {
          path: "/analytics/reports?q=you",
          name: "Your Reports",
          icon: ""
        },
        
      ]
    },
    
    {
      path: '/admin/google',
      title: 'Google',
      icon: <FcGoogle />,
      submenu: [
        {
          path: "/admin/google/campaign",
          name: "Campaigns",
          icon: ""
        },
        {
          path: "/admin/google/ads",
          name: "Ads",
          icon: ""
        },
        {
          path: "/admin/google/adgroups",
          name: "Ad Groups",
          icon: ""
        },
      
      ]
    },
    {
      path: '/admin/facebook',
      title: 'Facebok',
      icon: <FaFacebook />,
      submenu: [
        {
          path: "/admin/facebook/posts",
          name: "Posts",
          icon: ""
        },
        {
          path: "/admin/facebook/ads",
          name: "Ads",
          icon: ""
        },
        
      ]
    },
    {
      path: '/admin/linkedin',
      title: "LinkedIn",
      icon: <AiFillLinkedin />,
      submenu: [
        {
          path: "/admin/linkedin/posts",
          name: "Posts",
          icon: ""
        },
        {
          path: "/admin/linkedin/ads",
          name: "Ads",
          icon: ""
        },
      ]
    },
    {
        path: '/admin/twitter',
        title: "Twitter",
        icon: <FaTwitterSquare />,
        submenu: [
          {
            path: "/admin/linkedin/posts",
            name: "Posts",
            icon: ""
          },
          {
            path: "/admin/linkedin/ads",
            name: "Ads",
            icon: ""
          },
        ]
      },
    {
      path:"/admin",
      title:"Admin",
      icon:<RiAdminLine/>
    },
  ]