/**
 * 隐私政策配置文件
 *
 * 此文件包含隐私政策页面的详细信息。
 * 在实际应用中，这些信息可以通过API动态获取并覆盖这些默认值。
 */

export interface PrivacyPolicy {
  lastUpdated: string
  sections: {
    title: {
      en: string
      zh: string
    }
    content: {
      en: string
      zh: string
    }
  }[]
  dataUsagePoints: {
    en: string[]
    zh: string[]
  }
  contactEmail: string
}

export const privacyPolicy: PrivacyPolicy = {
  lastUpdated: "2025-05-08",
  sections: [
    {
      title: {
        en: "Introduction",
        zh: "介绍",
      },
      content: {
        en: "At Big Data Technologies Navigator (www.bigdatanavigator.site), we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.",
        zh: "在大数据技术导航 (www.bigdatanavigator.site)，我们尊重您的隐私并致力于保护您的个人数据。本隐私政策将告知您我们在您访问我们的网站时如何照顾您的个人数据，并告诉您关于您的隐私权以及法律如何保护您。",
      },
    },
    {
      title: {
        en: "Information We Collect",
        zh: "我们收集的信息",
      },
      content: {
        en: "We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:",
        zh: "我们可能收集、使用、存储和传输不同类型的关于您的个人数据，我们将其分组如下：",
      },
    },
    {
      title: {
        en: "Technical Data",
        zh: "技术数据",
      },
      content: {
        en: "This includes your IP address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.",
        zh: "这包括您的IP地址、浏览器类型和版本、时区设置和位置、浏览器插件类型和版本、操作系统和平台，以及您用于访问本网站的设备上的其他技术。",
      },
    },
    {
      title: {
        en: "Usage Data",
        zh: "使用数据",
      },
      content: {
        en: "This includes information about how you use our website, products, and services.",
        zh: "这包括有关您如何使用我们的网站、产品和服务的信息。",
      },
    },
    {
      title: {
        en: "Analytics Tools",
        zh: "分析工具",
      },
      content: {
        en: "We use analytics tools including Vercel Web Analytics and Google Analytics to help us understand how visitors use our site. These tools collect information such as how often users visit our site, what pages they visit, and what other sites they used prior to coming to our site. We use the information we get from these tools to improve our site. These tools collect the IP address assigned to you on the date you visit our site, but not your name or other identifying information. We do not combine the information collected through the use of these tools with personally identifiable information. Google's ability to use and share information collected by Google Analytics about your visits to our site is restricted by the Google Analytics Terms of Use and the Google Privacy Policy. You can prevent Google Analytics from recognizing you on return visits to this site by disabling cookies on your browser or using Google's Analytics Opt-out Browser Add-on.",
        zh: "我们使用分析工具，包括Vercel Web Analytics和Google Analytics，以帮助我们了解访问者如何使用我们的网站。这些工具收集的信息包括用户访问我们网站的频率、他们访问的页面以及在访问我们网站之前使用的其他网站。我们使用从这些工具获得的信息来改进我们的网站。这些工具收集您在访问我们网站当天分配给您的IP地址，但不收集您的姓名或其他识别信息。我们不会将通过使用这些工具收集的信息与个人身份信息相结合。Google使用和共享Google Analytics收集的有关您访问我们网站的信息的能力受Google Analytics使用条款和Google隐私政策的限制。您可以通过在浏览器上禁用cookies或使用Google的Analytics退出浏览器插件，防止Google Analytics在您再次访问本网站时识别您。",
      },
    },
    {
      title: {
        en: "How We Use Your Data",
        zh: "我们如何使用您的数据",
      },
      content: {
        en: "We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:",
        zh: "我们只会在法律允许的情况下使用您的个人数据。最常见的是，我们将在以下情况下使用您的个人数据：",
      },
    },
    {
      title: {
        en: "Cookies",
        zh: "Cookies",
      },
      content: {
        en: "We use cookies and similar tracking technologies to track the activity on our service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. Our analytics tools may use cookies to collect information and improve our services. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.",
        zh: "我们使用cookies和类似的跟踪技术来跟踪我们服务上的活动并保存某些信息。Cookies是包含少量数据的文件，可能包括匿名唯一标识符。我们的分析工具可能使用cookies来收集信息并改进我们的服务。您可以指示您的浏览器拒绝所有cookies或在发送cookie时提示您。但是，如果您不接受cookies，您可能无法使用我们服务的某些部分。",
      },
    },
    {
      title: {
        en: "Third-Party Links",
        zh: "第三方链接",
      },
      content: {
        en: "Our website may include links to third-party websites, plug-ins, and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.",
        zh: "我们的网站可能包含指向第三方网站、插件和应用程序的链接。点击这些链接或启用这些连接可能允许第三方收集或共享有关您的数据。我们不控制这些第三方网站，也不对其隐私声明负责。",
      },
    },
    {
      title: {
        en: "Your Data Rights",
        zh: "您的数据权利",
      },
      content: {
        en: "Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, or to object to processing.",
        zh: "在某些情况下，您根据数据保护法对您的个人数据拥有权利，包括请求访问、更正、删除、限制、传输或反对处理的权利。",
      },
    },
  ],
  dataUsagePoints: {
    en: [
      "To provide and maintain our educational content about big data technologies",
      "To notify you about updates to our content and services",
      "To improve our website's user experience",
      "To analyze usage patterns to better organize our content",
      "To monitor the usage of our service",
      "To detect, prevent and address technical issues",
      "To measure the effectiveness of our content and understand user preferences",
    ],
    zh: [
      "提供和维护我们关于大数据技术的教育内容",
      "通知您有关我们内容和服务的更新",
      "改善我们网站的用户体验",
      "分析使用模式以更好地组织我们的内容",
      "监控我们服务的使用情况",
      "检测、预防和解决技术问题",
      "衡量我们内容的有效性并了解用户偏好",
    ],
  },
  contactEmail: "blakelui7@gmail.com",
}
