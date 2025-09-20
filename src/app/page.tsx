'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { 
  Code2, 
  Server, 
  Database, 
  Shield, 
  Zap, 
  Users, 
  BarChart3, 
  Settings, 
  Bell, 
  Search,
  Plus,
  TrendingUp,
  Activity,
  Globe,
  Lock,
  CheckCircle,
  AlertTriangle,
  Clock,
  Calendar,
  FileText,
  Monitor,
  Smartphone,
  Cloud,
  Github,
  Terminal,
  Cpu,
  HardDrive,
  Wifi,
  Eye,
  Download,
  Share2,
  Filter,
  MoreVertical,
  ArrowUp,
  ArrowDown,
  Star,
  Target,
  Layers,
  GitBranch,
  Package,
  Rocket,
  Brain,
  Lightbulb,
  Workflow
} from 'lucide-react'

interface SystemMetric {
  id: string
  name: string
  value: number
  unit: string
  status: 'healthy' | 'warning' | 'critical'
  trend: 'up' | 'down' | 'stable'
  lastUpdate: Date
}

interface Project {
  id: string
  name: string
  description: string
  status: 'active' | 'completed' | 'paused' | 'planning'
  progress: number
  team: string[]
  technologies: string[]
  priority: 'low' | 'medium' | 'high' | 'critical'
  deadline: Date
  budget: number
  client: string
}

interface SecurityAlert {
  id: string
  type: 'vulnerability' | 'breach' | 'suspicious' | 'maintenance'
  severity: 'low' | 'medium' | 'high' | 'critical'
  title: string
  description: string
  timestamp: Date
  resolved: boolean
}

