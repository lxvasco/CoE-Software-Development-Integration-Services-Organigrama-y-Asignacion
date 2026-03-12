import React, { useState, useRef, useEffect, useMemo } from 'react';

// 1. Datos Normalizados (Intactos)
const orgData = {
  id: "org_root", type: "orgRoot", name: "CoE Software Development & Integration Services", role: "Estructura Principal",
  children: [
    {
      id: "dir_1", type: "persona", name: "Santiago García", role: "Director", level: 1,
      children: [
        {
          id: "coord_1", type: "persona", name: "Daniel Morales", role: "Coordinador", level: 2, cliente: "Flypass",
          children: [{
            id: "dom_1", type: "dominio", name: "Clientes Actuales",
            children: [{
              id: "cli_1", type: "cliente", name: "Flypass",
              children: [{
                id: "eq_1", type: "equipo", name: "Backend",
                children: [
                  { id: "p1", type: "persona", name: "Wilmar García", role: "Lider técnico", level: 3, cvLink: "https://docs.google.com/document/d/1tgSlK7sc57eo9T6tjux8FLo5q-P9F14l8tluio7EAAM/edit?tab=t.0" },
                  { id: "p2", type: "persona", name: "Camilo Ramirez", role: "Desarrollador Back", level: 4, ownership: "Modernización", seniority: "CRACK I" },
                  { id: "p3", type: "persona", name: "Juan Carlos Viteri", role: "Desarrollador Back", level: 4, ownership: "Modernización", seniority: "CRACK I" },
                  { id: "p4", type: "persona", name: "Cristian Ramirez", role: "Desarrollador Back", level: 4, ownership: "Core de Pagos", seniority: "CRACK I" },
                  { id: "p5", type: "persona", name: "Pedro Pereira", role: "Desarrollador Back", level: 4, ownership: "Core de Pagos", seniority: "EXPERT III" },
                  { id: "p6", type: "persona", name: "Darwin Tangarife", role: "Desarrollador Back", level: 4, ownership: "Continuidad", seniority: "ESSENTIAL III" },
                  { id: "p7", type: "persona", name: "Leonardo Aragonez", role: "Desarrollador Back", level: 4, ownership: "MCP", seniority: "EXPERT II" },
                  { id: "p9", type: "persona", name: "Brayan Erazo", role: "Desarrollador Back", level: 4, ownership: "MCP", seniority: "EXPERT III" },
                  { id: "p10", type: "persona", name: "Santiago Alarcón", role: "Desarrollador Back", level: 4, ownership: "MCP" },
                  { id: "p11", type: "persona", name: "Adán González", role: "Desarrollador Back", level: 4, ownership: "Peajes", seniority: "CRACK I" },
                  { id: "p12", type: "persona", name: "Andrés García", role: "Desarrollador Back", level: 4, ownership: "Peajes", seniority: "CRACK I" },
                  { id: "p13", type: "persona", name: "Juan Manuel Zuluaga", role: "Desarrollador Back", level: 4, ownership: "Interoperabilidad", seniority: "ESSENTIAL III" },
                  { id: "p14", type: "persona", name: "Sandra Yanza", role: "Desarrolladora Back", level: 4, ownership: "Interoperabilidad", seniority: "EXPERT II" },
                  { id: "p15", type: "persona", name: "Santiago Vélez", role: "Desarrollador Back", level: 4, ownership: "Interoperabilidad", seniority: "CRACK I" },
                  { id: "p16", type: "persona", name: "Marlon Vásquez", role: "Desarrollador Back", level: 4, ownership: "Combustibles", seniority: "ESSENTIAL III" },
                  { id: "p17", type: "persona", name: "Andrés Felipe Zapata", role: "Desarrollador Back", level: 4, ownership: "Liderazgo Técnico y Arquitectura" }
                ]
              }]
            }]
          }]
        },
        {
          id: "coord_2", type: "persona", name: "Ximena Vasco", role: "Coordinadora", level: 2, cliente: "Flypass, CRECER, EXITO",
          children: [{
            id: "dom_2", type: "dominio", name: "Clientes Actuales",
            children: [
              {
                id: "cli_2_1", type: "cliente", name: "Flypass",
                children: [{
                  id: "eq_2_1", type: "equipo", name: "Frontend",
                  children: [
                    { id: "p18", type: "persona", name: "Oscar Mora", role: "Lider técnico", level: 3 },
                    { id: "p19", type: "persona", name: "Harby García", role: "Desarrollador Front", level: 4, ownership: "Mastercard, Yuno", seniority: "EXPERT III" },
                    { id: "p20", type: "persona", name: "Joel Carrillo", role: "Desarrollador Front", level: 4, ownership: "Combustibles" },
                    { id: "p21", type: "persona", name: "Estiven Betancur", role: "Desarrollador Front", level: 4, ownership: "Combustibles", seniority: "EXPERT II" },
                    { id: "p22", type: "persona", name: "Luz Cardona", role: "Desarrollador Front", level: 4, ownership: "Master card", seniority: "ESSENTIAL I" }
                  ]
                }]
              },
              {
                id: "cli_2_2", type: "cliente", name: "CRECER",
                children: [{
                  id: "eq_2_2", type: "equipo", name: "Back",
                  children: [
                    { id: "p23", type: "persona", name: "Ruben Suaza", role: "Lider técnico", level: 3 },
                    { id: "p24", type: "persona", name: "Estiven Betancur", role: "Lider técnico", level: 4, ownership: "Apoyo Liderazgo Técnico", seniority: "EXPERT II" },
                    { id: "p25", type: "persona", name: "Alexander Cardona", role: "Desarrollador Back", level: 4, ownership: "Migración 360", seniority: "ESSENTIAL III" },
                    { id: "p26", type: "persona", name: "William Tabera", role: "Desarrollador Back", level: 4, ownership: "Cálculos", seniority: "EXPERT II" },
                    { id: "p27", type: "persona", name: "Jesús Chavez", role: "Desarrollador Back", level: 4, ownership: "Finanzas", seniority: "EXPERT III" },
                    { id: "p28", type: "persona", name: "Nestor Maquilon", role: "Desarrollador Back", level: 4, ownership: "Finanzas", seniority: "EXPERT III" }
                  ]
                }]
              },
              {
                id: "cli_2_3", type: "cliente", name: "QUIND",
                children: [{
                  id: "eq_2_3", type: "equipo", name: "Back y Front",
                  children: [
                    { id: "p29", type: "persona", name: "Estiven Betancur", role: "Lider técnico", level: 3, seniority: "EXPERT II" },
                    { id: "p30", type: "persona", name: "Julian Suarez", role: "Desarrollador Back y Front", level: 4, ownership: "Team Track", seniority: "NO GRADUADO" }
                  ]
                }]
              },
              {
                id: "cli_2_4", type: "cliente", name: "EXITO",
                children: [{
                  id: "eq_2_4", type: "equipo", name: "Back",
                  children: [
                    { id: "p31", type: "persona", name: "Ruben Suaza", role: "Lider técnico", level: 3 },
                    { id: "p32", type: "persona", name: "Jose Sebastian Vera", role: "Desarrollador Back", level: 4, ownership: "SIRE", seniority: "NO GRADUADO" }
                  ]
                }]
              }
            ]
          }]
        },
        {
          id: "coord_3", type: "persona", name: "Gonzalo Villegas", role: "Coordinador", level: 2,
          children: [
            {
              id: "dom_3_1", type: "dominio", name: "Clientes Actuales",
              children: [
                {
                  id: "cli_3_1", type: "cliente", name: "Comfama",
                  children: [{
                    id: "eq_3_1", type: "equipo", name: "Backend",
                    children: [
                      { id: "p33", type: "persona", name: "Rubén Suaza", role: "Lider técnico", level: 3 },
                      { id: "p34", type: "persona", name: "Wilmar García", role: "Lider técnico", level: 4, ownership: "Apoyo Liderazgo Técnico", cvLink: "https://docs.google.com/document/d/1tgSlK7sc57eo9T6tjux8FLo5q-P9F14l8tluio7EAAM/edit?tab=t.0" },
                      { id: "p35", type: "persona", name: "Michael Trujillo", role: "Desarrollador Back", level: 4, ownership: "Delta Afiliados", seniority: "EXPERT I" }
                    ]
                  }]
                },
                {
                  id: "cli_3_2", type: "cliente", name: "Manpower",
                  children: [{
                    id: "eq_3_2", type: "equipo", name: "Backend",
                    children: [
                      { id: "p36", type: "persona", name: "Rubén Suaza", role: "Lider técnico", level: 3 },
                      { id: "p37", type: "persona", name: "Jose Sebastian Vera", role: "Desarrollador Back", level: 4, ownership: "Integraciones", seniority: "NO GRADUADO" }
                    ]
                  }]
                }
              ]
            },
            {
              id: "dom_3_2", type: "dominio", name: "Clientes Nuevos",
              children: [
                {
                  id: "cli_3_3", type: "cliente", name: "Wingo",
                  children: [{
                    id: "eq_3_3", type: "equipo", name: "Técnico Wingo",
                    children: [
                      { id: "p38", type: "persona", name: "Oscar Mora", role: "Arquitecto", level: 3 },
                      { id: "p39", type: "persona", name: "Por definir", role: "Desarrollador", level: 4 }
                    ]
                  }]
                },
                {
                  id: "cli_3_4", type: "cliente", name: "Comfandi",
                  children: [{
                    id: "eq_3_4", type: "equipo", name: "Técnico Comfandi",
                    children: [
                      { id: "p40", type: "persona", name: "Oscar Mora", role: "Arquitecto", level: 3 },
                      { id: "p41", type: "persona", name: "Por definir", role: "Desarrollador", level: 4 }
                    ]
                  }]
                }
              ]
            },
            {
              id: "dom_3_3", type: "dominio", name: "Innovación",
              children: [
                {
                  id: "cli_3_5", type: "cliente", name: "QUIND",
                  children: [{
                    id: "eq_3_5", type: "equipo", name: "Equipo Innovación",
                    children: [
                      { id: "p42", type: "persona", name: "Ruben Suaza", role: "Lider técnico", level: 3, ownership: "Innovación" ,
                        tareas:[    
                          "Ejecutar POCs",
                          "Evaluar viabilidad técnica",
                          "Evaluar performance y escalabilidad",
                          "Diseñar arquitecturas de referencia",
                          "Crear aceleradores y templates",
                          "Crear frameworks reutilizables",
                          "Crear documentación técnica profunda",
                          "Capacitar equipos de desarrollo",
                          "Soportar primeras implementaciones",
                          "Validar readiness para producción",
                          "Definir buenas prácticas",
                        ]
                      },
                      { 
                        id: "p43", type: "persona", name: "Gonzalo Villegas", role: "Líder de Estrategia de Innovación", level: 3, ownership: "Innovación",
                        tareas: [
                          "Identificar tecnologías estratégicas",
                          "Priorizar iniciativas según impacto y viabilidad",
                          "Definir estrategia de adopción",
                          "Coordinar adopción con equipos de desarrollo",
                          "Asegurar transición hacia uso real",
                          "Analizar tendencias de mercado",
                          "Identificar oportunidades estratégicas",
                          "Definir propuestas de valor",
                          "Dar seguimiento hasta adopción real",
                          "Crear material técnico y estratégico",
                          "Socializar capacidades nuevas"
                        ]
                      }
                    ]
                  }]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

// Paleta de colores por cliente configurables (Intactos)
const CLIENT_THEMES = {
  flypass: "bg-[#c2d501] text-[#191538] border-black/10 shadow-lg",
  comfama: "bg-[#ff277e] text-white border-black/10 shadow-lg",
  quind: "bg-[#FFBB00] text-[#191538] border-black/10 shadow-lg",
  crecer: "bg-[#0065FF] text-white border-black/10 shadow-lg",
  exito: "bg-[#ffe800] text-[#191538] border-black/10 shadow-lg",
  manpower: "bg-[#ff6900] text-white border-black/10 shadow-lg",
  comfandi: "bg-[#05C3DD] text-white border-black/10 shadow-lg",
  wingo: "bg-[rgba(102,51,203,1)] text-white border-black/10 shadow-lg"
};

// Paleta de colores para Seniority (Intactos)
const SENIORITY_THEMES = {
  "ESSENTIAL I": "bg-green-200 text-green-900 border-green-300",
  "ESSENTIAL II": "bg-green-400 text-green-900 border-green-600",
  "ESSENTIAL III": "bg-green-600 text-white border-green-800",
  "EXPERT I": "bg-blue-200 text-blue-900 border-blue-300",
  "EXPERT II": "bg-blue-400 text-blue-900 border-blue-600",
  "EXPERT III": "bg-blue-600 text-white border-blue-800",
  "CRACK I": "bg-purple-500 text-white border-purple-700",
  "CRACK II": "bg-purple-700 text-white border-purple-900",
  "CRACK III": "bg-purple-900 text-white border-black",
  "NO GRADUADO": "bg-[#e2e8f0] text-[#777777] border-[#cbd5e1]"
};

// 2. Componente de Nodo Recursivo (CSS Tree adaptado a la nueva UI/UX)
const OrgNode = ({ node, isRoot = false, isFirst = false, isLast = false, isOnly = false, isFiltered = false }) => {
  const shouldAutoExpand = isFiltered ? true : (node.type === 'orgRoot' || node.level <= 2);
  const [expanded, setExpanded] = useState(shouldAutoExpand);
  const [showTareas, setShowTareas] = useState(false);

  const getClientColor = (name) => {
    const n = name.toLowerCase();
    if (n.includes('flypass')) return CLIENT_THEMES.flypass;
    if (n.includes('comfama')) return CLIENT_THEMES.comfama;
    if (n.includes('quind')) return CLIENT_THEMES.quind;
    if (n.includes('crecer')) return CLIENT_THEMES.crecer;
    if (n.includes('exito') || n.includes('éxito')) return CLIENT_THEMES.exito;
    if (n.includes('manpower')) return CLIENT_THEMES.manpower;
    if (n.includes('comfandi')) return CLIENT_THEMES.comfandi;
    if (n.includes('wingo')) return CLIENT_THEMES.wingo;
    return 'bg-white text-[#191538] border-[#27C3EA] shadow-md';
  };

  const getOwnershipColor = (ownership) => {
    if (!ownership) return '';
    const o = ownership.toLowerCase();
    if (o.includes('modernización')) return 'bg-purple-50 text-purple-700 border-purple-200';
    if (o.includes('core')) return 'bg-rose-50 text-rose-700 border-rose-200';
    if (o.includes('continuidad')) return 'bg-gray-100 text-[#777777] border-gray-300';
    if (o.includes('mcp')) return 'bg-cyan-50 text-cyan-700 border-cyan-200';
    if (o.includes('peajes')) return 'bg-amber-50 text-amber-700 border-amber-200';
    if (o.includes('interoperabilidad')) return 'bg-indigo-50 text-indigo-700 border-indigo-200';
    if (o.includes('combustibles')) return 'bg-red-50 text-red-700 border-red-200';
    if (o.includes('liderazgo')) return 'bg-[#191538] text-white border-[#00182B]';
    if (o.includes('mastercard') || o.includes('master card') || o.includes('yuno')) return 'bg-pink-50 text-pink-700 border-pink-200';
    if (o.includes('migración')) return 'bg-lime-50 text-lime-700 border-lime-200';
    if (o.includes('cálculos')) return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    if (o.includes('finanzas')) return 'bg-violet-50 text-violet-700 border-violet-200';
    if (o.includes('team track')) return 'bg-sky-50 text-sky-700 border-sky-200';
    if (o.includes('sire')) return 'bg-orange-50 text-orange-700 border-orange-200';
    if (o.includes('delta')) return 'bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200';
    if (o.includes('innovación')) return 'bg-[#FFBB00] bg-opacity-20 text-[#191538] border-[#FFBB00]';
    if (o.includes('integraciones')) return 'bg-[#27C3EA] bg-opacity-20 text-[#002E41] border-[#27C3EA]';
    return 'bg-white text-[#777777] border-gray-200';
  };

  const getAvatar = (name, role) => {
    if (!name) return null;
    const femaleNames = ['ximena', 'sandra', 'luz'];
    const isFemale = femaleNames.some(fn => name.toLowerCase().includes(fn));
    const isManager = role && (role.toLowerCase().includes('director') || role.toLowerCase().includes('coordinador'));
    
    const emoji = isFemale ? (isManager ? '👩‍💼' : '👩‍💻') : (isManager ? '👨‍💼' : '👨‍💻');
    const bgColor = isFemale ? 'bg-pink-50' : 'bg-[#e0f7fd]';

    return (
      <div className={`text-3xl mb-3 flex items-center justify-center w-14 h-14 rounded-full ${bgColor} shadow-sm border-[3px] border-white ring-2 ring-[#27C3EA] z-10 transition-transform duration-300 hover:scale-110`}>
        {emoji}
      </div>
    );
  };

  const getColors = () => {
    switch (node.type) {
      case 'orgRoot': return 'bg-[#191538] text-white border-[#00182B] shadow-2xl';
      case 'dominio': return 'bg-[#002E41] text-white border-[#27C3EA] shadow-xl';
      case 'cliente': return getClientColor(node.name);
      case 'equipo': return 'bg-white text-[#191538] border-[#FFBB00] border-[3px] shadow-lg';
      case 'persona':
        if (node.level === 1) return 'bg-gradient-to-br from-[#191538] to-[#002E41] text-white border-[#00182B] shadow-xl';
        if (node.level === 2) return 'bg-[#27C3EA] text-[#00182B] border-[#002E41] shadow-lg';
        if (node.level === 3) return 'bg-[#f4f6f8] text-[#191538] border-gray-300 shadow-md';
        return 'bg-white text-[#191538] border-gray-200 shadow-sm';
      default: return 'bg-white text-[#777777] border-gray-200';
    }
  };

  const hasChildren = node.children && node.children.length > 0;

  // Actualización de color de líneas
  const lineColor = "bg-[#002E41] opacity-30";

  return (
    <div className="flex flex-col items-center relative px-3">
      {/* Línea horizontal superior */}
      {!isRoot && !isOnly && (
        <div className={`absolute top-0 h-px ${lineColor} z-0 ${isFirst ? 'left-1/2 right-0' : isLast ? 'right-1/2 left-0' : 'left-0 right-0'}`} />
      )}

      {/* Línea vertical superior */}
      {!isRoot && <div className={`w-px h-8 ${lineColor} z-0`} />}

      {/* Tarjeta del Nodo */}
      <div
        onClick={() => setExpanded(!expanded)}
        className={`relative z-10 px-5 py-4 rounded-2xl w-60 ${getColors()} transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col items-center text-center`}
      >
        {node.type === 'persona' && getAvatar(node.name, node.role)}

        {node.type !== 'orgRoot' && (
          <div className={`font-semibold text-[10px] mb-1.5 uppercase tracking-widest ${node.type === 'persona' && node.level <= 2 ? 'opacity-90' : 'text-[#777777]'}`}>
            {node.type === 'persona' ? `L${node.level} - ${node.role}` : node.type}
          </div>
        )}

        {node.type === 'persona' ? (
          <a
            href={node.cvLink || `#cv-${node.id}`}
            target={node.cvLink ? "_blank" : "_self"}
            rel={node.cvLink ? "noopener noreferrer" : ""}
            onClick={(e) => e.stopPropagation()} 
            className={`font-bold text-[15px] leading-tight mb-1 underline cursor-pointer hover:opacity-75 transition-opacity ${node.level <= 2 ? 'text-white' : 'text-[#002E41]'}`}
            title={`Ver hoja de vida de ${node.name}`}
          >
            {node.name}
          </a>
        ) : (
          <div className="font-bold text-[15px] leading-tight mb-1">{node.name}</div>
        )}
        
        {node.ownership && (
          <div className="mt-2.5 flex flex-wrap justify-center gap-1.5">
            {node.ownership.split(',').map((own, idx) => {
              const cleanOwn = own.trim();
              return (
                <div key={idx} className={`text-[10px] py-1 px-3 rounded-md shadow-sm font-semibold tracking-wide ${getOwnershipColor(cleanOwn)}`}>
                  {cleanOwn}
                </div>
              );
            })}
          </div>
        )}

        {/* UI AGREGADA PARA LA LISTA DE TAREAS */}
        {node.tareas && (
          <div className="mt-3 w-full">
            <button
              onClick={(e) => { e.stopPropagation(); setShowTareas(!showTareas); }}
              className="text-[10px] py-1.5 px-3 rounded-md shadow-sm font-bold tracking-wide bg-[#27C3EA] bg-opacity-10 text-[#002E41] border border-[#27C3EA] hover:bg-[#27C3EA] hover:text-white transition-colors w-full flex items-center justify-between"
            >
              <span>Ver Tareas</span>
              <span>{showTareas ? '▲' : '▼'}</span>
            </button>
            {showTareas && (
              <ul 
                className="mt-2 text-[11px] text-left list-disc pl-4 pr-1 text-[#191538] bg-white/90 p-2 rounded-md border border-[#27C3EA]/30 shadow-inner max-h-40 overflow-y-auto" 
                onClick={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
              >
                {node.tareas.map((tarea, idx) => (
                  <li key={idx} className="leading-tight mb-1">{tarea}</li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Indicador de hijos colapsados */}
        {hasChildren && !expanded && (
          <div className="absolute -bottom-3.5 bg-white text-[#191538] rounded-full w-7 h-7 flex items-center justify-center text-[11px] font-bold border border-[#27C3EA] shadow-md">
            +{node.children.length}
          </div>
        )}

        {/* Etiqueta Flotante de Seniority */}
        {node.seniority && (
          <div className={`absolute -top-3 -right-2 text-[10px] font-bold px-2.5 py-1 rounded-lg border shadow-md tracking-wide ${SENIORITY_THEMES[node.seniority] || SENIORITY_THEMES["NO GRADUADO"]}`}>
            {node.seniority}
          </div>
        )}
      </div>

      {/* Línea vertical inferior */}
      {expanded && hasChildren && <div className={`w-px h-8 ${lineColor} z-0`} />}

      {/* Contenedor de Hijos */}
      {expanded && hasChildren && (
        <div className="flex flex-row justify-center relative pt-2">
          {node.children.map((child, index) => (
            <OrgNode
              key={child.id}
              node={child}
              isFirst={index === 0}
              isLast={index === node.children.length - 1}
              isOnly={node.children.length === 1}
              isFiltered={isFiltered}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// 3. Componente Principal con Pan/Zoom nativo
export default function App() {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const [scale, setScale] = useState(1);

  // Estados para los filtros
  const [filters, setFilters] = useState({ coordinador: '', dominio: '', cliente: '' });

  // Extracción automática de opciones para los selects basada en la data
  const { coordinadores, dominios, clientes } = useMemo(() => {
    const coords = new Set();
    const doms = new Set();
    const clis = new Set();
    const traverse = (n) => {
        if (n.type === 'persona' && n.role === 'Coordinador') coords.add(n.name);
        if (n.type === 'dominio') doms.add(n.name);
        if (n.type === 'cliente') clis.add(n.name);
        if (n.children) n.children.forEach(traverse);
    };
    traverse(orgData);
    return {
        coordinadores: Array.from(coords),
        dominios: Array.from(doms),
        clientes: Array.from(clis)
    };
  }, []);

  // Lógica de podado del árbol (Tree Pruning) según filtros activos
  const filteredData = useMemo(() => {
    const prune = (node) => {
        if (node.type === 'persona' && node.role === 'Coordinador' && filters.coordinador && node.name !== filters.coordinador) return null;
        if (node.type === 'dominio' && filters.dominio && node.name !== filters.dominio) return null;
        if (node.type === 'cliente' && filters.cliente && node.name !== filters.cliente) return null;

        if (node.children) {
            const filteredChildren = node.children.map(prune).filter(Boolean);
            if (filteredChildren.length === 0 && node.children.length > 0) return null;
            return { ...node, children: filteredChildren };
        }
        return { ...node };
    };
    
    const result = prune(orgData);
    return result || { ...orgData, children: [] };
  }, [filters]);

  const isFiltered = Boolean(filters.coordinador || filters.dominio || filters.cliente);

  // Inyectar fuente Roboto globalmente
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setStartY(e.pageY - containerRef.current.offsetTop);
    setScrollLeft(containerRef.current.scrollLeft);
    setScrollTop(containerRef.current.scrollTop);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const y = e.pageY - containerRef.current.offsetTop;
    const walkX = (x - startX) * 2;
    const walkY = (y - startY) * 2;
    containerRef.current.scrollLeft = scrollLeft - walkX;
    containerRef.current.scrollTop = scrollTop - walkY;
  };

  const zoomIn = () => setScale(s => Math.min(s + 0.1, 1.5));
  const zoomOut = () => setScale(s => Math.max(s - 0.1, 0.4));
  const resetZoom = () => setScale(1);

  return (
    <div className="absolute inset-0 w-screen h-full bg-[#f8f9fc] flex flex-col overflow-hidden m-0 p-0" style={{ fontFamily: "'Roboto', sans-serif" }}>
      
      {/* Header Corporativo Fijo Ajustado */}
      <div className="bg-[#191538] shadow-lg px-10 py-5 z-20 flex justify-start items-center text-white border-b-4 border-[#FFBB00]">
        <div className="flex items-center gap-6">
          
          <img 
            src="src/assets/Logo Full Color blanco Rojo(1).png" 
            alt="Quind Logo" 
            className="h-12 object-contain drop-shadow-md"
            onError={(e) => { e.target.style.display = 'none'; }} // Fallback por si la imagen no se carga
          />
          <div className="flex flex-col text-left">
            <h1 className="text-[36px] font-bold tracking-wide text-white">CoE Software Development & Integration Services</h1>
            <p className="text-[24px] text-[#27C3EA] font-semibold uppercase tracking-widest mt-1">Mapa Organizacional y de Asignación</p>
          </div>
        </div>
      </div>

      {/* Barra de Filtros Inteligente */}
      <div className="bg-white shadow-sm border-b border-gray-200 px-10 py-2.5 z-10 flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2 text-[#27C3EA]">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
          <span className="text-sm font-bold text-[#191538]">Filtros:</span>
        </div>
        
        <select 
          className="bg-[#f8f9fc] border border-gray-300 text-[#191538] text-xs font-semibold rounded-lg focus:ring-[#27C3EA] focus:border-[#27C3EA] block px-3 py-1.5 outline-none cursor-pointer hover:border-gray-400 transition-colors"
          value={filters.coordinador}
          onChange={(e) => setFilters(p => ({...p, coordinador: e.target.value}))}
        >
          <option value="">Todos los Coordinadores</option>
          {coordinadores.map(c => <option key={c} value={c}>{c}</option>)}
        </select>

        <select 
          className="bg-[#f8f9fc] border border-gray-300 text-[#191538] text-xs font-semibold rounded-lg focus:ring-[#27C3EA] focus:border-[#27C3EA] block px-3 py-1.5 outline-none cursor-pointer hover:border-gray-400 transition-colors"
          value={filters.dominio}
          onChange={(e) => setFilters(p => ({...p, dominio: e.target.value}))}
        >
          <option value="">Todos los Dominios</option>
          {dominios.map(d => <option key={d} value={d}>{d}</option>)}
        </select>

        <select 
          className="bg-[#f8f9fc] border border-gray-300 text-[#191538] text-xs font-semibold rounded-lg focus:ring-[#27C3EA] focus:border-[#27C3EA] block px-3 py-1.5 outline-none cursor-pointer hover:border-gray-400 transition-colors"
          value={filters.cliente}
          onChange={(e) => setFilters(p => ({...p, cliente: e.target.value}))}
        >
          <option value="">Todos los Clientes</option>
          {clientes.map(c => <option key={c} value={c}>{c}</option>)}
        </select>

        {isFiltered && (
          <button 
            onClick={() => setFilters({ coordinador: '', dominio: '', cliente: '' })}
            className="text-xs text-[#FF5322] hover:text-[#d43d15] font-bold underline cursor-pointer ml-2 transition-colors"
          >
            Limpiar Filtros
          </button>
        )}
      </div>

      {/* Contenedor del Canvas */}
      <div 
        ref={containerRef}
        className={`flex-1 overflow-auto relative ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div 
          className="min-w-max min-h-max p-24 flex justify-center origin-top"
          style={{ transform: `scale(${scale})`, transition: 'transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)' }}
        >
          {/* Se usa el KEY JSON.stringify(filters) para forzar el re-renderizado del arbol al aplicar filtros */}
          <OrgNode key={JSON.stringify(filters)} node={filteredData} isRoot={true} isOnly={true} isFiltered={isFiltered} />
        </div>
      </div>

      {/* Controles Flotantes FAB */}
      <div className="absolute bottom-8 right-8 z-30 flex flex-col gap-3">
        <div className="bg-white p-1.5 rounded-xl shadow-xl border border-gray-100 flex flex-col items-center gap-1">
          <button onClick={zoomIn} className="w-10 h-10 flex items-center justify-center bg-gray-50 hover:bg-[#27C3EA] hover:text-white text-[#191538] rounded-lg transition-colors font-bold text-xl" title="Acercar">+</button>
          <button onClick={resetZoom} className="w-10 h-10 flex items-center justify-center bg-gray-50 hover:bg-gray-100 text-[#777777] rounded-lg transition-colors text-xs font-bold" title="Restablecer Zoom">{(scale * 100).toFixed(0)}%</button>
          <button onClick={zoomOut} className="w-10 h-10 flex items-center justify-center bg-gray-50 hover:bg-[#27C3EA] hover:text-white text-[#191538] rounded-lg transition-colors font-bold text-2xl" title="Alejar">-</button>
        </div>
      </div>
    </div>
  );
}