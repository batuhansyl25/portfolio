import { useState } from 'react';
import { motion } from 'framer-motion';
import './DemoStyles.css';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
}

const initialUsers: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'active' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Viewer', status: 'inactive' },
  { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'Editor', status: 'active' },
  { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Viewer', status: 'active' },
];

export function AdminPanelDemo() {
  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState<string>('all');

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole === 'all' || user.role === selectedRole;
    return matchesSearch && matchesRole;
  });

  const toggleUserStatus = (id: number) => {
    setUsers(users.map(user => 
      user.id === id 
        ? { ...user, status: user.status === 'active' ? 'inactive' : 'active' }
        : user
    ));
  };

  return (
    <div className="demo-container admin-demo">
      <div className="demo-header">
        <h3>⚙️ Admin Control Panel - Interactive Demo</h3>
        <p>Powerful user management with advanced search and filtering</p>
      </div>

      <div className="admin-controls">
        <input
          type="text"
          className="demo-input search-input"
          placeholder="🔍 Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <select 
          className="demo-select"
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="all">All Roles</option>
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
          <option value="Viewer">Viewer</option>
        </select>

        <div className="user-stats">
          <span className="stat">
            <strong>{filteredUsers.length}</strong> users
          </span>
          <span className="stat">
            <strong>{filteredUsers.filter(u => u.status === 'active').length}</strong> active
          </span>
        </div>
      </div>

      <div className="users-table glass">
        <div className="table-header">
          <div className="table-cell">Name</div>
          <div className="table-cell">Email</div>
          <div className="table-cell">Role</div>
          <div className="table-cell">Status</div>
          <div className="table-cell">Actions</div>
        </div>

        {filteredUsers.map((user, index) => (
          <motion.div
            key={user.id}
            className="table-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <div className="table-cell">
              <div className="user-avatar">{user.name.charAt(0)}</div>
              {user.name}
            </div>
            <div className="table-cell">{user.email}</div>
            <div className="table-cell">
              <span className={`role-badge ${user.role.toLowerCase()}`}>
                {user.role}
              </span>
            </div>
            <div className="table-cell">
              <span className={`status-badge ${user.status}`}>
                {user.status}
              </span>
            </div>
            <div className="table-cell">
              <button
                className="action-btn"
                onClick={() => toggleUserStatus(user.id)}
              >
                {user.status === 'active' ? 'Deactivate' : 'Activate'}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
