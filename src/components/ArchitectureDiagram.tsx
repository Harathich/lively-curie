'use client';

import React from 'react';
import { ShieldCheck, Cpu, Database, Network, GitBranch, Layers, Radio, Sparkles } from 'lucide-react';

interface DiagramProps {
  type: 'agent-flow' | 'neural-net' | 'microservices' | 'event-kafka' | 'cluster-ml' | 'layered-arch';
  title: string;
}

export const ArchitectureDiagram: React.FC<DiagramProps> = ({ type, title }) => {
  switch (type) {
    case 'agent-flow':
      return (
        <div className="w-full bg-[#0b0e17] border border-[#ccff00]/20 rounded-xl p-5 relative overflow-hidden">
          <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#ccff00]">
              <Sparkles className="w-4 h-4 animate-spin-slow" />
              <span>LANGGRAPH MULTI-AGENT THREAT ENGINE</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#ccff00]/10 text-[#ccff00] border border-[#ccff00]/30">
              Stateful Flow
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs font-mono relative">
            {/* Input Node */}
            <div className="bg-[#131826] border border-white/10 rounded-lg p-3 flex flex-col justify-between">
              <span className="text-gray-400 text-[10px]">PAYLOAD STREAM</span>
              <div className="my-2 font-bold text-white flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Raw Scam Input
              </div>
              <p className="text-[10px] text-gray-400">URL, Email, Job Post, OCR Screenshot</p>
            </div>

            {/* Agent Router */}
            <div className="bg-[#182033] border border-[#ccff00]/30 rounded-lg p-3 flex flex-col justify-between shadow-[0_0_10px_rgba(204,255,0,0.1)]">
              <span className="text-[#ccff00] text-[10px]">LANGGRAPH ORCHESTRATOR</span>
              <div className="my-2 font-bold text-[#ccff00] flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-[#ccff00]" />
                Agent Dispatcher
              </div>
              <p className="text-[10px] text-gray-300">State graph & tool router</p>
            </div>

            {/* Sub-Agents */}
            <div className="space-y-2">
              <div className="bg-[#121624] border border-violet-500/30 rounded p-2 text-[11px] text-violet-300 flex items-center justify-between">
                <span>URL Threat Inspector</span>
                <span className="w-2 h-2 rounded-full bg-violet-400 animate-ping" />
              </div>
              <div className="bg-[#121624] border border-blue-500/30 rounded p-2 text-[11px] text-blue-300 flex items-center justify-between">
                <span>OCR Visual Parser</span>
                <span className="w-2 h-2 rounded-full bg-blue-400" />
              </div>
              <div className="bg-[#121624] border border-amber-500/30 rounded p-2 text-[11px] text-amber-300 flex items-center justify-between">
                <span>Job Offer Verifier</span>
                <span className="w-2 h-2 rounded-full bg-amber-400" />
              </div>
            </div>

            {/* Risk Synthesis & DB */}
            <div className="bg-[#131826] border border-emerald-500/30 rounded-lg p-3 flex flex-col justify-between">
              <span className="text-emerald-400 text-[10px]">VERDICT & PERSISTENCE</span>
              <div className="my-2 font-bold text-white flex items-center gap-1.5">
                <Database className="w-4 h-4 text-emerald-400" />
                MongoDB Threat Log
              </div>
              <p className="text-[10px] text-gray-400">Pydantic Risk Score (0-100)</p>
            </div>
          </div>
        </div>
      );

    case 'neural-net':
      return (
        <div className="w-full bg-[#0b0e17] border border-violet-500/20 rounded-xl p-5">
          <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
            <div className="flex items-center gap-2 text-xs font-mono text-violet-400">
              <Radio className="w-4 h-4 animate-pulse" />
              <span>CNN + BiLSTM + ATTENTION ARCHITECTURE</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-500/10 text-violet-300 border border-violet-500/30">
              12,000+ Audio Samples
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 text-xs font-mono">
            <div className="bg-[#131826] p-3 rounded-lg border border-white/10 text-center">
              <span className="text-[10px] text-gray-400">AUDIO SIGNAL</span>
              <div className="text-violet-300 font-bold my-1">WAV Input</div>
              <div className="text-[9px] text-gray-500">16kHz Mono</div>
            </div>
            <div className="bg-[#131826] p-3 rounded-lg border border-violet-500/20 text-center">
              <span className="text-[10px] text-gray-400">LIBROSA PIPELINE</span>
              <div className="text-violet-300 font-bold my-1">MFCC + Chroma</div>
              <div className="text-[9px] text-gray-500">Spectral Centroid</div>
            </div>
            <div className="bg-[#181d2e] p-3 rounded-lg border border-violet-400/40 text-center shadow-[0_0_10px_rgba(168,85,247,0.15)]">
              <span className="text-[10px] text-violet-400">SPATIAL CONV</span>
              <div className="text-white font-bold my-1">2D CNN Layers</div>
              <div className="text-[9px] text-gray-400">Feature Maps</div>
            </div>
            <div className="bg-[#181d2e] p-3 rounded-lg border border-violet-400/40 text-center">
              <span className="text-[10px] text-violet-400">TEMPORAL CONTEXT</span>
              <div className="text-white font-bold my-1">BiLSTM + Attention</div>
              <div className="text-[9px] text-gray-400">Soft Weighting</div>
            </div>
            <div className="bg-[#131826] p-3 rounded-lg border border-emerald-500/30 text-center">
              <span className="text-[10px] text-emerald-400">OUTPUT</span>
              <div className="text-emerald-300 font-bold my-1">Emotion Class</div>
              <div className="text-[9px] text-gray-400">Softmax Probabilities</div>
            </div>
          </div>
        </div>
      );

    case 'event-kafka':
      return (
        <div className="w-full bg-[#0b0e17] border border-amber-500/20 rounded-xl p-5">
          <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
              <Network className="w-4 h-4" />
              <span>APACHE KAFKA EVENT STREAMING BUS</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30">
              Asynchronous Microservices
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
            <div className="bg-[#131826] p-3 rounded-lg border border-white/10">
              <div className="text-amber-400 font-bold mb-1">Order Service</div>
              <p className="text-[10px] text-gray-400">Spring Boot REST API</p>
              <div className="mt-3 text-[10px] bg-amber-500/10 text-amber-300 p-1.5 rounded border border-amber-500/20">
                PRODUCE: order-placed-topic
              </div>
            </div>

            <div className="bg-[#1c1810] p-3 rounded-lg border border-amber-500/40 text-center flex flex-col justify-center">
              <span className="text-[10px] text-amber-400">KAFKA BROKER CLUSTER</span>
              <div className="text-white font-bold my-1">Partition Log Stream</div>
              <div className="text-[9px] text-gray-400">DLQ & Retry Routing</div>
            </div>

            <div className="space-y-2">
              <div className="bg-[#131826] p-2 rounded border border-emerald-500/30 text-[11px] flex justify-between items-center">
                <span className="text-emerald-300">Payment Consumer</span>
                <span className="text-[9px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded">Group A</span>
              </div>
              <div className="bg-[#131826] p-2 rounded border border-blue-500/30 text-[11px] flex justify-between items-center">
                <span className="text-blue-300">Inventory Consumer</span>
                <span className="text-[9px] bg-blue-500/20 text-blue-400 px-1.5 py-0.5 rounded">Group B</span>
              </div>
              <div className="bg-[#131826] p-2 rounded border border-purple-500/30 text-[11px] flex justify-between items-center">
                <span className="text-purple-300">Notification Consumer</span>
                <span className="text-[9px] bg-purple-500/20 text-purple-400 px-1.5 py-0.5 rounded">Group C</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'layered-arch':
    case 'microservices':
    case 'cluster-ml':
    default:
      return (
        <div className="w-full bg-[#0b0e17] border border-blue-500/20 rounded-xl p-5">
          <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
              <Layers className="w-4 h-4" />
              <span>SYSTEM ARCHITECTURE DIAGRAM</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/30">
              {title}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
            <div className="bg-[#131826] p-3 rounded-lg border border-white/10">
              <div className="text-blue-400 font-bold mb-1">Presentation Layer</div>
              <p className="text-[10px] text-gray-400">REST Endpoints & DTO Contracts</p>
            </div>
            <div className="bg-[#151c2e] p-3 rounded-lg border border-blue-500/30">
              <div className="text-blue-300 font-bold mb-1">Domain Service Layer</div>
              <p className="text-[10px] text-gray-400">Business Logic & Workflow Rules</p>
            </div>
            <div className="bg-[#131826] p-3 rounded-lg border border-emerald-500/30">
              <div className="text-emerald-400 font-bold mb-1">Persistence & Data</div>
              <p className="text-[10px] text-gray-400">SQL/NoSQL Storage & Indexing</p>
            </div>
          </div>
        </div>
      );
  }
};
