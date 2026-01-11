import { useState } from 'react';
import { motion } from 'framer-motion';
import './DemoStyles.css';

interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'inProgress' | 'done';
  priority: 'low' | 'medium' | 'high';
  assignee: string;
  tags: string[];
}

const initialTasks: Task[] = [
  { 
    id: '1', 
    title: 'Design user interface', 
    description: 'Create mockups for dashboard',
    status: 'done',
    priority: 'high',
    assignee: 'Sarah Chen',
    tags: ['Design', 'UI/UX']
  },
  { 
    id: '2', 
    title: 'Implement authentication', 
    description: 'Add OAuth2 and JWT support',
    status: 'inProgress',
    priority: 'high',
    assignee: 'Mike Ross',
    tags: ['Backend', 'Security']
  },
  { 
    id: '3', 
    title: 'Set up database', 
    description: 'Configure PostgreSQL with migrations',
    status: 'inProgress',
    priority: 'medium',
    assignee: 'Alex Kim',
    tags: ['Database', 'DevOps']
  },
  { 
    id: '4', 
    title: 'Write API endpoints', 
    description: 'RESTful API for CRUD operations',
    status: 'todo',
    priority: 'high',
    assignee: 'Jordan Lee',
    tags: ['Backend', 'API']
  },
  { 
    id: '5', 
    title: 'Deploy to production', 
    description: 'Setup CI/CD pipeline',
    status: 'todo',
    priority: 'medium',
    assignee: 'Taylor Swift',
    tags: ['DevOps', 'Cloud']
  },
  { 
    id: '6', 
    title: 'Write documentation', 
    description: 'API docs and user guides',
    status: 'todo',
    priority: 'low',
    assignee: 'Chris Evans',
    tags: ['Documentation']
  },
];

export function TaskFlowDemo() {
  const [tasks, setTasks] = useState(initialTasks);
  const [draggedTask, setDraggedTask] = useState<Task | null>(null);

  const handleDragStart = (task: Task) => {
    setDraggedTask(task);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (status: 'todo' | 'inProgress' | 'done') => {
    if (!draggedTask) return;
    
    setTasks(tasks.map(task => 
      task.id === draggedTask.id ? { ...task, status } : task
    ));
    setDraggedTask(null);
  };

  const getTasksByStatus = (status: 'todo' | 'inProgress' | 'done') => {
    return tasks.filter(task => task.status === status);
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return '#ef4444';
      case 'medium': return '#f59e0b';
      case 'low': return '#10b981';
      default: return '#6b7280';
    }
  };

  return (
    <div className="demo-container taskflow-demo">
      <div className="demo-header">
        <h3>🎯 TaskFlow Pro - Interactive Demo</h3>
        <p>Drag and drop tasks between columns • Real-time collaboration</p>
      </div>
      
      <div className="kanban-board">
        {(['todo', 'inProgress', 'done'] as const).map((status) => (
          <div 
            key={status} 
            className={`kanban-column ${draggedTask ? 'drag-active' : ''}`}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(status)}
          >
            <div className="column-header">
              <div className="column-title">
                <span className="column-icon">
                  {status === 'todo' && '📝'}
                  {status === 'inProgress' && '⚡'}
                  {status === 'done' && '✅'}
                </span>
                <h4>
                  {status === 'todo' && 'To Do'}
                  {status === 'inProgress' && 'In Progress'}
                  {status === 'done' && 'Done'}
                </h4>
              </div>
              <span className="task-count">{getTasksByStatus(status).length}</span>
            </div>
            
            <div className="task-list">
              {getTasksByStatus(status).map((task, index) => (
                <motion.div
                  key={task.id}
                  className={`task-card ${draggedTask?.id === task.id ? 'dragging' : ''}`}
                  draggable
                  onDragStart={() => handleDragStart(task)}
                  onDragEnd={() => setDraggedTask(null)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="task-header">
                    <div 
                      className="priority-indicator" 
                      style={{ backgroundColor: getPriorityColor(task.priority) }}
                      title={`${task.priority} priority`}
                    />
                    <div className="task-tags">
                      {task.tags.map(tag => (
                        <span key={tag} className="task-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                  
                  <h5 className="task-title">{task.title}</h5>
                  <p className="task-description">{task.description}</p>
                  
                  <div className="task-footer">
                    <div className="task-assignee">
                      <div className="assignee-avatar">
                        {getInitials(task.assignee)}
                      </div>
                      <span className="assignee-name">{task.assignee}</span>
                    </div>
                    <div className="task-grip">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <circle cx="4" cy="4" r="1.5"/>
                        <circle cx="4" cy="8" r="1.5"/>
                        <circle cx="4" cy="12" r="1.5"/>
                        <circle cx="8" cy="4" r="1.5"/>
                        <circle cx="8" cy="8" r="1.5"/>
                        <circle cx="8" cy="12" r="1.5"/>
                        <circle cx="12" cy="4" r="1.5"/>
                        <circle cx="12" cy="8" r="1.5"/>
                        <circle cx="12" cy="12" r="1.5"/>
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {getTasksByStatus(status).length === 0 && (
                <div className="empty-state">
                  <p>Drop tasks here</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
