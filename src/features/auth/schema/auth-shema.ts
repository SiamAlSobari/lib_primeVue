import z from "zod";

export const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const registerFormSchema = z.object({
  email: z.email({ error: "Email harus valid" }),
  name: z
    .string({ error: "Name tidak boleh kosong" })
    .min(3, "Name minimal 3 karakter"),
  password: z.string(),
});
