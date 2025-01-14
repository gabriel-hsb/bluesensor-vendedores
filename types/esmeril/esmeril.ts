// --- ESMERIL ---

// Tipo para as especificações técnicas
export type EsmerilSpecsT = {
  Alimentação: "mono" | "tri";
  Tensão: "220V" | "380V";
  "Proteção Policarbonato": "monitorada" | "sem monitorada";
  Freio: "freio" | "sem freio";
};

// Interface principal do esmeril
export interface EsmerilT {
  code: string; // formato: "512-0020-XXX"
  descr: string; // descrição completa do produto
  price: number | null; // preço pode ser nulo
  projectLink: string; // link do projeto (pode ser vazio)
  specs: EsmerilSpecsT; // especificações técnicas
}

// --- OPTIONS (SPECS) FOR ESMERIL ---

// Para cada opção individual
export interface OptionT {
  name: string;
  value: string;
}

// Para cada grupo de especificação
export interface PossibleSpecsT {
  title: string;
  descr: string;
  options: OptionT[];
}
