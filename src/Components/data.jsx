import { IoCheckmarkCircle } from 'react-icons/io5'
import { FaCentos } from "react-icons/fa";
import { PiWebhooksLogo } from "react-icons/pi";
import { SiWebmoney } from "react-icons/si";
import coin from '../assets/coin.jpg'
import write from '../assets/write.jpg'
import write2 from '../assets/write2.jpg'


export const about_list = [
    {
      icon: <IoCheckmarkCircle/>,
      title: 'Trusted Advisors with Decades of Experience',
    },
    {
      icon: <IoCheckmarkCircle/>,
      title: 'Personalized, Client-Centric Approach',
    },
    {
      icon: <IoCheckmarkCircle/>,
      title: 'Proven Track Record of Success',
    },
    {
      icon: <IoCheckmarkCircle/>,
      title: 'Strategic planning to ensure a secure and comfortable retirement.',
    },
    {
      icon: <IoCheckmarkCircle/>,
      title: 'Expert management of your investment portfolio to maximize returns.',
    },
    {
      icon: <IoCheckmarkCircle/>,
      title: 'Strategies to minimize tax liability and maximize investment returns.',
    },
]

export const services = [
  {
      icon: <FaCentos />,
      head : 'Wealth Management',
      desc : 'A short description of the service your company provides and how it helps your clients business increase revenue using the technology and strategy your company provides',
  },
  {
      icon: <PiWebhooksLogo />,
      head : 'Retirement Planning',
      desc : 'A short description of the service your company provides and how it helps your clients business increase revenue using the technology and strategy your company provides',
  },
  {
      icon: <SiWebmoney />,
      head : 'Portfolio Management',
      desc : 'A short description of the service your company provides and how it helps your clients business increase revenue using the technology and strategy your company provides',
  },
]

export const resource = [
  {
    title : 'Investment Guides',
    desc : 'A short description of the service your company provides and how it helps your clients business increase revenue'
  },
  {
    title : 'Market Insights',
    desc : 'A short description of the service your company provides and how it helps your clients business increase revenue'
  },
  {
    title : 'Educational Webinars',
    desc : 'A short description of the service your company provides and how it helps your clients business increase revenue'
  }
]

export const blog = [
  {
    image: coin,
    title: "5 Investment Strategies for 2024",
    text: "Explore the top strategies that can help you stay ahead in the coming year"
  },
  {
    image: write,
    title: "Understanding the Power of Compound Interest",
    text: "Learn how compounding can significantly impact your long-term wealth"
  },
  {
    image: write2,
    title: "The Benefits of Diversification in Your Portfolio",
    text: "Discover why a diversified portfolio is essential for managing risk"
  }
]