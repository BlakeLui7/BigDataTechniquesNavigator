"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MessageSquare, Github, Twitter } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useLanguage } from "@/contexts/language-context"
import { t } from "@/lib/i18n"

export default function ContactPage() {
  const { language } = useLanguage()
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // 模拟表单提交
    setFormStatus("success")
    // 在实际应用中，这里会有真正的表单提交逻辑
  }

  return (
    <div className="container px-4 py-12 md:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight mb-2">{t("contactTitle", language)}</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">{t("contactSubtitle", language)}</p>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-neutral-500" />
                  {t("generalInquiries", language)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-2">{t("generalInquiriesText", language)}</p>
                <a
                  href="mailto:info@bigdatatechnologies.com"
                  className="text-neutral-800 hover:underline dark:text-neutral-200"
                >
                  info@bigdatatechnologies.com
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-neutral-500" />
                  {t("technicalSupport", language)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-2">{t("technicalSupportText", language)}</p>
                <a
                  href="mailto:support@bigdatatechnologies.com"
                  className="text-neutral-800 hover:underline dark:text-neutral-200"
                >
                  support@bigdatatechnologies.com
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Github className="h-5 w-5 text-neutral-500" />
                  {t("contributions", language)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-2">{t("contributionsText", language)}</p>
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

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Twitter className="h-5 w-5 text-neutral-500" />
                  {t("followUs", language)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-2">{t("followUsText", language)}</p>
                <a
                  href="https://twitter.com/bigdatatech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-800 hover:underline dark:text-neutral-200"
                >
                  @bigdatatech
                </a>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Contact Form</CardTitle>
                <CardDescription>Send us a message and we'll get back to you</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t("nameLabel", language)}</Label>
                    <Input id="name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t("emailLabel", language)}</Label>
                    <Input id="email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">{t("subjectLabel", language)}</Label>
                    <Input id="subject" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">{t("messageLabel", language)}</Label>
                    <Textarea id="message" rows={5} required />
                  </div>

                  {formStatus === "success" && (
                    <Alert className="bg-green-50 text-green-800 dark:bg-green-900 dark:text-green-100">
                      <AlertDescription>{t("messageSent", language)}</AlertDescription>
                    </Alert>
                  )}

                  {formStatus === "error" && (
                    <Alert className="bg-red-50 text-red-800 dark:bg-red-900 dark:text-red-100">
                      <AlertDescription>{t("messageError", language)}</AlertDescription>
                    </Alert>
                  )}

                  <Button type="submit" className="w-full">
                    {t("sendMessage", language)}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
