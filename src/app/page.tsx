"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Github, Twitter, Instagram, Mail, ExternalLink, Calendar, MapPin, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "works", "blog", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break 
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-white font-bold text-xl">Profile</div>
            <div className="hidden md:flex space-x-8">
              {["About", "Works", "Blog", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-white hover:text-blue-400 transition-colors duration-300 ${
                    activeSection === item.toLowerCase() ? "text-blue-400" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="sm" className="text-white">
                Menu
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/hero1.jpeg"
                alt="Profile image 1"
                width={300}
                height={300}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/hero2.jpeg"
                alt="Profile image 2"
                width={300}
                height={300}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/hero3.jpeg"
                alt="Profile image 3"
                width={300}
                height={300}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/hero4.jpeg"
                alt="Profile image 4"
                width={300}
                height={300}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">About</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-xl">
                <Image
                  src="/about.jpeg"
                  alt="Profile image"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">AKIYOSHI</h3>
              <div className="flex justify-center space-x-4">
                <Link
                  href="#"
                  className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300 hover:scale-110 transform"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="p-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors duration-300 hover:scale-110 transform"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-3 text-gray-600">
                <Calendar className="w-5 h-5" />
                <span>生年月日：西暦2001年1月1日 24歳</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin className="w-5 h-5" />
                <span>明治大学政治経済学部経済学科在籍</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <User className="w-5 h-5" />
                <span>趣味：ゲーム、カフェ、ファッション</span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                こんにちは、ご覧いただきありがとうございます。 現在、私はソフトウェアエンジニアになるため学習中です。
                すべて独学ですが、可能性、やりがいに触れることができました。
              </p>
              <p className="text-gray-700 leading-relaxed">
                個人的な目標は、AI駆動開発で学習しながら効率的な個人開発を行って成功することです。
                お客様の要望を第一にコミュニケーションを取り、ご納得いただけるモノを迅速に提供できることを心掛けます。
                何卒よろしくお願いいたします。
              </p>
              <div>
                <h4 className="font-semibold mb-3 text-gray-800">学習言語</h4>
                <div className="flex flex-wrap gap-2">
                  {["HTML", "CSS", "JavaScript", "TypeScript", "React"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="hover:bg-blue-100 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className="py-16 px-4 bg-gradient-to-r from-slate-50 to-slate-100">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Works</h2>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">実績を公開予定</h3>
            <p className="text-xl text-gray-600">Githubで成果物</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transform">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Github className="w-5 h-5" />
                  <span>プロジェクト 1</span>
                </CardTitle>
                <CardDescription>React + TypeScript で作成したWebアプリケーション</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-200 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="/images/project-1.jpg"
                    alt="Project 1"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <Badge>React</Badge>
                    <Badge>TypeScript</Badge>
                  </div>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transform">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Github className="w-5 h-5" />
                  <span>プロジェクト 2</span>
                </CardTitle>
                <CardDescription>Next.js で作成したポートフォリオサイト</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-200 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="/images/project-2.jpg"
                    alt="Project 2"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <Badge>Next.js</Badge>
                    <Badge>Tailwind</Badge>
                  </div>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Blog</h2>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">Qiitaのブログ記事を公開</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transform">
              <CardHeader>
                <CardTitle>React Hooksの基本的な使い方</CardTitle>
                <CardDescription>2024年3月15日</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">React Hooksの基本的な概念と実際の使用例について詳しく解説します。</p>
                <Button variant="outline" size="sm">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Qiitaで読む
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transform">
              <CardHeader>
                <CardTitle>TypeScriptでより安全なコードを書く</CardTitle>
                <CardDescription>2024年3月10日</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  TypeScriptの型システムを活用して、より保守性の高いコードを書く方法を紹介します。
                </p>
                <Button variant="outline" size="sm">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Qiitaで読む
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-r from-slate-50 to-slate-100">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Contact</h2>
          <div className="text-center">
            <p className="text-xl text-gray-600 mb-8">お問い合わせは各種SNSからお願いいたします。</p>
            <div className="flex justify-center space-x-6 mb-12">
              <Link
                href="https://x.com/jam_eg"
                className="p-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110 transform shadow-lg"
              >
                <Twitter className="w-6 h-6" />
              </Link>
              <Link
                href="https://x.com/jam_eg"
                className="p-4 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all duration-300 hover:scale-110 transform shadow-lg"
              >
                <Instagram className="w-6 h-6" />
              </Link>
              <Link
                href="https://github.com/autumn-7-21"
                className="p-4 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-all duration-300 hover:scale-110 transform shadow-lg"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link
                href="mailto:akyshi21l@gmail.com"
                className="p-4 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all duration-300 hover:scale-110 transform shadow-lg"
              >
                <Mail className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <Button
            onClick={scrollToTop}
            variant="outline"
            className="mb-4 border-white text-black hover:bg-gray-300 transition-colors duration-300"
          >
            TOP ↑
          </Button>
          <p className="text-gray-400">© 2024 AKIYOSHI Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

