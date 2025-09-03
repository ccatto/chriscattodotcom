'use client';
import React, { useState } from 'react';
import { ChevronRight, Code, Layers, Factory, Users, Zap, Grid, Eye, Server, User, MessageSquare } from 'lucide-react';
import LinkCatto from '@/app/components/AtomicDesign/atoms/LinkCatto/LinkCatto';

// Design Pattern Detail Components
const AtomicDesignDetailCatto: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="mt-6 contenta-6 bg-slate-100 dark:bg-slate-800 rounded-lg border-l-4 border-orange-500">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 flex items-center">
          <Layers className="mr-2 text-orange-500" size={24} />
          Atomic Design Pattern
        </h3>
        <button 
          onClick={onClose}
          className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50"
        >
          ×
        </button>
      </div>
      <p className="text-slate-700 dark:text-slate-300 mb-4">
        Atomic Design breaks down interfaces into fundamental building blocks: atoms, molecules, organisms, templates, and pages. 
        This methodology creates consistent, scalable design systems.
      </p>
      
      <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-md">
        <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">TypeScript Example:</h4>
        <pre className="text-sm text-slate-800 dark:text-slate-200 overflow-x-auto">
{`// Atom
interface ButtonProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, variant }) => (
  <button className={\`btn btn-\${variant}\`}>
    {children}
  </button>
);

// Molecule
interface SearchBoxProps {
  onSearch: (query: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => (
  <div className="flex">
    <input type="text" className="search-input" />
    <Button variant="primary" onClick={() => onSearch('query')}>
      Search
    </Button>
  </div>
);`}
        </pre>
      </div>
    </div>
  );
};

const FactoryPatternDetailCatto: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="mt-6 p-6 bg-slate-100 dark:bg-slate-800 rounded-lg border-l-4 border-orange-500">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 flex items-center">
          <Factory className="mr-2 text-orange-500" size={24} />
          Factory Pattern
        </h3>
        <button 
          onClick={onClose}
          className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50"
        >
          ×
        </button>
      </div>
      <p className="text-slate-700 dark:text-slate-300 mb-4">
        The Factory pattern creates objects without specifying their exact classes. It provides a way to encapsulate 
        object creation logic and promotes loose coupling between components. Here is a more detailed page focused on the <LinkCatto linkText="Factory Pattern" href="/code/software-architecture-design-patterns/factory-pattern" />
      </p>
      
      <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-md">
        <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">TypeScript Example:</h4>
        <pre className="text-sm text-slate-800 dark:text-slate-200 overflow-x-auto">
{`interface Logger {
  log(message: string): void;
}

class ConsoleLogger implements Logger {
  log(message: string): void {
    console.log(message);
  }
}

class FileLogger implements Logger {
  log(message: string): void {
    // Write to file
  }
}

class LoggerFactory {
  static createLogger(type: 'console' | 'file'): Logger {
    switch (type) {
      case 'console':
        return new ConsoleLogger();
      case 'file':
        return new FileLogger();
      default:
        throw new Error('Unknown logger type');
    }
  }
}

// Usage
const logger = LoggerFactory.createLogger('console');
logger.log('Hello World!');`}
        </pre>
      </div>
    </div>
  );
};

const SingletonPatternDetailCatto: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="mt-6 p-6 bg-slate-100 dark:bg-slate-800 rounded-lg border-l-4 border-orange-500">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 flex items-center">
          <Zap className="mr-2 text-orange-500" size={24} />
          Singleton Pattern
        </h3>
        <button 
          onClick={onClose}
          className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50"
        >
          ×
        </button>
      </div>
      <p className="text-slate-700 dark:text-slate-300 mb-4">
        Singleton ensures a class has only one instance and provides global access to it. Commonly used for 
        configuration managers, database connections, and logging services.
      </p>
      
      <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-md">
        <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">TypeScript Example:</h4>
        <pre className="text-sm text-slate-800 dark:text-slate-200 overflow-x-auto">
{`class ConfigManager {
  private static instance: ConfigManager;
  private config: Record<string, any> = {};

  private constructor() {}

  static getInstance(): ConfigManager {
    if (!ConfigManager.instance) {
      ConfigManager.instance = new ConfigManager();
    }
    return ConfigManager.instance;
  }

  setConfig(key: string, value: any): void {
    this.config[key] = value;
  }

  getConfig(key: string): any {
    return this.config[key];
  }
}

// Usage
const config = ConfigManager.getInstance();
config.setConfig('apiUrl', 'https://api.example.com');`}
        </pre>
      </div>
    </div>
  );
};

