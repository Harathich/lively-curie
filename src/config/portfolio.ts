export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'AI/ML' | 'Software Engineering' | 'Full-Stack';
  featured: boolean;
  priority: number;
  description: string;
  problem: string;
  architecture: string;
  decisions: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  implementedFeatures: string[];
  plannedFeatures?: string[];
  metrics?: string[];
  diagramType: 'agent-flow' | 'neural-net' | 'microservices' | 'event-kafka' | 'cluster-ml' | 'layered-arch';
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  iconName: string;
  skills: {
    name: string;
    level: 'Core' | 'Advanced' | 'Practiced';
    evidence: string;
    icon?: string;
  }[];
}

export interface PortfolioConfig {
  profile: {
    name: string;
    title: string;
    headline: string;
    subheadline: string;
    education: {
      degree: string;
      institution: string;
      location: string;
      expectedGraduation: string;
    };
    careerFocus: string[];
    email: string;
    github: string;
    linkedin: string;
    resumePath: string;
  };
  projects: Project[];
  skills: SkillCategory[];
  achievements: {
    title: string;
    organization: string;
    date: string;
    description: string;
    badgeText: string;
    status: 'Verified' | 'Pending Verification';
  }[];
}

export const portfolioConfig: PortfolioConfig = {
  profile: {
    name: "Harathi Chavala",
    title: "Software Engineer & AI/ML Developer",
    headline: "I build intelligent systems and the software behind them.",
    subheadline: "Software engineering student exploring AI/ML, backend systems, and practical applications of intelligent technology.",
    education: {
      degree: "Integrated M.Tech in Software Engineering",
      institution: "VIT-AP University",
      location: "Andhra Pradesh, India",
      expectedGraduation: "2027"
    },
    careerFocus: [
      "Software Development Engineering",
      "Backend Engineering",
      "AI/ML Engineering",
      "Applied AI & Multi-Agent Systems"
    ],
    email: "harathichavala.work@gmail.com", // Easily updated central email address
    github: "https://github.com/Harathich",
    linkedin: "https://www.linkedin.com/in/harathichavala",
    resumePath: "/Harathi_Chavala_Resume.pdf"
  },
  projects: [
    {
      id: "scamshield-ai",
      title: "ScamShield AI",
      tagline: "Autonomous Multi-Agent Cyber-Threat & Fraud Detection Engine",
      category: "AI/ML",
      featured: true,
      priority: 1,
      description: "An intelligent security platform harnessing specialized AI agents to scrutinize deceptive communications, suspicious URLs, fraudulent job postings, and visual OCR screenshots in real time.",
      problem: "Modern fraud attacks combine email phishing, social engineering, malicious job scams, and synthetic image artifacts that bypass static spam filters. Single-model approaches lack context across multi-modal threat vectors.",
      architecture: "Orchestrated multi-agent pipeline built on FastAPI and LangGraph. Incoming payload streams are dispatched across specialized sub-agents: URL Threat Inspector, Text Intent Scanner, OCR Visual Artifact Parser, and Risk Scoring Synthesizer backed by MongoDB storage.",
      decisions: [
        "Utilized LangGraph stateful graphs to prevent loop deadlocks during agent reasoning cycles.",
        "Integrated Tesseract OCR for text extraction from screenshot attachments prior to prompt evaluation.",
        "Implemented structured JSON output enforcement with Pydantic for deterministic backend risk scoring."
      ],
      techStack: ["FastAPI", "LangGraph", "LangChain", "LLM APIs", "Python", "Tesseract OCR", "MongoDB"],
      githubUrl: "https://github.com/Harathich/ScamShield-Ai",
      implementedFeatures: [
        "Multi-agent message and email fraud scoring",
        "URL domain analysis and suspicious pattern heuristic check",
        "OCR image screenshot text extraction & parsing",
        "Fake job offer verification engine",
        "MongoDB risk event logging and threat categorization"
      ],
      plannedFeatures: [
        "Real-time browser extension integration for live link scanning",
        "Automated honeypot response agent for scammer engagement"
      ],
      diagramType: "agent-flow"
    },
    {
      id: "speech-emotion-rec",
      title: "Speech Emotion Recognition",
      tagline: "Hybrid Deep Learning Audio Signal Classifier",
      category: "AI/ML",
      featured: true,
      priority: 2,
      description: "Deep learning pipeline extracting spectral and temporal acoustic features from over 12,000 speech samples to accurately classify human emotional states.",
      problem: "Acoustic signal variation, pitch shifts, background noise, and temporal dependencies make emotion recognition challenging for simple classifiers.",
      architecture: "Audio signals are preprocessed into Mel-Frequency Cepstral Coefficients (MFCCs), Spectral Centroid, and Chroma vectors. The feature matrix feeds a 2D CNN for spatial acoustic representation, followed by a BiLSTM layer for sequential context and an Attention mechanism to highlight critical vocal bursts.",
      decisions: [
        "Extracted 40 MFCC coefficients combined with Spectral Centroid and Chroma to capture both timber and harmonic structure.",
        "Applied Bidirectional LSTM to capture contextual audio dynamics in both forward and backward time steps.",
        "Incorporated an attention layer to weight expressive speech segments over silent pauses."
      ],
      techStack: ["Python", "Librosa", "TensorFlow / Keras", "NumPy", "scikit-learn", "CNN + BiLSTM"],
      githubUrl: "https://github.com/Harathich",
      implementedFeatures: [
        "Acoustic feature extraction pipeline (MFCC, Chroma, Spectral Centroid, ZCR)",
        "Dataset normalization and augmentation across 12,000+ speech samples",
        "Hybrid CNN-BiLSTM architecture with soft attention mechanism",
        "Model evaluation, loss curves, and confusion matrix synthesis"
      ],
      plannedFeatures: [
        "Real-time mic streaming inference client",
        "ONNX model export for edge device deployment"
      ],
      diagramType: "neural-net"
    },
    {
      id: "skilltree",
      title: "SkillTree",
      tagline: "Scalable Spring Boot Platform for Structured Technical Learning",
      category: "Software Engineering",
      featured: false,
      priority: 3,
      description: "A robust backend platform designed to structure programming curricula into courses, topics, and problem sets with user progress evaluation.",
      problem: "Educational platforms require scalable schema design to handle nested topic dependencies, user problem submission tracking, and real-time skill tree progression.",
      architecture: "Spring Boot RESTful micro-architecture with JPA/Hibernate managing relational entities. Includes custom authentication filters, layered service architecture, and test-case payload schemas.",
      decisions: [
        "Architected clean 3-layer architecture (Controller-Service-Repository) for maintainability.",
        "Designed relational schema supporting recursive skill prerequisites and granular difficulty metadata.",
        "Integrated Spring Security with JWT tokens for stateless session management."
      ],
      techStack: ["Java", "Spring Boot", "Spring Security", "JPA / Hibernate", "PostgreSQL", "REST API", "Maven"],
      githubUrl: "https://github.com/Harathich/SkillTree",
      implementedFeatures: [
        "Hierarchical course, topic, and problem schema definitions",
        "User registration, authentication, and JWT authorization",
        "Problem submission tracking with test case result data structures",
        "Progress percentage calculation per skill node"
      ],
      plannedFeatures: [
        "Code execution sandbox runner integration",
        "Gamified streak counters and leaderboard microservice"
      ],
      diagramType: "layered-arch"
    },
    {
      id: "kafka-order-system",
      title: "Kafka Asynchronous Order Engine",
      tagline: "Distributed Event-Driven Order & Inventory Processor",
      category: "Software Engineering",
      featured: false,
      priority: 4,
      description: "An event-driven microservices architecture leveraging Apache Kafka to decouple high-throughput order ingestion from downstream payment and notification services.",
      problem: "Synchronous HTTP calls between microservices create cascade failures and latency bottlenecks during order placement spikes.",
      architecture: "Order Service publishes `order-events` to Kafka topics. Independent consumer groups (Payment Service, Inventory Service, Notification Service) process messages asynchronously with retry topics and Dead Letter Queues (DLQ).",
      decisions: [
        "Configured Kafka topic partitions to guarantee in-order event delivery per customer session.",
        "Implemented idempotent consumer handlers to handle duplicate network retries safely.",
        "Integrated Spring Kafka JSON serialization for schema consistency."
      ],
      techStack: ["Java", "Spring Boot", "Apache Kafka", "Docker", "REST API", "JSON Schema"],
      githubUrl: "https://github.com/Harathich/kafka-order-system",
      implementedFeatures: [
        "Spring Boot Kafka Producer emitting structured order lifecycle events",
        "Asynchronous Consumer listeners with error handling and retry topic routing",
        "Docker Compose setup for Zookeeper/Kafka broker clusters",
        "End-to-end integration test suites for event stream payloads"
      ],
      diagramType: "event-kafka"
    },
    {
      id: "customer-segmentation",
      title: "Customer Segmentation Engine",
      tagline: "Unsupervised Behavioral Clustering & Feature Analysis",
      category: "AI/ML",
      featured: false,
      priority: 5,
      description: "Machine learning pipeline leveraging clustering algorithms and dimensionality reduction to discover distinct customer purchasing behavior personas.",
      problem: "Raw transactional and demographic dataset features contain noise and high-dimensional variance, obscuring meaningful market segmentation.",
      architecture: "Standardized numerical features using StandardScaler, evaluated cluster separation using the Elbow Method & Silhouette Scores, and applied K-Means clustering alongside PCA for 2D visual projection.",
      decisions: [
        "Applied Principal Component Analysis (PCA) to project multi-variable space down to 2 principal components for clear cluster visualization.",
        "Cross-validated K-Means cluster count (k) using inertia elbow curves and silhouette coefficient evaluation."
      ],
      techStack: ["Python", "Pandas", "scikit-learn", "Matplotlib", "Seaborn", "Jupyter Notebook"],
      githubUrl: "https://github.com/Harathich/Customer_segmentation",
      implementedFeatures: [
        "Data cleaning, missing value imputation, and feature scaling",
        "K-Means clustering model training with elbow curve evaluation",
        "PCA dimensionality reduction for visual scatter projections",
        "Cluster persona statistical summary extraction"
      ],
      diagramType: "cluster-ml"
    },
    {
      id: "fitness-microservices",
      title: "Fitness Microservices Platform",
      tagline: "Distributed Health & Activity Microservices Architecture",
      category: "Full-Stack",
      featured: false,
      priority: 6,
      description: "A multi-service platform separating User management, Activity logging, and AI recommendations into independent Spring Boot instances registered via Netflix Eureka.",
      problem: "Monolithic fitness apps struggle to scale activity data write traffic independently from user profile operations.",
      architecture: "React frontend communicating with Spring Cloud Eureka Discovery server. Specialized microservices persist data to PostgreSQL (Users) and MongoDB (Activity logs & AI stats).",
      decisions: [
        "Selected Polyglot Persistence: PostgreSQL for relational user credentials and MongoDB for high-volume flexible activity logs.",
        "Implemented Eureka Service Registry for dynamic client-side load balancing."
      ],
      techStack: ["Java", "Spring Boot", "React", "PostgreSQL", "MongoDB", "Spring Cloud Eureka", "REST"],
      githubUrl: "https://github.com/Harathich/fitness-microservices",
      implementedFeatures: [
        "Spring Cloud Eureka service registry configuration",
        "Decoupled User and Activity microservices APIs",
        "Polyglot storage integration (PostgreSQL + MongoDB)",
        "React frontend dashboard connection"
      ],
      diagramType: "microservices"
    }
  ],
  skills: [
    {
      title: "Software Engineering & Backend",
      subtitle: "Scalable architecture, clean code, & system design",
      iconName: "Server",
      skills: [
        { name: "Java", level: "Core", evidence: "Built SkillTree, Kafka Order Engine, & Fitness Microservices" },
        { name: "Python", level: "Core", evidence: "FastAPI backends, LangGraph multi-agent systems, & ML pipelines" },
        { name: "Spring Boot", level: "Advanced", evidence: "Microservices, Spring Security, JPA Hibernate, & Eureka Registry" },
        { name: "FastAPI", level: "Advanced", evidence: "Asynchronous Python API server for ScamShield AI" },
        { name: "REST API Design", level: "Core", evidence: "Clean JSON contracts, stateful response handling, OpenAPI docs" },
        { name: "Data Structures & Algorithms", level: "Core", evidence: "Problem solving, graph traversals, and algorithmic complexity" },
        { name: "SQL & Relational DBs", level: "Advanced", evidence: "Schema design, index tuning in PostgreSQL & MySQL" },
        { name: "NoSQL (MongoDB)", level: "Advanced", evidence: "Document storage for threat logs in ScamShield AI & Fitness App" },
        { name: "Apache Kafka", level: "Practiced", evidence: "Event-driven message routing and asynchronous microservices" },
        { name: "Docker & Git", level: "Core", evidence: "Containerization, compose clusters, and multi-branch git workflows" }
      ]
    },
    {
      title: "AI / ML & Intelligent Systems",
      subtitle: "Deep learning, multi-agent frameworks, & audio/text intelligence",
      iconName: "BrainCircuit",
      skills: [
        { name: "Multi-Agent AI (LangGraph)", level: "Core", evidence: "ScamShield AI stateful multi-agent threat orchestration" },
        { name: "LLM Orchestration & Prompting", level: "Advanced", evidence: "Structured Pydantic JSON outputs & tool calling with Gemini/OpenAI" },
        { name: "Deep Learning (CNN + BiLSTM)", level: "Advanced", evidence: "Speech Emotion Recognition hybrid attention model architecture" },
        { name: "Audio Signal Processing", level: "Advanced", evidence: "Librosa feature extraction: MFCCs, Spectral Centroid, Chroma, ZCR" },
        { name: "scikit-learn & Machine Learning", level: "Core", evidence: "Customer Segmentation clustering, PCA, classification algorithms" },
        { name: "Data Analysis (Pandas & NumPy)", level: "Core", evidence: "Feature engineering, data cleaning, matrix transformations" },
        { name: "OCR & Vision Integration", level: "Practiced", evidence: "Tesseract OCR visual text extraction for fraud image parsing" }
      ]
    }
  ],
  achievements: [
    {
      title: "NASA Space Apps Challenge Participant / Contributor",
      organization: "NASA Space Apps International Hackathon",
      date: "2024",
      description: "Collaborated in designing data-driven solution prototypes for global space and Earth science challenges using open NASA data.",
      badgeText: "NASA Space Apps",
      status: "Verified"
    },
    {
      title: "Integrated M.Tech Software Engineering Scholar",
      organization: "VIT-AP University",
      date: "2022 - 2027 (Expected)",
      description: "Rigorous 5-year integrated master's curriculum spanning advanced software architecture, database management systems, AI algorithms, and software testing.",
      badgeText: "Academic Excellence",
      status: "Verified"
    }
  ]
};
