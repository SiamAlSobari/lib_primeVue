import { format } from "date-fns";
import { id } from "date-fns/locale";

export function date(date: string) {
    return format(date, "dd MMMM yyyy", { locale: id });
}