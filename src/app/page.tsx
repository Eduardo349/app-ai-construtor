'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { 
  Brain, 
  Code, 
  Sparkles, 
  Rocket, 
  History, 
  TrendingUp, 
  Zap,
  Download,
  Play,
  Settings,
  BookOpen,
  Target,
  Cpu,
  Database,
  Globe
} from 'lucide-react'

interface GeneratedApp {
  id: string
  name: string
  description: string
  code: string
  timestamp: Date
  complexity: 'Simples' | 'Médio' | 'Avançado'
  technologies: string[]
  rating?: number
}

interface AIEvolution {
  level: number
  experience: number
  maxExperience: number
  capabilities: string[]
  learningProgress: number
}

export default function AIAppBuilder() {
  const [prompt, setPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedApps, setGeneratedApps] = useState<GeneratedApp[]>([])
  const [selectedApp, setSelectedApp] = useState<GeneratedApp | null>(null)
  const [aiEvolution, setAiEvolution] = useState<AIEvolution>({
    level: 1,
    experience: 0,
    maxExperience: 100,
    capabilities: ['Apps Básicos', 'Interface Simples', 'Funcionalidades Core'],
    learningProgress: 0
  })

  // Simular evolução da IA
  useEffect(() => {
    const interval = setInterval(() => {
      setAiEvolution(prev => {
        const newProgress = Math.min(prev.learningProgress + 0.5, 100)
        let newLevel = prev.level
        let newExperience = prev.experience + 2
        let newCapabilities = [...prev.capabilities]

        if (newExperience >= prev.maxExperience) {
          newLevel += 1
          newExperience = 0
          
          // Adicionar novas capacidades conforme evolui
          const newCaps = [
            'Apps Complexos', 'IA Avançada', 'Integração APIs', 
            'Banco de Dados', 'Autenticação', 'Deploy Automático',
            'Otimização Performance', 'Segurança Avançada'
          ]
          
          if (newLevel <= newCaps.length && !newCapabilities.includes(newCaps[newLevel - 2])) {
            newCapabilities.push(newCaps[newLevel - 2])
          }
        }

        return {
          ...prev,
          level: newLevel,
          experience: newExperience,
          maxExperience: prev.maxExperience + (newLevel * 20),
          capabilities: newCapabilities,
          learningProgress: newProgress
        }
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const generateApp = async () => {
    if (!prompt.trim()) return

    setIsGenerating(true)
    
    // Simular geração de app (em produção, aqui seria a chamada para OpenAI)
    setTimeout(() => {
      const complexities: Array<'Simples' | 'Médio' | 'Avançado'> = ['Simples', 'Médio', 'Avançado']
      const techStacks = [
        ['React', 'TypeScript', 'Tailwind'],
        ['Next.js', 'Supabase', 'Vercel'],
        ['React', 'Node.js', 'MongoDB'],
        ['Vue.js', 'Firebase', 'PWA'],
        ['React Native', 'Expo', 'API']
      ]

      const newApp: GeneratedApp = {
        id: Date.now().toString(),
        name: `App: ${prompt.slice(0, 30)}...`,
        description: `Aplicação completa baseada em: "${prompt}"`,
        code: generateSampleCode(prompt),
        timestamp: new Date(),
        complexity: complexities[Math.floor(Math.random() * complexities.length)],
        technologies: techStacks[Math.floor(Math.random() * techStacks.length)],
        rating: Math.floor(Math.random() * 5) + 1
      }

      setGeneratedApps(prev => [newApp, ...prev])
      setSelectedApp(newApp)
      setPrompt('')
      setIsGenerating(false)

      // Aumentar experiência da IA
      setAiEvolution(prev => ({
        ...prev,
        experience: prev.experience + 10
      }))
    }, 3000)
  }

  const generateSampleCode = (userPrompt: string) => {
    return `// App gerado pela IA baseado em: "${userPrompt}"
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function GeneratedApp() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const handleAction = async () => {
    setLoading(true)
    // Lógica principal do app baseada no prompt
    try {
      // Implementação específica para: ${userPrompt}
      console.log('Executando funcionalidade principal...')
    } catch (error) {
      console.error('Erro:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>App Gerado pela IA</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Funcionalidade: {userPrompt}</p>
            <Button onClick={handleAction} disabled={loading}>
              {loading ? 'Processando...' : 'Executar'}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// Componentes adicionais e lógica específica seriam gerados aqui...`
  }

  const templates = [
    { name: 'E-commerce', icon: Globe, desc: 'Loja online completa' },
    { name: 'Dashboard', icon: TrendingUp, desc: 'Painel administrativo' },
    { name: 'Blog', icon: BookOpen, desc: 'Sistema de blog' },
    { name: 'CRM', icon: Target, desc: 'Gestão de clientes' },
    { name: 'API', icon: Database, desc: 'Backend completo' },
    { name: 'Mobile App', icon: Cpu, desc: 'App mobile nativo' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
      {/* Header */}
      <div className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  AI App Builder
                </h1>
                <p className="text-sm text-gray-600">IA que constrói apps completos</p>
              </div>
            </div>
            
            {/* Status da IA */}
            <Card className="p-3">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-purple-500" />
                  <span className="text-sm font-medium">Nível {aiEvolution.level}</span>
                </div>
                <div className="w-24">
                  <Progress value={(aiEvolution.experience / aiEvolution.maxExperience) * 100} className="h-2" />
                </div>
                <Badge variant="secondary" className="text-xs">
                  {aiEvolution.experience}/{aiEvolution.maxExperience} XP
                </Badge>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Painel Principal */}
          <div className="lg:col-span-2 space-y-6">
            {/* Gerador de Apps */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Code className="w-5 h-5" />
                  <span>Criar Novo App</span>
                </CardTitle>
                <CardDescription>
                  Descreva o app que você quer e a IA construirá para você
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Ex: Quero um app de gestão financeira pessoal com gráficos, categorias de gastos e metas de economia..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[120px] resize-none"
                />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Zap className="w-4 h-4" />
                    <span>IA evoluindo em tempo real</span>
                    <Progress value={aiEvolution.learningProgress} className="w-16 h-2" />
                  </div>
                  
                  <Button 
                    onClick={generateApp} 
                    disabled={isGenerating || !prompt.trim()}
                    className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700"
                  >
                    {isGenerating ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                        Construindo...
                      </>
                    ) : (
                      <>
                        <Rocket className="w-4 h-4 mr-2" />
                        Construir App
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Templates Rápidos */}
            <Card>
              <CardHeader>
                <CardTitle>Templates Rápidos</CardTitle>
                <CardDescription>Comece com modelos pré-definidos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {templates.map((template, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="h-auto p-4 flex flex-col items-center space-y-2 hover:bg-gradient-to-br hover:from-purple-50 hover:to-blue-50"
                      onClick={() => setPrompt(`Crie um ${template.name.toLowerCase()} completo com todas as funcionalidades principais`)}
                    >
                      <template.icon className="w-6 h-6 text-purple-500" />
                      <div className="text-center">
                        <div className="font-medium text-sm">{template.name}</div>
                        <div className="text-xs text-gray-500">{template.desc}</div>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* App Selecionado */}
            {selectedApp && (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>{selectedApp.name}</CardTitle>
                      <CardDescription>{selectedApp.description}</CardDescription>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={selectedApp.complexity === 'Simples' ? 'secondary' : selectedApp.complexity === 'Médio' ? 'default' : 'destructive'}>
                        {selectedApp.complexity}
                      </Badge>
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4 mr-2" />
                        Baixar
                      </Button>
                      <Button size="sm">
                        <Play className="w-4 h-4 mr-2" />
                        Preview
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="code" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="code">Código</TabsTrigger>
                      <TabsTrigger value="preview">Preview</TabsTrigger>
                      <TabsTrigger value="deploy">Deploy</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="code" className="mt-4">
                      <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                        <pre className="text-sm">
                          <code>{selectedApp.code}</code>
                        </pre>
                      </ScrollArea>
                    </TabsContent>
                    
                    <TabsContent value="preview" className="mt-4">
                      <div className="h-[400px] bg-gray-100 rounded-md flex items-center justify-center">
                        <div className="text-center">
                          <Globe className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                          <p className="text-gray-600">Preview do app seria exibido aqui</p>
                          <p className="text-sm text-gray-500 mt-2">Tecnologias: {selectedApp.technologies.join(', ')}</p>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="deploy" className="mt-4">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <h4 className="font-medium">Deploy Automático</h4>
                            <p className="text-sm text-gray-600">Publique seu app em segundos</p>
                          </div>
                          <Button>
                            <Rocket className="w-4 h-4 mr-2" />
                            Deploy
                          </Button>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Evolução da IA */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5" />
                  <span>Evolução da IA</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">Nível {aiEvolution.level}</div>
                  <Progress value={(aiEvolution.experience / aiEvolution.maxExperience) * 100} className="mt-2" />
                  <p className="text-sm text-gray-600 mt-1">
                    {aiEvolution.experience}/{aiEvolution.maxExperience} XP
                  </p>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-medium mb-2">Capacidades Atuais:</h4>
                  <div className="space-y-1">
                    {aiEvolution.capabilities.map((cap, index) => (
                      <Badge key={index} variant="secondary" className="mr-1 mb-1">
                        {cap}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                  <div className="flex items-center space-x-2 text-sm">
                    <Sparkles className="w-4 h-4 text-purple-500" />
                    <span className="font-medium">Aprendendo continuamente...</span>
                  </div>
                  <Progress value={aiEvolution.learningProgress} className="mt-2 h-1" />
                </div>
              </CardContent>
            </Card>

            {/* Histórico */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <History className="w-5 h-5" />
                  <span>Apps Criados</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px]">
                  {generatedApps.length === 0 ? (
                    <div className="text-center text-gray-500 py-8">
                      <Code className="w-8 h-8 mx-auto mb-2 opacity-50" />
                      <p className="text-sm">Nenhum app criado ainda</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {generatedApps.map((app) => (
                        <div
                          key={app.id}
                          className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                            selectedApp?.id === app.id ? 'bg-purple-50 border-purple-200' : 'hover:bg-gray-50'
                          }`}
                          onClick={() => setSelectedApp(app)}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-medium text-sm truncate">{app.name}</h4>
                            <Badge variant="outline" className="text-xs">
                              {app.complexity}
                            </Badge>
                          </div>
                          <p className="text-xs text-gray-600 mb-2 line-clamp-2">{app.description}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex space-x-1">
                              {app.technologies.slice(0, 2).map((tech, index) => (
                                <Badge key={index} variant="secondary" className="text-xs px-1">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                            <span className="text-xs text-gray-500">
                              {app.timestamp.toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </ScrollArea>
              </CardContent>
            </Card>

            {/* Configurações */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="w-5 h-5" />
                  <span>Configurações</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Brain className="w-4 h-4 mr-2" />
                  Treinar IA
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  Exportar Projetos
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Documentação
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}