export default function TechMasterPlatform() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentTime, setCurrentTime] = useState(new Date())

  // Atualizar relógio em tempo real
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Dados simulados de métricas do sistema
  const systemMetrics: SystemMetric[] = [
    {
      id: '1',
      name: 'CPU Usage',
      value: 67,
      unit: '%',
      status: 'healthy',
      trend: 'stable',
      lastUpdate: new Date()
    },
    {
      id: '2',
      name: 'Memory Usage',
      value: 84,
      unit: '%',
      status: 'warning',
      trend: 'up',
      lastUpdate: new Date()
    },
    {
      id: '3',
      name: 'Disk Space',
      value: 45,
      unit: '%',
      status: 'healthy',
      trend: 'down',
      lastUpdate: new Date()
    },
    {
      id: '4',
      name: 'Network I/O',
      value: 156,
      unit: 'MB/s',
      status: 'healthy',
      trend: 'up',
      lastUpdate: new Date()
    },
    {
      id: '5',
      name: 'Active Users',
      value: 2847,
      unit: 'users',
      status: 'healthy',
      trend: 'up',
      lastUpdate: new Date()
    },
    {
      id: '6',
      name: 'API Requests',
      value: 98.7,
      unit: '%',
      status: 'healthy',
      trend: 'stable',
      lastUpdate: new Date()
    }
  ]

  // Dados simulados de projetos
  const projects: Project[] = [
    {
      id: '1',
      name: 'Cloud Migration Platform',
      description: 'Sistema completo para migração de infraestrutura para cloud com automação avançada',
      status: 'active',
      progress: 78,
      team: ['João Silva', 'Maria Santos', 'Pedro Costa'],
      technologies: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'Python'],
      priority: 'high',
      deadline: new Date('2024-03-15'),
      budget: 250000,
      client: 'TechCorp Solutions'
    },
    {
      id: '2',
      name: 'AI-Powered Analytics Dashboard',
      description: 'Dashboard inteligente com machine learning para análise preditiva de dados empresariais',
      status: 'active',
      progress: 92,
      team: ['Ana Oliveira', 'Carlos Mendes', 'Lucia Ferreira'],
      technologies: ['React', 'Python', 'TensorFlow', 'PostgreSQL', 'Redis'],
      priority: 'critical',
      deadline: new Date('2024-02-28'),
      budget: 180000,
      client: 'DataFlow Inc'
    },
    {
      id: '3',
      name: 'Cybersecurity Monitoring System',
      description: 'Sistema avançado de monitoramento e resposta a incidentes de segurança em tempo real',
      status: 'planning',
      progress: 15,
      team: ['Roberto Lima', 'Fernanda Rocha'],
      technologies: ['Go', 'Elasticsearch', 'Kibana', 'Docker', 'Prometheus'],
      priority: 'high',
      deadline: new Date('2024-05-20'),
      budget: 320000,
      client: 'SecureNet Corp'
    },
    {
      id: '4',
      name: 'Mobile DevOps Pipeline',
      description: 'Pipeline completo de CI/CD para aplicações mobile com testes automatizados',
      status: 'completed',
      progress: 100,
      team: ['Marcos Alves', 'Juliana Campos', 'Ricardo Souza'],
      technologies: ['Jenkins', 'Flutter', 'Firebase', 'Fastlane', 'SonarQube'],
      priority: 'medium',
      deadline: new Date('2024-01-30'),
      budget: 95000,
      client: 'MobileTech Ltd'
    }
  ]

  // Dados simulados de alertas de segurança
  const securityAlerts: SecurityAlert[] = [
    {
      id: '1',
      type: 'vulnerability',
      severity: 'high',
      title: 'Vulnerabilidade crítica detectada no Apache Log4j',
      description: 'CVE-2021-44228 detectada em 3 servidores de produção',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      resolved: false
    },
    {
      id: '2',
      type: 'suspicious',
      severity: 'medium',
      title: 'Tentativas de login suspeitas',
      description: '15 tentativas de login falharam do IP 192.168.1.100',
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
      resolved: true
    },
    {
      id: '3',
      type: 'maintenance',
      severity: 'low',
      title: 'Manutenção programada do firewall',
      description: 'Atualização de regras de segurança agendada para 02:00',
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
      resolved: false
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'text-green-600 bg-green-100'
      case 'warning': return 'text-yellow-600 bg-yellow-100'
      case 'critical': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-500 text-white'
      case 'high': return 'bg-orange-500 text-white'
      case 'medium': return 'bg-blue-500 text-white'
      case 'low': return 'bg-gray-500 text-white'
      default: return 'bg-gray-500 text-white'
    }
  }

  const getProjectStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800'
      case 'completed': return 'bg-blue-100 text-blue-800'
      case 'paused': return 'bg-yellow-100 text-yellow-800'
      case 'planning': return 'bg-purple-100 text-purple-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header Profissional */}
      <header className="bg-white/95 backdrop-blur-xl border-b border-gray-200 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo e Branding */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-xl shadow-lg flex items-center justify-center">
                  <Code2 className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  TechMaster Pro
                </h1>
                <p className="text-sm text-gray-600">Plataforma de Gestão Tecnológica Avançada</p>
              </div>
            </div>

            {/* Status e Controles */}
            <div className="flex items-center space-x-6">
              {/* Relógio em tempo real */}
              <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span className="font-mono">
                  {currentTime.toLocaleTimeString('pt-BR')}
                </span>
              </div>

              {/* Status do sistema */}
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600 hidden sm:block">Sistema Online</span>
              </div>

              {/* Notificações */}
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                  3
                </span>
              </Button>

              {/* Perfil */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">AD</span>
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-gray-900">Admin Master</p>
                  <p className="text-xs text-gray-500">Arquiteto de Soluções</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          {/* Navegação Principal */}
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl p-2">
            <TabsTrigger value="dashboard" className="flex items-center space-x-2 px-4 py-3 rounded-xl">
              <BarChart3 className="w-4 h-4" />
              <span className="hidden sm:block">Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex items-center space-x-2 px-4 py-3 rounded-xl">
              <Rocket className="w-4 h-4" />
              <span className="hidden sm:block">Projetos</span>
            </TabsTrigger>
            <TabsTrigger value="infrastructure" className="flex items-center space-x-2 px-4 py-3 rounded-xl">
              <Server className="w-4 h-4" />
              <span className="hidden sm:block">Infraestrutura</span>
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center space-x-2 px-4 py-3 rounded-xl">
              <Shield className="w-4 h-4" />
              <span className="hidden sm:block">Segurança</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center space-x-2 px-4 py-3 rounded-xl">
              <TrendingUp className="w-4 h-4" />
              <span className="hidden sm:block">Analytics</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center space-x-2 px-4 py-3 rounded-xl">
              <Settings className="w-4 h-4" />
              <span className="hidden sm:block">Configurações</span>
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Principal */}
          <TabsContent value="dashboard" className="space-y-8">
            {/* Métricas em Tempo Real */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
              {systemMetrics.map((metric) => (
                <Card key={metric.id} className="bg-white/80 backdrop-blur-sm shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(metric.status)}`}>
                        {metric.status}
                      </div>
                      <div className="flex items-center space-x-1">
                        {metric.trend === 'up' && <ArrowUp className="w-4 h-4 text-green-500" />}
                        {metric.trend === 'down' && <ArrowDown className="w-4 h-4 text-red-500" />}
                        {metric.trend === 'stable' && <div className="w-4 h-4 bg-gray-400 rounded-full"></div>}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-900 mb-1">
                        {metric.value.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-600">{metric.unit}</div>
                      <div className="text-xs text-gray-500 mt-2">{metric.name}</div>
                    </div>
                    {metric.name.includes('Usage') && (
                      <div className="mt-4">
                        <Progress value={metric.value} className="h-2" />
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Gráficos e Análises */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Performance do Sistema */}
              <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Activity className="w-5 h-5 text-blue-600" />
                    <span>Performance do Sistema</span>
                  </CardTitle>
                  <CardDescription>Monitoramento em tempo real dos recursos</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Cpu className="w-5 h-5 text-blue-500" />
                        <span className="font-medium">CPU</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Progress value={67} className="w-24 h-2" />
                        <span className="text-sm font-medium">67%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <HardDrive className="w-5 h-5 text-green-500" />
                        <span className="font-medium">Memória</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Progress value={84} className="w-24 h-2" />
                        <span className="text-sm font-medium">84%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Database className="w-5 h-5 text-purple-500" />
                        <span className="font-medium">Disco</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Progress value={45} className="w-24 h-2" />
                        <span className="text-sm font-medium">45%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Wifi className="w-5 h-5 text-orange-500" />
                        <span className="font-medium">Rede</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Progress value={78} className="w-24 h-2" />
                        <span className="text-sm font-medium">156 MB/s</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Projetos Ativos */}
              <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Rocket className="w-5 h-5 text-purple-600" />
                    <span>Projetos em Andamento</span>
                  </CardTitle>
                  <CardDescription>Status dos principais projetos</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {projects.filter(p => p.status === 'active').map((project) => (
                      <div key={project.id} className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">{project.name}</h4>
                          <Badge className={getPriorityColor(project.priority)}>
                            {project.priority}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Progress value={project.progress} className="w-20 h-2" />
                            <span className="text-sm font-medium">{project.progress}%</span>
                          </div>
                          <div className="text-xs text-gray-500">
                            {project.team.length} membros
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Alertas de Segurança */}
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-red-600" />
                  <span>Alertas de Segurança</span>
                </CardTitle>
                <CardDescription>Monitoramento de segurança em tempo real</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {securityAlerts.map((alert) => (
                    <div key={alert.id} className={`p-4 rounded-xl border-l-4 ${
                      alert.severity === 'critical' ? 'bg-red-50 border-red-500' :
                      alert.severity === 'high' ? 'bg-orange-50 border-orange-500' :
                      alert.severity === 'medium' ? 'bg-yellow-50 border-yellow-500' :
                      'bg-blue-50 border-blue-500'
                    }`}>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge variant="outline" className={
                              alert.severity === 'critical' ? 'text-red-700 border-red-300' :
                              alert.severity === 'high' ? 'text-orange-700 border-orange-300' :
                              alert.severity === 'medium' ? 'text-yellow-700 border-yellow-300' :
                              'text-blue-700 border-blue-300'
                            }>
                              {alert.severity}
                            </Badge>
                            <Badge variant="secondary">
                              {alert.type}
                            </Badge>
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-1">{alert.title}</h4>
                          <p className="text-sm text-gray-600 mb-2">{alert.description}</p>
                          <p className="text-xs text-gray-500">
                            {alert.timestamp.toLocaleString('pt-BR')}
                          </p>
                        </div>
                        <div className="ml-4">
                          {alert.resolved ? (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          ) : (
                            <AlertTriangle className="w-5 h-5 text-red-500" />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Gestão de Projetos */}
          <TabsContent value="projects" className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Gestão de Projetos</h2>
                <p className="text-gray-600">Acompanhe o progresso de todos os projetos em desenvolvimento</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="Buscar projetos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  Novo Projeto
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Card key={project.id} className="bg-white/80 backdrop-blur-sm shadow-xl border-0 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                      onClick={() => setSelectedProject(project)}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{project.name}</CardTitle>
                        <CardDescription className="text-sm">{project.description}</CardDescription>
                      </div>
                      <div className="ml-4 flex flex-col items-end space-y-2">
                        <Badge className={getProjectStatusColor(project.status)}>
                          {project.status}
                        </Badge>
                        <Badge className={getPriorityColor(project.priority)}>
                          {project.priority}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Progresso */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Progresso</span>
                          <span className="text-sm font-bold">{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} className="h-3" />
                      </div>

                      {/* Informações do projeto */}
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Cliente:</span>
                          <p className="font-medium">{project.client}</p>
                        </div>
                        <div>
                          <span className="text-gray-500">Orçamento:</span>
                          <p className="font-medium">R$ {project.budget.toLocaleString()}</p>
                        </div>
                        <div>
                          <span className="text-gray-500">Prazo:</span>
                          <p className="font-medium">{project.deadline.toLocaleDateString('pt-BR')}</p>
                        </div>
                        <div>
                          <span className="text-gray-500">Equipe:</span>
                          <p className="font-medium">{project.team.length} membros</p>
                        </div>
                      </div>

                      {/* Tecnologias */}
                      <div>
                        <span className="text-sm text-gray-500 mb-2 block">Tecnologias:</span>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.slice(0, 3).map((tech, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{project.technologies.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Infraestrutura */}
          <TabsContent value="infrastructure" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Infraestrutura</h2>
              <p className="text-gray-600">Monitoramento e gestão da infraestrutura tecnológica</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-xl border-0">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100 text-sm">Servidores Ativos</p>
                      <p className="text-3xl font-bold">24</p>
                      <p className="text-blue-100 text-xs mt-1">98.7% uptime</p>
                    </div>
                    <Server className="w-8 h-8 text-blue-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white shadow-xl border-0">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100 text-sm">Bancos de Dados</p>
                      <p className="text-3xl font-bold">12</p>
                      <p className="text-green-100 text-xs mt-1">Todos operacionais</p>
                    </div>
                    <Database className="w-8 h-8 text-green-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-xl border-0">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-100 text-sm">Aplicações</p>
                      <p className="text-3xl font-bold">47</p>
                      <p className="text-purple-100 text-xs mt-1">Em produção</p>
                    </div>
                    <Globe className="w-8 h-8 text-purple-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-xl border-0">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-orange-100 text-sm">Containers</p>
                      <p className="text-3xl font-bold">156</p>
                      <p className="text-orange-100 text-xs mt-1">Docker/K8s</p>
                    </div>
                    <Package className="w-8 h-8 text-orange-200" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Mapa de Infraestrutura */}
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Layers className="w-5 h-5 text-blue-600" />
                  <span>Arquitetura do Sistema</span>
                </CardTitle>
                <CardDescription>Visão geral da arquitetura de infraestrutura</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 flex items-center">
                      <Cloud className="w-4 h-4 mr-2 text-blue-500" />
                      Cloud Services
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="text-sm">AWS EC2</span>
                        <Badge variant="secondary" className="bg-green-100 text-green-700">Online</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="text-sm">AWS RDS</span>
                        <Badge variant="secondary" className="bg-green-100 text-green-700">Online</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="text-sm">AWS S3</span>
                        <Badge variant="secondary" className="bg-green-100 text-green-700">Online</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 flex items-center">
                      <Terminal className="w-4 h-4 mr-2 text-green-500" />
                      DevOps Tools
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <span className="text-sm">Jenkins</span>
                        <Badge variant="secondary" className="bg-green-100 text-green-700">Ativo</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <span className="text-sm">Docker</span>
                        <Badge variant="secondary" className="bg-green-100 text-green-700">Ativo</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <span className="text-sm">Kubernetes</span>
                        <Badge variant="secondary" className="bg-green-100 text-green-700">Ativo</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 flex items-center">
                      <Monitor className="w-4 h-4 mr-2 text-purple-500" />
                      Monitoring
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                        <span className="text-sm">Prometheus</span>
                        <Badge variant="secondary" className="bg-green-100 text-green-700">Ativo</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                        <span className="text-sm">Grafana</span>
                        <Badge variant="secondary" className="bg-green-100 text-green-700">Ativo</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                        <span className="text-sm">ELK Stack</span>
                        <Badge variant="secondary" className="bg-green-100 text-green-700">Ativo</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Segurança */}
          <TabsContent value="security" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Centro de Segurança</h2>
              <p className="text-gray-600">Monitoramento e gestão de segurança cibernética</p>
            </div>

            {/* Status de Segurança */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-xl border-0">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100 text-sm">Score de Segurança</p>
                      <p className="text-3xl font-bold">94%</p>
                      <p className="text-green-100 text-xs mt-1">Excelente</p>
                    </div>
                    <Shield className="w-8 h-8 text-green-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white shadow-xl border-0">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100 text-sm">Firewall</p>
                      <p className="text-3xl font-bold">Ativo</p>
                      <p className="text-blue-100 text-xs mt-1">Todas as regras OK</p>
                    </div>
                    <Lock className="w-8 h-8 text-blue-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-500 to-violet-600 text-white shadow-xl border-0">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-100 text-sm">Vulnerabilidades</p>
                      <p className="text-3xl font-bold">3</p>
                      <p className="text-purple-100 text-xs mt-1">2 críticas</p>
                    </div>
                    <AlertTriangle className="w-8 h-8 text-purple-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-xl border-0">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-orange-100 text-sm">Tentativas de Invasão</p>
                      <p className="text-3xl font-bold">127</p>
                      <p className="text-orange-100 text-xs mt-1">Últimas 24h</p>
                    </div>
                    <Eye className="w-8 h-8 text-orange-200" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Alertas Detalhados */}
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  <span>Alertas de Segurança Críticos</span>
                </CardTitle>
                <CardDescription>Incidentes que requerem atenção imediata</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {securityAlerts.filter(alert => !alert.resolved).map((alert) => (
                    <div key={alert.id} className="p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-red-200">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <Badge className="bg-red-500 text-white">
                              {alert.severity.toUpperCase()}
                            </Badge>
                            <Badge variant="outline" className="border-red-300 text-red-700">
                              {alert.type}
                            </Badge>
                            <span className="text-xs text-gray-500">
                              {alert.timestamp.toLocaleString('pt-BR')}
                            </span>
                          </div>
                          <h4 className="font-bold text-gray-900 text-lg mb-2">{alert.title}</h4>
                          <p className="text-gray-700 mb-4">{alert.description}</p>
                          <div className="flex items-center space-x-3">
                            <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                              Resolver Agora
                            </Button>
                            <Button size="sm" variant="outline">
                              Ver Detalhes
                            </Button>
                            <Button size="sm" variant="ghost">
                              Ignorar
                            </Button>
                          </div>
                        </div>
                        <AlertTriangle className="w-8 h-8 text-red-500 ml-4" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics */}
          <TabsContent value="analytics" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Analytics Avançado</h2>
              <p className="text-gray-600">Insights e métricas de performance do sistema</p>
            </div>

            {/* KPIs Principais */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-br from-indigo-500 to-blue-600 text-white shadow-xl border-0">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-indigo-100 text-sm">Usuários Ativos</p>
                      <p className="text-3xl font-bold">2,847</p>
                      <p className="text-indigo-100 text-xs mt-1">+12% vs mês anterior</p>
                    </div>
                    <Users className="w-8 h-8 text-indigo-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-500 to-teal-600 text-white shadow-xl border-0">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100 text-sm">Uptime</p>
                      <p className="text-3xl font-bold">99.9%</p>
                      <p className="text-green-100 text-xs mt-1">SLA cumprido</p>
                    </div>
                    <TrendingUp className="w-8 h-8 text-green-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-500 to-pink-600 text-white shadow-xl border-0">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-100 text-sm">Tempo de Resposta</p>
                      <p className="text-3xl font-bold">1.2s</p>
                      <p className="text-purple-100 text-xs mt-1">Média das APIs</p>
                    </div>
                    <Zap className="w-8 h-8 text-purple-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-xl border-0">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-orange-100 text-sm">Throughput</p>
                      <p className="text-3xl font-bold">15.6K</p>
                      <p className="text-orange-100 text-xs mt-1">Req/min</p>
                    </div>
                    <Activity className="w-8 h-8 text-orange-200" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Gráficos de Performance */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="w-5 h-5 text-blue-600" />
                    <span>Performance por Hora</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-end justify-between space-x-2">
                    {Array.from({ length: 24 }, (_, i) => (
                      <div key={i} className="flex flex-col items-center space-y-2">
                        <div 
                          className="w-4 bg-gradient-to-t from-blue-500 to-blue-300 rounded-t"
                          style={{ height: `${Math.random() * 200 + 20}px` }}
                        ></div>
                        <span className="text-xs text-gray-500">{i}h</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="w-5 h-5 text-green-600" />
                    <span>Distribuição de Recursos</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">CPU</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="w-2/3 h-full bg-blue-500 rounded-full"></div>
                        </div>
                        <span className="text-sm">67%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Memória</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="w-5/6 h-full bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-sm">84%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Disco</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="w-1/2 h-full bg-purple-500 rounded-full"></div>
                        </div>
                        <span className="text-sm">45%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Rede</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="w-3/4 h-full bg-orange-500 rounded-full"></div>
                        </div>
                        <span className="text-sm">78%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Configurações */}
          <TabsContent value="settings" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Configurações do Sistema</h2>
              <p className="text-gray-600">Gerencie as configurações da plataforma</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Settings className="w-5 h-5 text-blue-600" />
                    <span>Configurações Gerais</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Notificações por Email</h4>
                        <p className="text-sm text-gray-600">Receber alertas por email</p>
                      </div>
                      <Button variant="outline" size="sm">Configurar</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Backup Automático</h4>
                        <p className="text-sm text-gray-600">Backup diário às 02:00</p>
                      </div>
                      <Button variant="outline" size="sm">Configurar</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Monitoramento</h4>
                        <p className="text-sm text-gray-600">Alertas de performance</p>
                      </div>
                      <Button variant="outline" size="sm">Configurar</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-red-600" />
                    <span>Configurações de Segurança</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Autenticação 2FA</h4>
                        <p className="text-sm text-gray-600">Autenticação de dois fatores</p>
                      </div>
                      <Badge className="bg-green-100 text-green-700">Ativo</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Firewall</h4>
                        <p className="text-sm text-gray-600">Proteção de rede</p>
                      </div>
                      <Badge className="bg-green-100 text-green-700">Ativo</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">SSL/TLS</h4>
                        <p className="text-sm text-gray-600">Certificados de segurança</p>
                      </div>
                      <Badge className="bg-green-100 text-green-700">Válido</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Integrações */}
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Workflow className="w-5 h-5 text-purple-600" />
                  <span>Integrações</span>
                </CardTitle>
                <CardDescription>Conecte com ferramentas externas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <Github className="w-8 h-8 text-gray-900" />
                      <Badge className="bg-green-100 text-green-700">Conectado</Badge>
                    </div>
                    <h4 className="font-semibold mb-2">GitHub</h4>
                    <p className="text-sm text-gray-600 mb-4">Integração com repositórios</p>
                    <Button variant="outline" size="sm" className="w-full">
                      Configurar
                    </Button>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <Database className="w-8 h-8 text-blue-600" />
                      <Badge className="bg-green-100 text-green-700">Conectado</Badge>
                    </div>
                    <h4 className="font-semibold mb-2">Supabase</h4>
                    <p className="text-sm text-gray-600 mb-4">Backend como serviço</p>
                    <Button variant="outline" size="sm" className="w-full">
                      Configurar
                    </Button>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <Cloud className="w-8 h-8 text-purple-600" />
                      <Badge className="bg-green-100 text-green-700">Conectado</Badge>
                    </div>
                    <h4 className="font-semibold mb-2">Vercel</h4>
                    <p className="text-sm text-gray-600 mb-4">Deploy e hosting</p>
                    <Button variant="outline" size="sm" className="w-full">
                      Configurar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}