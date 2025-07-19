import z from "zod";

export const loginFormSchema = z.object({
  email: z.string().email({ error: "Email harus valid" }),
  password: z.string().min(6, "Password minimal 6 karakter"),
});

export const registerFormSchema = z.object({
  email: z.email({ error: "Email harus valid" }),
  name: z
    .string({ error: "Name tidak boleh kosong" })
    .min(3, "Name minimal 3 karakter"),
  password: z.string().min(6, "Password minimal 6 karakter"),
});