const ObserverPatternDetailCatto: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="mt-6 p-6 bg-slate-100 dark:bg-slate-800 rounded-lg border-l-4 border-orange-500">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 flex items-center">
          <Eye className="mr-2 text-orange-500" size={24} />
          Observer Pattern
        </h3>
        <button 
          onClick={onClose}
          className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50"
        >
          ×
        </button>
      </div>
      <p className="text-slate-700 dark:text-slate-300 mb-4">
        Observer pattern defines a one-to-many dependency between objects. When one object changes state, 
        all dependent objects are notified automatically. Essential for event-driven architectures.
      </p>
      
      <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-md">
        <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">TypeScript Example:</h4>
        <pre className="text-sm text-slate-800 dark:text-slate-200 overflow-x-auto">
{`interface Observer {
  update(data: any): void;
}

class Subject {
  private observers: Observer[] = [];

  subscribe(observer: Observer): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer): void {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify(data: any): void {
    this.observers.forEach(observer => observer.update(data));
  }
}

class EmailNotification implements Observer {
  update(data: any): void {
    console.log(\`Email sent: \${data.message}\`);
  }
}

// Usage
const eventSubject = new Subject();
const emailNotifier = new EmailNotification();
eventSubject.subscribe(emailNotifier);
eventSubject.notify({ message: 'User registered!' });`}
        </pre>
      </div>
    </div>
  );
};

const MvpPatternDetailCatto: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="mt-6 p-6 bg-slate-100 dark:bg-slate-800 rounded-lg border-l-4 border-orange-500">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 flex items-center">
          <Grid className="mr-2 text-orange-500" size={24} />
          MVP Pattern
        </h3>
        <button 
          onClick={onClose}
          className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50"
        >
          ×
        </button>
      </div>
      <p className="text-slate-700 dark:text-slate-300 mb-4">
        Model-View-Presenter separates concerns by having the Presenter handle UI logic and coordinate between 
        the View and Model. This makes components more testable and maintainable.
      </p>
      
      <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-md">
        <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">TypeScript Example:</h4>
        <pre className="text-sm text-slate-800 dark:text-slate-200 overflow-x-auto">
{`// Model
interface User {
  id: number;
  name: string;
  email: string;
}

// View Interface
interface UserView {
  displayUsers(users: User[]): void;
  showLoading(): void;
  hideLoading(): void;
}

// Presenter
class UserPresenter {
  constructor(private view: UserView, private userService: UserService) {}

  async loadUsers(): Promise<void> {
    this.view.showLoading();
    try {
      const users = await this.userService.getUsers();
      this.view.displayUsers(users);
    } catch (error) {
      console.error('Failed to load users', error);
    } finally {
      this.view.hideLoading();
    }
  }
}`}
        </pre>
      </div>
    </div>
  );
};

