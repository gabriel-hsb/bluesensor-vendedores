// Tipo para as especificações técnicas
export type Specs = {
  Alimentação: "mono" | "tri";
  Tensão: "220V" | "380V";
  "Proteção fixa monitorada": "monitorada" | "sem monitorada";
  Freio: "freio" | "sem freio";
};

// Interface principal do esmeril
export interface Esmeril {
  code: string; // formato: "512-0020-XXX"
  descr: string; // descrição completa do produto
  price: number | null; // preço pode ser nulo
  projectLink: string; // link do projeto (pode ser vazio)
  specs: Specs; // especificações técnicas
}
