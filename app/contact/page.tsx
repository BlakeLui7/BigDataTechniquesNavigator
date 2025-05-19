"use client"

import { Mail, MessageSquare, Github } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { safeT } from "@/lib/i18n"

export default function ContactPage() {
  const { language } = useLanguage()

  return (
    <div className="container px-4 py-12 md:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight mb-2">{safeT("contactTitle", language, "Contact Us")}</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          {safeT(
            "contactSubtitle",
            language,
            "Get in touch with our team for questions, feedback, or collaboration opportunities.",
          )}
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-neutral-500" />
                {safeT("generalInquiries", language, "General Inquiries")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                {safeT(
                  "generalInquiriesText",
                  language,
                  "For general questions about our platform or the technologies we cover.",
                )}
              </p>
              <a href="mailto:blakelui7@gmail.com" className="text-neutral-800 hover:underline dark:text-neutral-200">
                blakelui7@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-neutral-500" />
                {safeT("technicalSupport", language, "Technical Support")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                {safeT(
                  "technicalSupportText",
                  language,
                  "Need help with a specific technology or having issues with our platform?",
                )}
              </p>
              <a href="mailto:blakelui7@gmail.com" className="text-neutral-800 hover:underline dark:text-neutral-200">
                blakelui7@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Github className="h-5 w-5 text-neutral-500" />
                {safeT("contributions", language, "Contributions")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                {safeT(
                  "contributionsText",
                  language,
                  "Interested in contributing to our open-source project? Check out our GitHub repository.",
                )}
              </p>
              <a
                href="https://github.com/yourusername/big-data-navigator"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-800 hover:underline dark:text-neutral-200"
              >
                github.com/yourusername/big-data-navigator
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