// Microservices Pattern Detail Component
const MicroservicesPatternDetailCatto: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="mt-6 p-6 bg-slate-100 dark:bg-slate-800 rounded-lg border-l-4 border-orange-500">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 flex items-center">
          <Server className="mr-2 text-orange-500" size={24} />
          Microservices Pattern
        </h3>
        <button 
          onClick={onClose}
          className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50"
        >
          ×
        </button>
      </div>
      <p className="text-slate-700 dark:text-slate-300 mb-4">
        The Microservices pattern structures an application as a collection of loosely coupled, independently deployable services. Each service focuses on a single business capability, communicates via APIs, and can be developed, deployed, and scaled independently.
      </p>
      
      <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-md">
        <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">TypeScript Example:</h4>
        <pre className="text-sm text-slate-800 dark:text-slate-200 overflow-x-auto">
{`// User Service (Microservice)
interface User {
  id: number;
  name: string;
}

class UserService {
  async getUser(id: number): Promise<User> {
    // Fetch from database or external API
    return { id, name: \`User \${id}\` };
  }
}

// Order Service (Microservice)
interface Order {
  id: number;
  userId: number;
  amount: number;
}

class OrderService {
  async createOrder(userId: number, amount: number): Promise<Order> {
    // Communicate with UserService via API
    const user = await fetch(\`http://user-service/users/\${userId}\`).then(res => res.json());
    return { id: Math.random(), userId, amount };
  }
}

// API Gateway
class ApiGateway {
  async handleRequest(path: string, data: any): Promise<any> {
    if (path.startsWith('/users')) {
      const userService = new UserService();
      return userService.getUser(data.id);
    } else if (path.startsWith('/orders')) {
      const orderService = new OrderService();
      return orderService.createOrder(data.userId, data.amount);
    }
  }
}

// Usage
const gateway = new ApiGateway();
gateway.handleRequest('/users', { id: 1 });`}
        </pre>
      </div>
    </div>
  );
};

// Layered Architecture Detail Component
const LayeredArchitectureDetailCatto: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="mt-6 p-6 bg-slate-100 dark:bg-slate-800 rounded-lg border-l-4 border-orange-500">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 flex items-center">
          <Layers className="mr-2 text-orange-500" size={24} />
          Layered Architecture (N-Tier)
        </h3>
        <button 
          onClick={onClose}
          className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50"
        >
          ×
        </button>
      </div>
      <p className="text-slate-700 dark:text-slate-300 mb-4">
        Layered Architecture organizes code into distinct layers (e.g., Presentation, Business Logic, Data Access) to separate concerns, improve maintainability, and enable modularity. Each layer has specific responsibilities and interacts only with adjacent layers.
      </p>
      
      <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-md">
        <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">TypeScript Example:</h4>
        <pre className="text-sm text-slate-800 dark:text-slate-200 overflow-x-auto">
{`// Data Access Layer
interface User {
  id: number;
  name: string;
}

class UserRepository {
  async getUser(id: number): Promise<User> {
    // Database query
    return { id, name: \`User \${id}\` };
  }
}

// Business Logic Layer
class UserService {
  constructor(private repository: UserRepository) {}

  async getUserDetails(id: number): Promise<User> {
    const user = await this.repository.getUser(id);
    // Apply business rules
    return user;
  }
}

// Presentation Layer
class UserController {
  constructor(private service: UserService) {}

  async handleGetUser(id: number): Promise<User> {
    return await this.service.getUserDetails(id);
  }
}

// Usage
const repository = new UserRepository();
const service = new UserService(repository);
const controller = new UserController(service);
controller.handleGetUser(1);`}
        </pre>
      </div>
    </div>
  );
};

// Client-Server Pattern Detail Component
const ClientServerPatternDetailCatto: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="mt-6 p-6 bg-slate-100 dark:bg-slate-800 rounded-lg border-l-4 border-orange-500">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 flex items-center">
          <User className="mr-2 text-orange-500" size={24} />
          Client-Server Pattern
        </h3>
        <button 
          onClick={onClose}
          className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50"
        >
          ×
        </button>
      </div>
      <p className="text-slate-700 dark:text-slate-300 mb-4">
        The Client-Server pattern divides an application into clients that request services and servers that provide them. Clients initiate communication, while servers handle requests and responses, enabling distributed systems.
      </p>
      
      <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-md">
        <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">TypeScript Example:</h4>
        <pre className="text-sm text-slate-800 dark:text-slate-200 overflow-x-auto">
{`// Server
class UserServer {
  async handleRequest(request: { type: string; data: any }): Promise<any> {
    if (request.type === 'getUser') {
      // Simulate database access
      return { id: request.data.id, name: \`User \${request.data.id}\` };
    }
    throw new Error('Unknown request type');
  }
}

// Client
class UserClient {
  constructor(private server: UserServer) {}

  async getUser(id: number): Promise<any> {
    const request = { type: 'getUser', data: { id } };
    return await this.server.handleRequest(request);
  }
}

// Usage
const server = new UserServer();
const client = new UserClient(server);
client.getUser(1).then(user => console.log(user));`}
        </pre>
      </div>
    </div>
  );
};

