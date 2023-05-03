import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdWorkspacesOutline, MdOutlineAnalytics } from "react-icons/md";
import {BsKanbanFill} from 'react-icons/bs'
import {TbReportSearch} from 'react-icons/tb'
import {GiPostStamp} from 'react-icons/gi'
import { RiAdminLine,RiTeamLine } from "react-icons/ri";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import {RxDashboard } from "react-icons/rx";
import { FaFacebook,FaInstagramSquare,FaTwitterSquare,FaCalendarAlt} from "react-icons/fa";
import { AiFillLinkedin , AiFillYoutube} from "react-icons/ai";
import { FcGoogle} from "react-icons/fc";
import CampaignIcon from '@mui/icons-material/Campaign';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Google from "../Pages/Google/google";
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import DeveloperBoardOutlinedIcon from '@mui/icons-material/DeveloperBoardOutlined';
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import GroupAddTwoToneIcon from '@mui/icons-material/GroupAddTwoTone';
import FB from "../../src/assets/FB.jpg";
import AdsTable from "../Pages/Google/Ads";
export const menuItem=[
    {
      path:"/",
      title:"Dashboard",
      icon: <RxDashboard />,
      submenu: [
        {
          title:"Dashboard",
          path:"/dashboard",
          name:"Dashboard",
          icon:<RxDashboard/>,
        }
      ]
    },

    {
      title:'Tictes',
      path:"/tickets",
      title:"Tickets",
      icon: <SummarizeOutlinedIcon />,
      submenu: [
        {
          path:"/tickets",
          name:"Tickets",
          icon:<SummarizeOutlinedIcon />,
        },
        {
          path:"/tickets",
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
          icon: <AccountTreeTwoToneIcon/>
        },
        {
          path: "/workspace/team?q=",
          name: "Your Team",
          icon: <RiTeamLine/>
        },
        {
          path: "/workspace/kanban",
          name: "Kanban",
          icon: <BsKanbanFill/>
        },
        {
          path: "/workspace/calendar",
          name: "Calendar",
          icon:<FaCalendarAlt/>
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
          icon: <DeveloperBoardOutlinedIcon />,
        },
        {
          path: "/projects/google",
          name: "Google",
          icon: <FcGoogle className="submenu-google"/>,
        },
        {
          path: "/projects/facebook",
          name: "Facebook",
          icon: <FaFacebook className='submenu-facebook'/>,
        },
        {
          path: "/projects/instagram",
          name: "Instagram",
          icon: <FaInstagramSquare className='submenu-instagram' />
        },
        {
          path: "/projects/twitter",
          name: "Twitter",
          icon: <FaTwitterSquare className='submenu-twitter'/>
        },
        {
          path: "/projects/linkedin",
          name: "LinkedIn",
          icon: <AiFillLinkedin className='submenu-linkedin'/>
        },
        {
          path: "/projects/youtube",
          name: "Youtube",
          icon: <AiFillYoutube className='submenu-youtube'/>
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
          icon: <TbReportSearch/>
        },
        
      ]
    },
    
    {
      path: '/google',
      title: 'Google',
      icon: <FcGoogle />,
      submenu: [
        {
          path: "/google/ads",
          name: "Ads",
          icon: <NewspaperIcon />,
          options: [
            {
              path: "/google/ads/createad",
              name: "Create Ad",
              icon: "",
              comp: <AdsTable />
            },
            {
              path: "/google/ads/mutatead",
              name: "Mutate Ad",
              icon: "",
              component: ""
            }
          ]
        },
        
        {
          path: "/google/adgroups",
          name: "Ad Groups",
          icon: <GroupAddTwoToneIcon/>,
          options: [
            {
              path: "/google/adgroup/createadgroup",
              name: "Create AdGroup",
              icon: ""
            },
            {
              path: "/google/adgroup/mutateadgroup",
              name: "Mutate AdGroup",
              icon: ""
            }
          ]
        },

        {
          path: "/google/campaign",
          name: "Campaigns",
          icon: <CampaignIcon />,
          options: [
            {
              path: "/google/campaigns/createcampaign",
              name: "Create Campaign",
              icon: ""
            },
            {
              path: "/google/campaigns/mutatecampaign",
              name: "Mutate Campaign",
              icon: ""
            }
          ]
        },

        
        {
          path: "/google/assets",
          name: "Assets",
          icon: <CampaignIcon />,
          options: [
            {
              path: "/google/assets/createasset",
              name: "Create New Asset",
              icon: ""
            },
            {
              path: "/google/assets/associateasset",
              name: "Associate Asset",
              icon: ""
            },
            {
              path: "/google/assets/mutateasset",
              name: "Mutate Asset Association",
              icon: ""
            },
            {
              path: "/google/assets/locationsync",
              name: "Location Sync",
              icon: ""
            },
            {
              path: "/google/assets/assetsetsrv",
              name: "Customer Asset Set Service",
              icon: ""
            },
          ]
        },
        
        {
          path: "/google/billing",
          name: "Billings & Budgets",
          icon: <CampaignIcon />
        },
        
        {
          path: "/google/campaign",
          name: "Campaigns",
          icon: <CampaignIcon />
        },
        
      
      ]
    },
    {
      path: '/facebook',
      title: 'Facebok',
      icon: <FaFacebook className='submenu-facebook' />,
      submenu: [
        {
          path: "/facebook/posts",
          name: "Posts",
          icon: <GiPostStamp/>
        },
        {
          path: "/facebook/ads",
          name: "Ads",
          icon: <NewspaperIcon/>
        },
        
      ]
    },
    {
      path: '/linkedin',
      title: "LinkedIn",
      icon: <AiFillLinkedin className='submenu-linkedin'/>,
      submenu: [
        {
          path: "/linkedin/posts",
          name: "Posts",
          icon: <GiPostStamp/>
        },
        {
          path: "/linkedin/ads",
          name: "Ads",
          icon: <NewspaperIcon/>
        },
      ]
    },
    {
        path: '/twitter',
        title: "Twitter",
        icon: <FaTwitterSquare className='submenu-twitter'/>,
        submenu: [
          {
            path: "/linkedin/posts",
            name: "Posts",
            icon:<GiPostStamp/>
          },
          {
            path: "/linkedin/ads",
            name: "Ads",
            icon: <NewspaperIcon/>
          },
        ]
      },
    {
      path:"/admin",
      title:"Admin",
      icon:<RiAdminLine/>
    },
  ]