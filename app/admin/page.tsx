"use client"

import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Flame, LogOut, CheckSquare, Users, BarChart3, Calendar, Plus, Circle, CheckCircle2, Shield, AlertTriangle, Star } from "lucide-react"

interface Todo {
  id: number
  text: string
  done: boolean
  category: string
}

const initialTodos: Todo[] = [
  { id: 1, text: "Fix cta.tsx contrast (text-stone-500 on dark bg)", done: false, category: "Website" },
  { id: 2, text: "Fix testimonials.tsx dead Google/Yelp links", done: false, category: "Website" },
  { id: 3, text: "Fix footer.tsx dead social links", done: false, category: "Website" },
  { id: 4, text: "Set up review request system (text after every job)", done: false, category: "GBP" },
  { id: 5, text: "Upload 10 real job photos to GBP", done: false, category: "GBP" },
  { id: 6, text: "Write first GBP post this week", done: false, category: "GBP" },
  { id: 7, text: "Respond to all existing GBP reviews", done: false, category: "GBP" },
  { id: 8, text: "Follow up on AG complaint (filed Mar 9)", done: false, category: "Legal" },
  { id: 9, text: "Check Chimcare L&I status monthly", done: false, category: "Legal" },
  { id: 10, text: "Follow up with Google Trust & Safety", done: false, category: "Legal" },
  { id: 11, text: "Verify llms.txt allows GPTBot, ClaudeBot, PerplexityBot", done: false, category: "SEO" },
  { id: 12, text: "Add FAQ schema to all service pages", done: false, category: "SEO" },
  { id: 13, text: "Run Lighthouse audit - target 95+ all scores", done: false, category: "SEO" },
  { id: 14, text: "Get BBB listing with active WA license", done: false, category: "SEO" },
]

const categoryColors: Record<string, string> = {
  Website: "bg-blue-500/20 text-blue-400",
  GBP: "bg-amber-500/20 text-amber-400",
  SEO: "bg-green-500/20 text-green-400",
  Legal: "bg-red-500/20 text-red-400",
  LLM: "bg-purple-500/20 text-purple-400",
}

export default function AdminDashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [todos, setTodos] = useState<Todo[]>(initialTodos)
  const [newTodo, setNewTodo] = useState("")
  const [newCategory, setNewCategory] = useState("Website")
  const [filter, setFilter] = useState("All")

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login")
    }
  }, [status, router])

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-stone-900 flex items-center justify-center">
        <Flame className="w-8 h-8 text-amber-500 animate-pulse" />
      </div>
    )
  }

  if (!session) return null

  const toggleTodo = (id: number) => {
    setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }

  const addTodo = () => {
    if (!newTodo.trim()) return
    setTodos([...todos, { id: Date.now(), text: newTodo, done: false, category: newCategory }])
    setNewTodo("")
  }

  const filteredTodos = filter === "All" ? todos : todos.filter(t => t.category === filter)
  const completedCount = todos.filter(t => t.done).length

  return (
    <div className="min-h-screen bg-stone-900">
      <header className="bg-stone-800 border-b border-stone-700 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
              <Flame className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-white font-bold">Mad Hatter Admin</h1>
              <p className="text-stone-400 text-xs">Welcome back, {session.user?.name}</p>
            </div>
          </div>
          <button
            onClick={() => signOut({ callbackUrl: "/admin/login" })}
            className="flex items-center gap-2 text-stone-400 hover:text-white transition-colors text-sm"
          >
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8 space-y-6">

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Tasks Done", value: `${completedCount}/${todos.length}`, icon: CheckSquare, color: "text-green-400" },
            { label: "GBP Reviews", value: "51", icon: Star, color: "text-amber-400" },
            { label: "Competitors Flagged", value: "3", icon: AlertTriangle, color: "text-red-400" },
            { label: "Years Active", value: "45+", icon: Shield, color: "text-blue-400" },
          ].map((s, i) => (
            <div key={i} className="bg-stone-800 border border-stone-700 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-stone-400 text-xs">{s.label}</span>
                <s.icon className={`w-4 h-4 ${s.color}`} />
              </div>
              <p className="text-white text-xl font-bold">{s.value}</p>
            </div>
          ))}
        </div>

        {/* Todos */}
        <div className="bg-stone-800 border border-stone-700 rounded-xl p-6">
          <h2 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
            <CheckSquare className="w-5 h-5 text-amber-500" /> Action Items
          </h2>

          {/* Filters */}
          <div className="flex gap-2 mb-4 flex-wrap">
            {["All", "Website", "GBP", "SEO", "Legal", "LLM"].map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  filter === cat
                    ? "bg-amber-500 text-stone-900"
                    : "bg-stone-700 text-stone-300 hover:bg-stone-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Add Todo */}
          <div className="flex gap-2 mb-4">
            <select
              value={newCategory}
              onChange={e => setNewCategory(e.target.value)}
              className="bg-stone-900/50 border border-stone-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-amber-500"
            >
              {["Website", "GBP", "SEO", "Legal", "LLM"].map(c => <option key={c}>{c}</option>)}
            </select>
            <input
              type="text"
              value={newTodo}
              onChange={e => setNewTodo(e.target.value)}
              onKeyDown={e => e.key === "Enter" && addTodo()}
              placeholder="Add a task... (Enter to add)"
              className="flex-1 bg-stone-900/50 border border-stone-600 rounded-lg px-4 py-2 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-amber-500"
            />
            <button
              onClick={addTodo}
              className="bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold px-4 py-2 rounded-lg flex items-center gap-1 text-sm transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* List */}
          <div className="space-y-2">
            {filteredTodos.map(todo => (
              <div
                key={todo.id}
                onClick={() => toggleTodo(todo.id)}
                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                  todo.done ? "opacity-50" : "bg-stone-900/40 hover:bg-stone-700/50"
                }`}
              >
                {todo.done
                  ? <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  : <Circle className="w-5 h-5 text-stone-500 shrink-0" />
                }
                <span className={`flex-1 text-sm ${todo.done ? "text-stone-500 line-through" : "text-white"}`}>
                  {todo.text}
                </span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${categoryColors[todo.category] ?? "bg-stone-600 text-stone-300"}`}>
                  {todo.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Competitor Status */}
        <div className="bg-stone-800 border border-stone-700 rounded-xl p-6">
          <h2 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-500" /> Competitor L&I Status
          </h2>
          <div className="space-y-3">
            {[
              { name: "Safe Chimney Inc", owner: "Eliahou Perez / Shneor Cohen", status: "Active", color: "text-yellow-400", note: "669 reviews — review manipulation suspected" },
              { name: "Chimcare Seattle", owner: "Jesse Caleb Peralta (network-linked)", status: "EXPIRED / SUSPENDED", color: "text-red-400", note: "Operating unlicensed since Apr 2024 — no bond" },
              { name: "Express GRG Doors", owner: "Eliahou Perez", status: "SUSPENDED", color: "text-red-400", note: "No bond, no insurance — suspended Jun 2025" },
            ].map((c, i) => (
              <div key={i} className="bg-stone-900/50 rounded-lg p-4 border border-stone-700">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-white font-medium">{c.name}</p>
                    <p className="text-stone-400 text-xs mt-0.5">{c.owner}</p>
                    <p className="text-stone-500 text-xs mt-1">{c.note}</p>
                  </div>
                  <span className={`text-xs font-bold shrink-0 ${c.color}`}>{c.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  )
}