// Event-Driven Architecture Detail Component
const EventDrivenArchitectureDetailCatto: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="mt-6 p-6 bg-slate-100 dark:bg-slate-800 rounded-lg border-l-4 border-orange-500">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 flex items-center">
          <MessageSquare className="mr-2 text-orange-500" size={24} />
          Event-Driven Architecture
        </h3>
        <button 
          onClick={onClose}
          className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50"
        >
          ×
        </button>
      </div>
      <p className="text-slate-700 dark:text-slate-300 mb-4">
        Event-Driven Architecture enables systems to respond to events asynchronously. Components produce and consume events via a message broker, supporting both event-driven and message-driven designs for scalability and decoupling.
      </p>
      
      <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-md">
        <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">TypeScript Example:</h4>
        <pre className="text-sm text-slate-800 dark:text-slate-200 overflow-x-auto">
{`// Event Interface
interface Event {
  type: string;
  payload: any;
}

// Message Broker
class MessageBroker {
  private subscribers: { [eventType: string]: ((event: Event) => void)[] } = {};

  subscribe(eventType: string, callback: (event: Event) => void): void {
    if (!this.subscribers[eventType]) {
      this.subscribers[eventType] = [];
    }
    this.subscribers[eventType].push(callback);
  }

  publish(event: Event): void {
    const callbacks = this.subscribers[event.type] || [];
    callbacks.forEach(callback => callback(event));
  }
}

// Event Producer
class OrderService {
  constructor(private broker: MessageBroker) {}

  createOrder(orderId: number): void {
    const event: Event = { type: 'orderCreated', payload: { orderId } };
    this.broker.publish(event);
  }
}

// Event Consumer
class NotificationService {
  constructor(broker: MessageBroker) {
    broker.subscribe('orderCreated', (event: Event) => {
      console.log(\`Notification: Order \${event.payload.orderId} created\`);
    });
  }
}

// Usage
const broker = new MessageBroker();
const notificationService = new NotificationService(broker);
const orderService = new OrderService(broker);
orderService.createOrder(123);`}
        </pre>
      </div>
    </div>
  );
};

