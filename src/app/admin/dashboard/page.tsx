'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

type Priority = 'high' | 'medium' | 'low';
type Category = 'seo' | 'website' | 'business' | 'reviews' | 'other';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  priority: Priority;
  category: Category;
  createdAt: string;
}

const CATEGORY_COLORS: Record<Category, string> = {
  seo: 'bg-blue-900/50 text-blue-300 border-blue-700',
  website: 'bg-purple-900/50 text-purple-300 border-purple-700',
  business: 'bg-green-900/50 text-green-300 border-green-700',
  reviews: 'bg-yellow-900/50 text-yellow-300 border-yellow-700',
  other: 'bg-gray-700 text-gray-300 border-gray-600',
};

const PRIORITY_COLORS: Record<Priority, string> = {
  high: 'text-red-400',
  medium: 'text-yellow-400',
  low: 'text-green-400',
};

const DEFAULT_TODOS: Todo[] = [
  { id: '1', text: 'Fix all Lighthouse accessibility errors', completed: false, priority: 'high', category: 'website', createdAt: new Date().toISOString() },
  { id: '2', text: 'Improve Core Web Vitals scores (LCP, CLS, FID)', completed: false, priority: 'high', category: 'seo', createdAt: new Date().toISOString() },
  { id: '3', text: 'Add structured data / schema markup for local business', completed: false, priority: 'high', category: 'seo', createdAt: new Date().toISOString() },
  { id: '4', text: 'Get 5+ new Google reviews this month', completed: false, priority: 'high', category: 'reviews', createdAt: new Date().toISOString() },
  { id: '5', text: 'Build booking/scheduling system', completed: false, priority: 'medium', category: 'business', createdAt: new Date().toISOString() },
  { id: '6', text: 'Create inspection report forms (phone to paycheck workflow)', completed: false, priority: 'medium', category: 'business', createdAt: new Date().toISOString() },
  { id: '7', text: 'Add more service area pages (Bellevue, Kirkland, Redmond)', completed: false, priority: 'medium', category: 'seo', createdAt: new Date().toISOString() },
  { id: '8', text: 'Add FAQ schema to target featured snippets', completed: false, priority: 'medium', category: 'seo', createdAt: new Date().toISOString() },
  { id: '9', text: 'Build citation cleanup campaign (NAP consistency)', completed: false, priority: 'medium', category: 'seo', createdAt: new Date().toISOString() },
  { id: '10', text: 'Report fake/spam GMB listings to Google', completed: false, priority: 'high', category: 'business', createdAt: new Date().toISOString() },
];

export default function AdminDashboard() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');
  const [newPriority, setNewPriority] = useState<Priority>('medium');
  const [newCategory, setNewCategory] = useState<Category>('other');
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
  const router = useRouter();

  useEffect(() => {
    const saved = localStorage.getItem('mh_admin_todos');
    if (saved) {
      setTodos(JSON.parse(saved));
    } else {
      setTodos(DEFAULT_TODOS);
    }
  }, []);

  function saveTodos(updated: Todo[]) {
    setTodos(updated);
    localStorage.setItem('mh_admin_todos', JSON.stringify(updated));
  }

  function addTodo() {
    if (!newTodo.trim()) return;
    const todo: Todo = {
      id: Date.now().toString(),
      text: newTodo.trim(),
      completed: false,
      priority: newPriority,
      category: newCategory,
      createdAt: new Date().toISOString(),
    };
    saveTodos([todo, ...todos]);
    setNewTodo('');
  }

  function toggleTodo(id: string) {
    saveTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  }

  function deleteTodo(id: string) {
    saveTodos(todos.filter(t => t.id !== id));
  }

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
  }

  const filtered = todos.filter(t => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });

  const stats = {
    total: todos.length,
    completed: todos.filter(t => t.completed).length,
    high: todos.filter(t => t.priority === 'high' && !t.completed).length,
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-orange-400">Mad Hatter Admin</h1>
            <p className="text-gray-400 text-sm">SEO & Business Dashboard</p>
          </div>
          <button onClick={handleLogout} className="text-gray-400 hover:text-white text-sm transition-colors">
            Sign Out
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8 space-y-8">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-800 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-white">{stats.total}</div>
            <div className="text-gray-400 text-sm mt-1">Total Tasks</div>
          </div>
          <div className="bg-gray-800 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-green-400">{stats.completed}</div>
            <div className="text-gray-400 text-sm mt-1">Completed</div>
          </div>
          <div className="bg-gray-800 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-red-400">{stats.high}</div>
            <div className="text-gray-400 text-sm mt-1">High Priority</div>
          </div>
        </div>

        {/* Add Todo */}
        <div className="bg-gray-800 rounded-xl p-6 space-y-4">
          <h2 className="font-semibold text-lg">Add Task</h2>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addTodo()}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
            placeholder="What needs to be done?"
          />
          <div className="flex gap-3">
            <select
              value={newPriority}
              onChange={(e) => setNewPriority(e.target.value as Priority)}
              className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm text-white"
            >
              <option value="high">High Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="low">Low Priority</option>
            </select>
            <select
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value as Category)}
              className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm text-white"
            >
              <option value="seo">SEO</option>
              <option value="website">Website</option>
              <option value="business">Business</option>
              <option value="reviews">Reviews</option>
              <option value="other">Other</option>
            </select>
            <button
              onClick={addTodo}
              className="bg-orange-600 hover:bg-orange-500 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Add
            </button>
          </div>
        </div>

        {/* Filter */}
        <div className="flex gap-2">
          {(['all', 'active', 'completed'] as const).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
                filter === f ? 'bg-orange-600 text-white' : 'bg-gray-800 text-gray-400 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Todo List */}
        <div className="space-y-3">
          {filtered.map(todo => (
            <div
              key={todo.id}
              className={`bg-gray-800 rounded-xl p-4 flex items-start gap-4 transition-opacity ${
                todo.completed ? 'opacity-50' : ''
              }`}
            >
              <button
                onClick={() => toggleTodo(todo.id)}
                className={`mt-0.5 w-5 h-5 rounded border-2 flex-shrink-0 transition-colors ${
                  todo.completed
                    ? 'bg-orange-600 border-orange-600'
                    : 'border-gray-500 hover:border-orange-500'
                }`}
              />
              <div className="flex-1 min-w-0">
                <p className={`text-sm ${todo.completed ? 'line-through text-gray-500' : 'text-white'}`}>
                  {todo.text}
                </p>
                <div className="flex gap-2 mt-2">
                  <span className={`text-xs px-2 py-0.5 rounded border ${CATEGORY_COLORS[todo.category]}`}>
                    {todo.category}
                  </span>
                  <span className={`text-xs font-medium ${PRIORITY_COLORS[todo.priority]}`}>
                    {todo.priority}
                  </span>
                </div>
              </div>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-gray-600 hover:text-red-400 transition-colors text-lg leading-none"
              >
                x
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
