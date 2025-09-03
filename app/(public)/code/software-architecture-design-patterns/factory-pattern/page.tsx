'use client';
import React, { useState } from 'react';
import { Factory, CheckCircle, AlertTriangle, Lightbulb, ArrowRight, Book, Zap, Users, Settings, Landmark } from 'lucide-react';

const FactoryPatternDetailPageCatto: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('overview');

  const sections = [
    { id: 'overview', title: 'Pattern Overview', icon: Book },
    { id: 'simple', title: 'Simple Factory', icon: Zap },
    { id: 'method', title: 'Factory Method', icon: Settings },
    { id: 'abstract', title: 'Abstract Factory', icon: Users },
    { id: 'benefits', title: 'Benefits & Drawbacks', icon: CheckCircle },
    { id: 'real-world', title: 'Real-World Examples', icon: Lightbulb }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-8 rounded-lg text-white">
              <h2 className="text-3xl font-bold mb-4 flex items-center">
                <Factory className="mr-3 text-orange-400" size={32} />
                Factory Pattern Deep Dive
              </h2>
              <p className="text-xl text-blue-100">
                The Factory Pattern is a creational design pattern that provides an interface for creating objects 
                without specifying their exact classes. It encapsulates object creation logic and promotes loose coupling.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3">
                  What Problem Does It Solve?
                </h3>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 text-orange-500" size={16} />
                    Eliminates tight coupling between client code and concrete classes
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 text-orange-500" size={16} />
                    Centralizes object creation logic for easier maintenance
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 text-orange-500" size={16} />
                    Makes code more flexible and extensible
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 text-orange-500" size={16} />
                    Supports the Open-Closed Principle
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3">
                  Three Main Variants
                </h3>
                <div className="space-y-3">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded">
                    <h4 className="font-semibold text-orange-800 dark:text-orange-300">Simple Factory</h4>
                    <p className="text-sm text-orange-700 dark:text-orange-400">Static method creates objects based on parameters</p>
                  </div>
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-300">Factory Method</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-400">Subclasses decide which objects to create</p>
                  </div>
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded">
                    <h4 className="font-semibold text-green-800 dark:text-green-300">Abstract Factory</h4>
                    <p className="text-sm text-green-700 dark:text-green-400">Creates families of related objects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'simple':
        return (
          <div className="space-y-6">
            <div className="border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-900/20 p-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-3">
                Simple Factory Pattern
              </h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                The Simple Factory isn't technically a design pattern but a programming idiom. It encapsulates 
                object creation in a single method, making it easy to manage and modify creation logic.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-4">C# Implementation Example:</h3>
              <pre className="text-sm text-slate-800 dark:text-slate-200 overflow-x-auto bg-white dark:bg-slate-950 p-4 rounded border">
{`// Product Interface
public interface IVehicle
{
    void Start();
    void Stop();
    string GetVehicleType();
}

// Concrete Products
public class Car : IVehicle
{
    public void Start()
    {
        Console.WriteLine("Car engine started with ignition key");
    }

    public void Stop()
    {
        Console.WriteLine("Car engine stopped");
    }

    public string GetVehicleType()
    {
        return "Automobile";
    }
}

public class Motorcycle : IVehicle
{
    public void Start()
    {
        Console.WriteLine("Motorcycle started with kick/button");
    }

    public void Stop()
    {
        Console.WriteLine("Motorcycle engine stopped");
    }

    public string GetVehicleType()
    {
        return "Two-Wheeler";
    }
}

public class Truck : IVehicle
{
    public void Start()
    {
        Console.WriteLine("Truck diesel engine started");
    }

    public void Stop()
    {
        Console.WriteLine("Truck engine stopped with air brakes");
    }

    public string GetVehicleType()
    {
        return "Commercial Vehicle";
    }
}

// Simple Factory
public static class VehicleFactory
{
    public static IVehicle CreateVehicle(string vehicleType)
    {
        return vehicleType.ToLower() switch
        {
            "car" => new Car(),
            "motorcycle" => new Motorcycle(),
            "truck" => new Truck(),
            _ => throw new ArgumentException($"Unknown vehicle type: {vehicleType}")
        };
    }
}

// Client Usage
public class VehicleService
{
    public void ProcessVehicle(string type)
    {
        try
        {
            IVehicle vehicle = VehicleFactory.CreateVehicle(type);
            
            Console.WriteLine($"Processing {vehicle.GetVehicleType()}");
            vehicle.Start();
            
            // Simulate some work
            Thread.Sleep(1000);
            
            vehicle.Stop();
        }
        catch (ArgumentException ex)
        {
            Console.WriteLine($"Error: {ex.Message}");
        }
    }
}`}
              </pre>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2 flex items-center">
                  <CheckCircle className="mr-2" size={16} />
                  Advantages
                </h4>
                <ul className="text-sm text-green-700 dark:text-green-400 space-y-1">
                  <li>• Simple to understand and implement</li>
                  <li>• Centralizes creation logic</li>
                  <li>• Easy to add new product types</li>
                  <li>• Client doesn't need to know concrete classes</li>
                </ul>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2 flex items-center">
                  <AlertTriangle className="mr-2" size={16} />
                  Disadvantages
                </h4>
                <ul className="text-sm text-red-700 dark:text-red-400 space-y-1">
                  <li>• Violates Open-Closed Principle</li>
                  <li>• Factory becomes a God Object</li>
                  <li>• Hard to unit test creation logic</li>
                  <li>• Static methods can't be overridden</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'method':
        return (
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 p-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-3">
                Factory Method Pattern
              </h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                The Factory Method pattern defines an interface for creating objects, but lets subclasses decide 
                which classes to instantiate. It delegates object creation to subclasses while maintaining a common interface.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-4">C# Implementation Example:</h3>
              <pre className="text-sm text-slate-800 dark:text-slate-200 overflow-x-auto bg-white dark:bg-slate-950 p-4 rounded border">
{`// Product Interface
public interface ILogger
{
    void Log(string message);
    void LogError(string message);
    void LogWarning(string message);
}

// Concrete Products
public class FileLogger : ILogger
{
    private readonly string _filePath;

    public FileLogger(string filePath)
    {
        _filePath = filePath;
    }

    public void Log(string message)
    {
        File.AppendAllText(_filePath, $"[INFO] {DateTime.Now}: {message}\\n");
    }

    public void LogError(string message)
    {
        File.AppendAllText(_filePath, $"[ERROR] {DateTime.Now}: {message}\\n");
    }

    public void LogWarning(string message)
    {
        File.AppendAllText(_filePath, $"[WARN] {DateTime.Now}: {message}\\n");
    }
}

public class DatabaseLogger : ILogger
{
    private readonly string _connectionString;

    public DatabaseLogger(string connectionString)
    {
        _connectionString = connectionString;
    }

    public void Log(string message)
    {
        // Simulate database logging
        Console.WriteLine($"DB LOG [INFO]: {message}");
    }

    public void LogError(string message)
    {
        Console.WriteLine($"DB LOG [ERROR]: {message}");
    }

    public void LogWarning(string message)
    {
        Console.WriteLine($"DB LOG [WARN]: {message}");
    }
}

public class ConsoleLogger : ILogger
{
    public void Log(string message)
    {
        Console.ForegroundColor = ConsoleColor.White;
        Console.WriteLine($"[INFO] {message}");
        Console.ResetColor();
    }

    public void LogError(string message)
    {
        Console.ForegroundColor = ConsoleColor.Red;
        Console.WriteLine($"[ERROR] {message}");
        Console.ResetColor();
    }

    public void LogWarning(string message)
    {
        Console.ForegroundColor = ConsoleColor.Yellow;
        Console.WriteLine($"[WARN] {message}");
        Console.ResetColor();
    }
}

// Creator Abstract Class
public abstract class LoggerFactory
{
    // Factory Method - to be implemented by subclasses
    public abstract ILogger CreateLogger();

    // Template method that uses the factory method
    public void ProcessLog(string message, LogLevel level)
    {
        ILogger logger = CreateLogger();
        
        switch (level)
        {
            case LogLevel.Info:
                logger.Log(message);
                break;
            case LogLevel.Warning:
                logger.LogWarning(message);
                break;
            case LogLevel.Error:
                logger.LogError(message);
                break;
        }
    }
}

public enum LogLevel
{
    Info,
    Warning,
    Error
}

// Concrete Creators
public class FileLoggerFactory : LoggerFactory
{
    private readonly string _filePath;

    public FileLoggerFactory(string filePath)
    {
        _filePath = filePath;
    }

    public override ILogger CreateLogger()
    {
        return new FileLogger(_filePath);
    }
}

public class DatabaseLoggerFactory : LoggerFactory
{
    private readonly string _connectionString;

    public DatabaseLoggerFactory(string connectionString)
    {
        _connectionString = connectionString;
    }

    public override ILogger CreateLogger()
    {
        return new DatabaseLogger(_connectionString);
    }
}

public class ConsoleLoggerFactory : LoggerFactory
{
    public override ILogger CreateLogger()
    {
        return new ConsoleLogger();
    }
}

// Client Usage
public class ApplicationService
{
    private readonly LoggerFactory _loggerFactory;

    public ApplicationService(LoggerFactory loggerFactory)
    {
        _loggerFactory = loggerFactory;
    }

    public void DoWork()
    {
        _loggerFactory.ProcessLog("Application started", LogLevel.Info);
        
        try
        {
            // Simulate some work
            ProcessBusinessLogic();
            
            _loggerFactory.ProcessLog("Work completed successfully", LogLevel.Info);
        }
        catch (Exception ex)
        {
            _loggerFactory.ProcessLog($"Error occurred: {ex.Message}", LogLevel.Error);
        }
    }

    private void ProcessBusinessLogic()
    {
        // Simulate business logic
        _loggerFactory.ProcessLog("Processing business logic", LogLevel.Info);
    }
}

// Usage Example
class Program
{
    static void Main(string[] args)
    {
        // Can easily switch between different logger types
        LoggerFactory factory = new ConsoleLoggerFactory();
        // LoggerFactory factory = new FileLoggerFactory(@"C:\\logs\\app.log");
        // LoggerFactory factory = new DatabaseLoggerFactory("Server=.;Database=Logs;");

        ApplicationService service = new ApplicationService(factory);
        service.DoWork();
    }
}`}
              </pre>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Key Benefits of Factory Method:</h4>
              <ul className="text-blue-700 dark:text-blue-400 space-y-1">
                <li>• <strong>Open-Closed Principle:</strong> Easy to add new product types without modifying existing code</li>
                <li>• <strong>Single Responsibility:</strong> Each factory has one reason to change</li>
                <li>• <strong>Dependency Inversion:</strong> Depends on abstractions, not concretions</li>
                <li>• <strong>Testability:</strong> Easy to mock and unit test</li>
              </ul>
            </div>
          </div>
        );

      case 'abstract':
        return (
          <div className="space-y-6">
            <div className="border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20 p-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-3">
                Abstract Factory Pattern
              </h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                The Abstract Factory pattern provides an interface for creating families of related or dependent objects 
                without specifying their concrete classes. It's useful when you need to ensure compatibility between products.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-4">C# Implementation Example - UI Theme System:</h3>
              <pre className="text-sm text-slate-800 dark:text-slate-200 overflow-x-auto bg-white dark:bg-slate-950 p-4 rounded border">
{`// Abstract Products
public interface IButton
{
    void Render();
    void Click();
}

public interface ITextBox
{
    void Render();
    void SetText(string text);
    string GetText();
}

public interface ICheckBox
{
    void Render();
    void SetChecked(bool isChecked);
    bool IsChecked();
}

// Concrete Products for Windows Theme
public class WindowsButton : IButton
{
    public void Render()
    {
        Console.WriteLine("Rendering Windows-style button with system theme");
    }

    public void Click()
    {
        Console.WriteLine("Windows button clicked with system sound");
    }
}

public class WindowsTextBox : ITextBox
{
    private string _text = "";

    public void Render()
    {
        Console.WriteLine("Rendering Windows-style textbox with border");
    }

    public void SetText(string text)
    {
        _text = text;
        Console.WriteLine($"Windows textbox text set to: {text}");
    }

    public string GetText()
    {
        return _text;
    }
}

public class WindowsCheckBox : ICheckBox
{
    private bool _isChecked = false;

    public void Render()
    {
        Console.WriteLine("Rendering Windows-style checkbox");
    }

    public void SetChecked(bool isChecked)
    {
        _isChecked = isChecked;
        Console.WriteLine($"Windows checkbox {(isChecked ? "checked" : "unchecked")}");
    }

    public bool IsChecked()
    {
        return _isChecked;
    }
}

// Concrete Products for MacOS Theme
public class MacButton : IButton
{
    public void Render()
    {
        Console.WriteLine("Rendering Mac-style button with rounded corners");
    }

    public void Click()
    {
        Console.WriteLine("Mac button clicked with subtle animation");
    }
}

public class MacTextBox : ITextBox
{
    private string _text = "";

    public void Render()
    {
        Console.WriteLine("Rendering Mac-style textbox with focus ring");
    }

    public void SetText(string text)
    {
        _text = text;
        Console.WriteLine($"Mac textbox text set to: {text}");
    }

    public string GetText()
    {
        return _text;
    }
}

public class MacCheckBox : ICheckBox
{
    private bool _isChecked = false;

    public void Render()
    {
        Console.WriteLine("Rendering Mac-style checkbox with smooth transition");
    }

    public void SetChecked(bool isChecked)
    {
        _isChecked = isChecked;
        Console.WriteLine($"Mac checkbox {(isChecked ? "checked" : "unchecked")} with animation");
    }

    public bool IsChecked()
    {
        return _isChecked;
    }
}

// Abstract Factory
public interface IUIFactory
{
    IButton CreateButton();
    ITextBox CreateTextBox();
    ICheckBox CreateCheckBox();
}

// Concrete Factories
public class WindowsUIFactory : IUIFactory
{
    public IButton CreateButton()
    {
        return new WindowsButton();
    }

    public ITextBox CreateTextBox()
    {
        return new WindowsTextBox();
    }

    public ICheckBox CreateCheckBox()
    {
        return new WindowsCheckBox();
    }
}

public class MacUIFactory : IUIFactory
{
    public IButton CreateButton()
    {
        return new MacButton();
    }

    public ITextBox CreateTextBox()
    {
        return new MacTextBox();
    }

    public ICheckBox CreateCheckBox()
    {
        return new MacCheckBox();
    }
}

// Client Application
public class Application
{
    private readonly IButton _button;
    private readonly ITextBox _textBox;
    private readonly ICheckBox _checkBox;

    public Application(IUIFactory factory)
    {
        _button = factory.CreateButton();
        _textBox = factory.CreateTextBox();
        _checkBox = factory.CreateCheckBox();
    }

    public void RenderUI()
    {
        Console.WriteLine("=== Rendering Application UI ===");
        _button.Render();
        _textBox.Render();
        _checkBox.Render();
        Console.WriteLine();
    }

    public void SimulateUserInteraction()
    {
        Console.WriteLine("=== Simulating User Interaction ===");
        _textBox.SetText("Hello World!");
        _checkBox.SetChecked(true);
        _button.Click();
        
        Console.WriteLine($"Text content: {_textBox.GetText()}");
        Console.WriteLine($"Checkbox state: {_checkBox.IsChecked()}");
    }
}

// Factory Provider (often configured via settings)
public static class UIFactoryProvider
{
    public static IUIFactory GetFactory(string platform)
    {
        return platform.ToLower() switch
        {
            "windows" => new WindowsUIFactory(),
            "mac" => new MacUIFactory(),
            _ => throw new PlatformNotSupportedException($"Platform {platform} not supported")
        };
    }
}

// Usage Example
class Program
{
    static void Main(string[] args)
    {
        // Platform could be detected automatically or set via configuration
        string platform = DetectPlatform(); // "windows" or "mac"
        
        try
        {
            IUIFactory factory = UIFactoryProvider.GetFactory(platform);
            Application app = new Application(factory);
            
            app.RenderUI();
            app.SimulateUserInteraction();
        }
        catch (PlatformNotSupportedException ex)
        {
            Console.WriteLine($"Error: {ex.Message}");
        }
    }
    
    static string DetectPlatform()
    {
        // Simplified platform detection
        return Environment.OSVersion.Platform == PlatformID.Unix ? "mac" : "windows";
    }
}`}
              </pre>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Abstract Factory Advantages:</h4>
              <ul className="text-green-700 dark:text-green-400 space-y-1">
                <li>• <strong>Product Family Consistency:</strong> Ensures related products work together</li>
                <li>• <strong>Platform Independence:</strong> Easy to support multiple platforms</li>
                <li>• <strong>Isolation:</strong> Client code is isolated from concrete classes</li>
                <li>• <strong>Easy Switching:</strong> Change entire product families by switching factories</li>
              </ul>
            </div>
          </div>
        );

      case 'benefits':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">
              Benefits & Drawbacks Analysis
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-4 flex items-center">
                  <CheckCircle className="mr-2" size={24} />
                  Key Benefits
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-700 dark:text-green-400">Loose Coupling</h4>
                    <p className="text-sm text-green-600 dark:text-green-500">
                      Client code doesn't depend on concrete classes, making it more flexible and maintainable.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700 dark:text-green-400">Single Responsibility</h4>
                    <p className="text-sm text-green-600 dark:text-green-500">
                      Object creation logic is separated from business logic, following SRP.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700 dark:text-green-400">Open-Closed Principle</h4>
                    <p className="text-sm text-green-600 dark:text-green-500">
                      Easy to add new product types without modifying existing code.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700 dark:text-green-400">Testability</h4>
                    <p className="text-sm text-green-600 dark:text-green-500">
                      Mock objects can be easily injected for unit testing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
                <h3 className="text-xl font-semibold text-red-800 dark:text-red-300 mb-4 flex items-center">
                  <AlertTriangle className="mr-2" size={24} />
                  Potential Drawbacks
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-red-700 dark:text-red-400">Complexity</h4>
                    <p className="text-sm text-red-600 dark:text-red-500">
                      Adds layers of abstraction that might be overkill for simple scenarios.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 dark:text-red-400">Code Volume</h4>
                    <p className="text-sm text-red-600 dark:text-red-500">
                      Requires more classes and interfaces, increasing codebase size.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 dark:text-red-400">Learning Curve</h4>
                    <p className="text-sm text-red-600 dark:text-red-500">
                      Team members need to understand the pattern to maintain code effectively.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 dark:text-red-400">Runtime Overhead</h4>
                    <p className="text-sm text-red-600 dark:text-red-500">
                      Additional method calls and object creation can impact performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-3">
                When to Use Factory Pattern
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">✅ Use When:</h4>
                  <ul className="text-sm text-blue-600 dark:text-blue-500 space-y-1">
                    <li>• Object creation logic is complex</li>
                    <li>• You need to support multiple product variants</li>
                    <li>• Client shouldn't know concrete classes</li>
                    <li>• You want to centralize creation logic</li>
                    <li>• System needs to be independent of product creation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">❌ Avoid When:</h4>
                  <ul className="text-sm text-blue-600 dark:text-blue-500 space-y-1">
                    <li>• Simple object creation with no variants</li>
                    <li>• Performance is critical and overhead matters</li>
                    <li>• Team is unfamiliar with design patterns</li>
                    <li>• Product types are fixed and won't change</li>
                    <li>• Adding abstraction provides no benefit</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'real-world':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">
              Real-World Examples & Applications
            </h2>

            <div className="grid gap-6">
              <div className="bg-gradient-to-r from-purple-100 to-purple-50 dark:from-purple-900/30 dark:to-purple-800/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-300 mb-4">
                  .NET Framework Examples
                </h3>
                <div className="space-y-3">
                  <div className="bg-white dark:bg-slate-800 p-4 rounded">
                    <h4 className="font-semibold text-slate-900 dark:text-slate-50">DbProviderFactory</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                      Creates database-specific connection objects (SqlConnection, OracleConnection, etc.)
                    </p>
                    <code className="text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded block">
                      DbProviderFactory factory = DbProviderFactories.GetFactory("System.Data.SqlClient");
                    </code>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-4 rounded">
                    <h4 className="font-semibold text-slate-900 dark:text-slate-50">XmlReader.Create()</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                      Factory method that creates appropriate XML reader based on input source
                    </p>
                    <code className="text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded block">
                      XmlReader reader = XmlReader.Create("data.xml", settings);
                    </code>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-100 to-indigo-50 dark:from-indigo-900/30 dark:to-indigo-800/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-indigo-800 dark:text-indigo-300 mb-4">
                  Enterprise Applications
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-slate-800 p-4 rounded">
                    <h4 className="font-semibold text-slate-900 dark:text-slate-50">Payment Processing</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      PaymentFactory creates different payment processors (PayPal, Stripe, Square) 
                      based on configuration or user selection.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-4 rounded">
                    <h4 className="font-semibold text-slate-900 dark:text-slate-50">Notification Systems</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      NotificationFactory creates email, SMS, push notification, or Slack 
                      message senders based on user preferences.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-4 rounded">
                    <h4 className="font-semibold text-slate-900 dark:text-slate-50">Report Generation</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      ReportFactory creates PDF, Excel, CSV, or JSON report generators 
                      based on requested format.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-4 rounded">
                    <h4 className="font-semibold text-slate-900 dark:text-slate-50">Cloud Storage</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      StorageFactory creates AWS S3, Azure Blob, or Google Cloud Storage 
                      clients based on deployment environment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-4">
                  Advanced Factory Pattern: Dependency Injection Integration
                </h3>
                <pre className="text-sm text-slate-800 dark:text-slate-200 overflow-x-auto bg-white dark:bg-slate-950 p-4 rounded border">
{`// Modern C# approach with Dependency Injection
public interface IEmailServiceFactory
{
    IEmailService CreateEmailService(EmailProvider provider);
}

public class EmailServiceFactory : IEmailServiceFactory
{
    private readonly IServiceProvider _serviceProvider;

    public EmailServiceFactory(IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public IEmailService CreateEmailService(EmailProvider provider)
    {
        return provider switch
        {
            EmailProvider.SendGrid => _serviceProvider.GetRequiredService<SendGridEmailService>(),
            EmailProvider.MailGun => _serviceProvider.GetRequiredService<MailGunEmailService>(),
            EmailProvider.AmazonSES => _serviceProvider.GetRequiredService<AmazonSESEmailService>(),
            _ => throw new ArgumentException($"Unsupported email provider: {provider}")
        };
    }
}

// Registration in Program.cs (ASP.NET Core)
builder.Services.AddScoped<IEmailServiceFactory, EmailServiceFactory>();
builder.Services.AddScoped<SendGridEmailService>();
builder.Services.AddScoped<MailGunEmailService>();
builder.Services.AddScoped<AmazonSESEmailService>();

// Usage in Controller
[ApiController]
public class NotificationController : ControllerBase
{
    private readonly IEmailServiceFactory _emailFactory;

    public NotificationController(IEmailServiceFactory emailFactory)
    {
        _emailFactory = emailFactory;
    }

    [HttpPost("send-email")]
    public async Task<IActionResult> SendEmail([FromBody] EmailRequest request)
    {
        var emailService = _emailFactory.CreateEmailService(request.Provider);
        await emailService.SendAsync(request.To, request.Subject, request.Body);
        return Ok();
    }
}`}
                </pre>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-300 mb-3 flex items-center">
                  <Lightbulb className="mr-2" size={20} />
                  Best Practices & Tips
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-yellow-700 dark:text-yellow-400 mb-2">Design Guidelines</h4>
                    <ul className="text-sm text-yellow-600 dark:text-yellow-500 space-y-1">
                      <li>• Use interfaces for products and factories</li>
                      <li>• Keep factory methods focused and simple</li>
                      <li>• Consider using enums for product types</li>
                      <li>• Document factory behavior and constraints</li>
                      <li>• Use meaningful names for factory methods</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-700 dark:text-yellow-400 mb-2">Common Mistakes</h4>
                    <ul className="text-sm text-yellow-600 dark:text-yellow-500 space-y-1">
                      <li>• Making factories too complex or generic</li>
                      <li>• Not handling unknown product types gracefully</li>
                      <li>• Creating circular dependencies</li>
                      <li>• Ignoring thread safety in singleton factories</li>
                      <li>• Over-engineering simple creation scenarios</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-6 rounded-lg text-white">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <Factory className="mr-2 text-orange-400" size={24} />
                Factory Pattern Summary
              </h3>
              <p className="text-blue-100 mb-4">
                The Factory Pattern is a fundamental creational pattern that provides flexible object creation while maintaining 
                loose coupling. It's particularly valuable in enterprise applications where you need to support multiple 
                implementations or variants of similar functionality.
              </p>
              <div className="bg-blue-800/50 p-4 rounded">
                <h4 className="font-semibold text-blue-200 mb-2">Remember: Choose the Right Variant</h4>
                <ul className="text-blue-200 text-sm space-y-1">
                  <li>• <strong>Simple Factory:</strong> For basic object creation with minimal variants</li>
                  <li>• <strong>Factory Method:</strong> When subclasses should decide what to create</li>
                  <li>• <strong>Abstract Factory:</strong> For families of related objects that must work together</li>
                </ul>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Select a section to view content</div>;
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white dark:bg-slate-950">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Navigation Sidebar */}
        <div className="lg:w-64 bg-slate-50 dark:bg-slate-900 rounded-lg p-4">
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-4">
            Factory Pattern Guide
          </h2>
          <nav className="space-y-2">
            {sections.map((section) => {
              const IconComponent = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left p-3 rounded-lg transition-colors flex items-center ${
                    activeSection === section.id
                      ? 'bg-blue-900 text-white'
                      : 'hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <IconComponent className="mr-2" size={18} />
                  <span className="text-sm font-medium">{section.title}</span>
                </button>
              );
            })}
          </nav>

          <div className="mt-6 p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
            <p className="text-xs text-orange-800 dark:text-orange-300">
              <Factory className="w-6 h-6" /><br />
              The Factory Pattern simplifies object creation by centralizing logic, promoting flexibility, scalability, and cleaner code in software design.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 min-h-screen">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default FactoryPatternDetailPageCatto;