// Main Component
const DesignPatternSummaryCatto: React.FC = () => {
  const [activeDetail, setActiveDetail] = useState<string | null>(null);

  const patterns = [
    {
      id: 'atomic',
      name: 'Atomic Design',
      icon: Layers,
      description: 'Hierarchical approach to building interfaces from fundamental components',
      category: 'UI Architecture'
    },
    {
      id: 'factory',
      name: 'Factory Pattern',
      icon: Factory,
      description: 'Creates objects without specifying exact classes, promoting flexibility',
      category: 'Creational'
    },
    {
      id: 'singleton',
      name: 'Singleton Pattern',
      icon: Zap,
      description: 'Ensures single instance with global access point',
      category: 'Creational'
    },
    {
      id: 'observer',
      name: 'Observer Pattern',
      icon: Eye,
      description: 'Defines one-to-many dependencies for automatic state notifications',
      category: 'Behavioral'
    },
    {
      id: 'mvp',
      name: 'MVP Pattern',
      icon: Grid,
      description: 'Separates UI logic through Model-View-Presenter architecture',
      category: 'Architectural'
    },
    {
      id: 'microservices',
      name: 'Microservices Pattern',
      icon: Server,
      description: 'Decomposes applications into independent, loosely coupled services',
      category: 'Architectural'
    },
    {
      id: 'layered',
      name: 'Layered Architecture (N-Tier)',
      icon: Layers,
      description: 'Organizes code into layers for separation of concerns',
      category: 'Architectural'
    },
    {
      id: 'client-server',
      name: 'Client-Server Pattern',
      icon: User,
      description: 'Divides systems into clients requesting services and servers providing them',
      category: 'Architectural'
    },
    {
      id: 'event-driven',
      name: 'Event-Driven Architecture',
      icon: MessageSquare,
      description: 'Enables asynchronous communication through events and messages',
      category: 'Architectural'
    }
  ];

  const handlePatternClick = (patternId: string) => {
    setActiveDetail(activeDetail === patternId ? null : patternId);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white dark:bg-slate-950">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4">
          Software Architecture Design Patterns
        </h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            Design patterns are proven solutions to recurring problems in software design. They represent best practices 
            evolved over time by experienced developers, providing a common vocabulary and tested approaches for building 
            maintainable, scalable applications.
          </p>
          <p className="text-slate-600 dark:text-slate-400">
            These patterns are crucial in software architecture as they promote code reusability, improve communication 
            between developers, and help create robust systems that can evolve with changing requirements.
          </p>
        </div>
      </div>

      <div className="grid gap-6">
        {patterns.map((pattern) => {
          const IconComponent = pattern.icon;
          return (
            <div key={pattern.id} className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
              <div 
                className="p-6 bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition-colors"
                onClick={() => handlePatternClick(pattern.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-900 dark:bg-blue-800 rounded-lg">
                      <IconComponent className="text-orange-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">
                        {pattern.name}
                      </h3>
                      <p className="text-sm text-orange-600 dark:text-orange-400 font-medium">
                        {pattern.category}
                      </p>
                      <p className="text-slate-600 dark:text-slate-400 mt-1">
                        {pattern.description}
                      </p>
                    </div>
                  </div>
                  <ChevronRight 
                    className={`text-slate-400 transition-transform ${activeDetail === pattern.id ? 'rotate-90' : ''}`} 
                    size={20} 
                  />
                </div>
              </div>

              {/* Detail Components */}
              {pattern.id === 'atomic' && (
                <AtomicDesignDetailCatto 
                  isOpen={activeDetail === 'atomic'} 
                  onClose={() => setActiveDetail(null)} 
                />
              )}
              {pattern.id === 'factory' && (
                <FactoryPatternDetailCatto 
                  isOpen={activeDetail === 'factory'} 
                  onClose={() => setActiveDetail(null)} 
                />
              )}
              {pattern.id === 'singleton' && (
                <SingletonPatternDetailCatto 
                  isOpen={activeDetail === 'singleton'} 
                  onClose={() => setActiveDetail(null)} 
                />
              )}
              {pattern.id === 'observer' && (
                <ObserverPatternDetailCatto 
                  isOpen={activeDetail === 'observer'} 
                  onClose={() => setActiveDetail(null)} 
                />
              )}
              {pattern.id === 'mvp' && (
                <MvpPatternDetailCatto 
                  isOpen={activeDetail === 'mvp'} 
                  onClose={() => setActiveDetail(null)} 
                />
              )}
              {pattern.id === 'microservices' && (
                <MicroservicesPatternDetailCatto 
                  isOpen={activeDetail === 'microservices'} 
                  onClose={() => setActiveDetail(null)} 
                />
              )}
              {pattern.id === 'layered' && (
                <LayeredArchitectureDetailCatto 
                  isOpen={activeDetail === 'layered'} 
                  onClose={() => setActiveDetail(null)} 
                />
              )}
              {pattern.id === 'client-server' && (
                <ClientServerPatternDetailCatto 
                  isOpen={activeDetail === 'client-server'} 
                  onClose={() => setActiveDetail(null)} 
                />
              )}
              {pattern.id === 'event-driven' && (
                <EventDrivenArchitectureDetailCatto 
                  isOpen={activeDetail === 'event-driven'} 
                  onClose={() => setActiveDetail(null)} 
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 p-6 bg-blue-900 dark:bg-blue-800 rounded-lg">
        <div className="flex items-center mb-3">
          <Code className="text-orange-400 mr-2" size={24} />
          <h3 className="text-xl font-bold text-slate-50">ChrisCatto.com</h3>
        </div>
        <p className="text-slate-100">
          Explore these fundamental design patterns to build better software architecture. Each pattern solves 
          specific problems and contributes to cleaner, more maintainable codebases.
        </p>
      </div>
    </div>
  );
};

export default DesignPatternSummaryCatto;