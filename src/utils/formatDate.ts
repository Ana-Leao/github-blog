import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface dateProps {
  date: string;
}

export function formatDate({date}: dateProps ) {
  formatDistanceToNow(new Date(date), {
    addSuffix: true,
    locale: ptBR,
  })
}